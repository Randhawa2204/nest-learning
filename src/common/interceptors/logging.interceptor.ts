import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const startTime = Date.now();

    console.log('Before Controller Execution');
    return next.handle()
    // .pipe(
    //   tap(() => {
    //     console.log(`Execution Time: ${Date.now() - startTime}ms`)
    //   })
    // )
    .pipe(
      finalize(() => {
        console.log(`Execution Time: ${Date.now() - startTime}ms`)
      })
    );
  }
}
