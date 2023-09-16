import { Logger } from './logger-interface';

export class ConsoleLogger implements Logger {
  log = (message?: any, ...optionalParams: any[]) => {
    // @ts-ignore semantic error TS2304: Cannot find name '__DEV__'.
    if (__DEV__) {
      console.log(message, ...optionalParams);
    }
  };
  info = (message?: any, ...optionalParams: any[]) => {
    // @ts-ignore semantic error TS2304: Cannot find name '__DEV__'.
    if (__DEV__) {
      console.info(message, ...optionalParams);
    }
  };
  warn = (message?: any, ...optionalParams: any[]) => {
    // @ts-ignore semantic error TS2304: Cannot find name '__DEV__'.
    if (__DEV__) {
      console.warn(message, ...optionalParams);
    }
  };
  error = (message?: any, ...optionalParams: any[]) => {
    // @ts-ignore semantic error TS2304: Cannot find name '__DEV__'.
    if (__DEV__) {
      console.error(message, ...optionalParams);
    }
  };
}
