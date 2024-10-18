/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "img.clerk.com", // Replace with your image domain
        "anotherdomain.com", // You can add more domains as needed
        "clerk.dev", // Example for Clerk's profile images
        // Add any other domains where your images are hosted
      ],
    },
  };
  
  export default nextConfig;
  