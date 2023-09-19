"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import "../AdminFaq.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

interface ReqDocsFormData {
  question: string;
  answer: string;
  status: string;
}

interface IErrors {
  question: boolean;
  answer: boolean;
  select: boolean;
}

const Admin_faq_form = () => {
  const searchParams = useSearchParams();
  const question = searchParams.get("question");
  const answer = searchParams.get("answer");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ question: false, select: false, answer: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [faqans, setFaqans] =useState<string>("");

  useEffect(() => {
    if (question) {
      setTextName(question);
      setFaqans(answer || '');
      setSelect(status || '');
    }
  }, []);

  const handleQuestionChange = (event: SelectChangeEvent<string>) => {
    setTextName(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    // debugger;
    setSelect(event.target.value);
  };
  const handleAnswerCanage = (event: SelectChangeEvent<string>) => {
    // debugger;
    setFaqans(event.target.value);
  };

  const router = useRouter();


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReqDocsFormData>();

  const onSubmit: any = (e:any) => {
    e.preventDefault();
    // debugger
    if (!textName) {
      setErrors({ ...error, question: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    if (!faqans) {
      setErrors({ ...error, answer: true });
    }
    const payload: { question: string, status:string, answer:string } = {question: textName, status: select, answer: faqans};
    payload.question = textName;
    payload.status = select;
    payload.answer = faqans
    console.log(payload, "payload");
   router.push("/adminpage/pages/admin_faqs")
  };
  const [data,setdata]=useState({
    Question: "",
    Answer: "",
    Status:"",
    CreatedDate: "1/2/2023",
    UpdatedDate: "1/2/2024"
   })

   
  const handle=(e)=>{
    const newdata:any={...data}
    newdata[e.target.name]=e.target.value
    setdata(newdata)
  }

  const HandleSubmits=(e)=>{
    axios.post("http://localhost:4000/user/createFAQS",{
      Question:data.Question,
      Answer: data.Answer,
      Status:data.Status,
  CreatedDate: data.CreatedDate,
  UpdatedDate: data.UpdatedDate

    })
    .then(()=>{
      setdata({
        Question: "",
        Answer: "",
        CreatedDate: "",
        UpdatedDate: "",
        Status:""
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e)=>HandleSubmits(e)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New FAQ</h1>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Question"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      name="Question"
                      value={data.Question}
                      onChange={(e)=>handle(e)}
                      error={!!errors.question}
                      helperText={
                        errors.question && "This name field is required"
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Answer"
                      multiline
                      rows={4}
                      sx={{ width: "100%" }}
                      value={data.Answer}
                      name="Answer"
                      onChange={(e)=>handle(e)}
                      error={!!errors.answer}
                      helperText={errors.answer && "field is required"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Status"
                          name="Status"
                          value={data.Status}
                          onChange={(e)=>handle(e)}
                          required
                        >
                          <MenuItem value={"active"}>Active</MenuItem>
                          <MenuItem value={"inactive"}>Inactive</MenuItem>
                        </Select>
                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="magcatbtn">
              <Button
                variant="contained"
                type="submit"
                className="catsubmitbtn"
                color="primary"
              >
                {question ? "Update" : "Submit"}
              </Button>
              <Button variant="contained" color="error" onClick={() => router.push("/adminpage/pages/admin_location")}>
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default Admin_faq_form;
