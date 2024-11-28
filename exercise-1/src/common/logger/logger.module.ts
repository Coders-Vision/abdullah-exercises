import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { v4 as uuidv4 } from 'uuid';
@Module({
  imports: [
    PinoLoggerModule.forRootAsync({
      useFactory: async () => {
        return {
          pinoHttp: {
            name: `Book Store Service`,
            level: 'info',
            genReqId: (request) => request.headers['x-correlation-id'] || uuidv4(),
            transport: {
              target: 'pino-pretty',
              options: {
                singleLine: true,
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
              },
            },
          },
        };
      },
    }),
  ],
  exports: [PinoLoggerModule],
})




export class LoggerModule { }
