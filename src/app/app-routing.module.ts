import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCategComponent } from './job.categ/job.categ.component';
import { JobDetailsComponent } from './job.details/job.details.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path:'',component:JobsComponent},
  {path:'job/:id', component:JobCategComponent},
  {path:'job/field/:f_id/:id', component:JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
