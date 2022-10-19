import { Component, OnInit } from '@angular/core';
import { JobFields } from '../models/job-fields.model';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private jobService : JobsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  public jobFields : JobFields[] = [];

  getProducts(){
    //this.isLoading = true;
    this.jobService.getJobFields().subscribe((res)=>{
      this.jobFields =res.data;
      //this.isLoading = false;
    });
  }
}
