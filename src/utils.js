import { logger } from "./Logger";

export const assertString = (val, name) => {
  if (typeof val !== "string") {
    logger.breakingError(`${name} must be a string but was: ${val}`);
  }
};
