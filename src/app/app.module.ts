import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { DemoComponent } from './demo/demo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RollbarService, rollbarFactory } from './config';

@NgModule({
  declarations: [AppComponent, DemoComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: RollbarService,
      useFactory: rollbarFactory
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
