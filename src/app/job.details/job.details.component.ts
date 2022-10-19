import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetails } from '../models/job-details.model';
import { JobRoads } from '../models/job-road.model';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-job.details',
  templateUrl: './job.details.component.html',
  styleUrls: ['./job.details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private jobService : JobsService,
              private route: ActivatedRoute) { }

  
  
  ngOnInit(): void {
    let selectedFieldId = this.route.snapshot.paramMap.get('id');
    this.getDetails(selectedFieldId);
  }

  f_id = this.route.snapshot.paramMap.get('f_id');

  public jobs : JobDetails[] =[];
  public roads : JobRoads[] = [];
  
  rowIndex :number = 0;
  selected_job! : any ;
  road_title: any[] = [] ;
  

  getDetails(id :any){
    //this.isLoading = true;
    this.jobService.getJobDetails(id).subscribe((res)=>{
      this.jobs = res.data;
      this.roads = res.road; 
      //this.isLoading = false;
      this.selected_job=res.data[0].description;
      this.getRoads(res.data[0].id);
    });
  }

  public selectedJob(selectedRow: number, selectedRoad: number ,job: any){

    this.rowIndex = selectedRow;
    this.selected_job = job;
    this.getRoads(selectedRoad);

  }
  public getRoads(job_id: number){
    this.road_title=[];
    for (let s of this.roads){
      if (s.road_id==job_id){
        this.road_title.push(s);
      }
    }
  }


}
