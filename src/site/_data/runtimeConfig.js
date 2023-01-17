module.exports = () => {
  return {
    isDevelopment: process.env.ENVIRONMENT === "development",
  };
};
