import { ConsoleLogger } from '@reuni/logger';

/*
  if you need to, use multiple loggers
  const logger = new ComposeLogger([new ConsoleLogger(), new CustomLogger implements Logger ])
*/

export const logger = new ConsoleLogger();
