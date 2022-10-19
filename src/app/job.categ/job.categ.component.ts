import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobTitles } from '../models/job-titles.model';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-job-categ',
  templateUrl: './job.categ.component.html',
  styleUrls: ['./job.categ.component.css']
})
export class JobCategComponent implements OnInit {

  constructor(private jobService : JobsService,
    private route: ActivatedRoute) { }

  f_id! : any;
  ngOnInit(): void {
    this.f_id = this.route.snapshot.paramMap.get('id')
    this.getTitles(this.f_id);
  }
  public jobTitles : JobTitles[] = []

  getTitles(id :any){
    //this.isLoading = true;
    this.jobService.getJobTitles(id).subscribe((res)=>{
      this.jobTitles =res.data;
      //this.isLoading = false;
    });
  }

}
