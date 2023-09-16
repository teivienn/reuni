import { Logger } from './logger-interface';

export class ConsoleLogger implements Logger {
  /** not working on metro */
  private getFileName = () => {
    const error = new Error();

    const stackLines = error?.stack?.split('\n');
    const callerLine = stackLines?.[2] || stackLines?.[1];
    const matches = callerLine?.match(/\(([^)]+)\)$/);

    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return 'unknown';
    }
  };

  log = (message?: any, ...optionalParams: any[]) => {
    // @ts-expect-error
    if (__DEV__) {
      console.log(message, ...optionalParams);
    }
  };
  info = (message?: any, ...optionalParams: any[]) => {
    // @ts-expect-error
    if (__DEV__) {
      console.info(message, ...optionalParams);
    }
  };
  warn = (message?: any, ...optionalParams: any[]) => {
    // @ts-expect-error
    if (__DEV__) {
      console.warn(message, ...optionalParams);
    }
  };
  error = (message?: any, ...optionalParams: any[]) => {
    // @ts-expect-error
    if (__DEV__) {
      console.error(message, ...optionalParams);
    }
  };
}
