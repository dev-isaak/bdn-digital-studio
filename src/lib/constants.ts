export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";

let API_URL = '';
const env = process.env.NODE_ENV;

if (env === "development") {
  API_URL = 'http://localhost:3000';
} else if (env === "production") {
  API_URL = 'https://bdndigitalstudio.com';
}

export default API_URL;
