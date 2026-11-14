import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { ProductModule } from './product/product.module.js';
import { OrderModule } from './order/order.module.js';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware.ts/request-id.middleware.js';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor.js';

@Module({
  imports: [UserModule, ProductModule, OrderModule],
  controllers: [AppController],
  providers: [AppService ,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
