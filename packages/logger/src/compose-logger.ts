import { Logger } from './logger-interface';

/**
 * Compose loggers into single logger
 */
export class ComposeLogger implements Logger {
  constructor(private loggers: Logger[]) {}

  log(message?: any, ...optionalParams: any[]): void {
    this.loggers.forEach((it) => it.log(message, ...optionalParams));
  }
  info(message?: any, ...optionalParams: any[]): void {
    this.loggers.forEach((it) => it.info(message, ...optionalParams));
  }
  warn(message?: any, ...optionalParams: any[]): void {
    this.loggers.forEach((it) => it.warn(message, ...optionalParams));
  }
  error(message?: any, ...optionalParams: any[]): void {
    this.loggers.forEach((it) => it.error(message, ...optionalParams));
  }
}
