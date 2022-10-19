import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailsComponent } from './job.details/job.details.component';
import { JobCategComponent } from './job.categ/job.categ.component';
import { RoadsComponent } from './job.details/roads/roads.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    JobDetailsComponent,
    JobCategComponent,
    RoadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }