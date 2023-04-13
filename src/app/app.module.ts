import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { NewsPageComponent } from './features/news-page/news-page.component';
import { SpinnerComponent } from './features/spinner/spinner.component';
import { LoadingInterceptor } from './services/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsPageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
