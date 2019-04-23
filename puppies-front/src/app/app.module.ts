import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { IndexComponent } from './index/index.component';
import { PuppySummaryComponent } from './puppy-summary/puppy-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    IndexComponent,
    PuppySummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
