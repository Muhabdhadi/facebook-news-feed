import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HandlingDataService } from './handling-data.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MakePostComponent } from './make-post/make-post.component';

@NgModule({
  declarations: [AppComponent, MakePostComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [HandlingDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
