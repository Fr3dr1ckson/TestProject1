import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from "@nestjs/core";
import { TestModule } from "./api/TestModule";
import { ClassSerializerInterceptor, ValidationPipe, VERSION_NEUTRAL, VersioningType } from "@nestjs/common";
import { systemLogger } from "./LoggerCore";
import { applyStaticMiddleware } from "./api/StaticUtil";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TestModule, { bodyParser: true});
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('port');

  applyStaticMiddleware(app);

  app.enableCors();

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });

  await app.listen(port);
  const url = await app.getUrl()

  systemLogger.info(`Started server on ${url}`);
}
bootstrap();