import {
  createLogger,
  transports,
  format,
  Logger as SystemLogger,
} from 'winston';

const loggers = {};

export const getLogger = (source = 'system'): SystemLogger => {
  if (loggers[source]) {
    return loggers[source];
  }

  const logger = createLogger({
    level: 'info',
    format: format.combine(
      format.simple(),
    ),
    defaultMeta: { source },
    transports: [new transports.Console()],
  });

  loggers[source] = logger;

  return logger;
};

export { SystemLogger };
export const systemLogger = getLogger('system');
