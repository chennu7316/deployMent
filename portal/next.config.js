/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    typescript: {
        //it will ignore the type error during build
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
