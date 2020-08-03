import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { environment } from 'src/environments/environment';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiDomainInterceptor } from './providers/api-domain.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: ApiDomainInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
