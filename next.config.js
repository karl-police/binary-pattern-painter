var b_isDevelopment = (process.env.NODE_ENV == "development")


/** @type {import('next').NextConfig} */
const nextConfig = {
    // enables static exports
    output: "export",
    
    reactStrictMode: false, // if on could run useEffect twice

    /*i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },*/
    
    /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath: (!b_isDevelopment) ? "/binary-pattern-painter-online" : "",

    distDir: 'build',

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
     */
    /*images: {
        unoptimized: true,
    },*/
};

module.exports = nextConfig;