export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://cors-everywhere-me.herokuapp.com/http://capstonebackend-env.eba-kz2zadr9.us-east-1.elasticbeanstalk.com"
    : "http://127.0.0.1.8000";