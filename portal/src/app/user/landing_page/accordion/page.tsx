"use client";
import  React,{ useEffect, useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import "./accordion.css";
import "../accordion/accordion.css"
import { Container, Typography, styled } from "@mui/material";
import axios from "axios";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
    const [faqData, setFaqData] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:4000/user/getAllFAQS")
      .then((res)=>{
        console.log(res.data.data,"res.data.datares.data.data")
        setFaqData(res.data.data)
      })
      .catch((err)=>{
        console.log(err,"error")
      })
    })

  return (
    <section className="accordion">
 <div className="faq_head">
        <h1>Frequently Asked Questions</h1>
      </div>
            {faqData.map((item:any, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
  
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
            <Typography className="acc_head">
              {item.Question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.Answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
}
