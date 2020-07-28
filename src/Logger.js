export const logger = {
  warn: function (warning) {
    console.warn(`[WARNING]: ${warning}`);
  },
  error: function (error) {
    console.error(`[ERROR]: ${error}`);
  },
  breakingError: function (error) {
    throw new Error(error);
  },
};
