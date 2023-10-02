/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        //it will ignore the type error during build
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
