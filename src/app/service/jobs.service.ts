import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetJobDetailsResponse } from '../models/get-job-details-res.model';
import { GetJobFieldsResponse } from '../models/get-job-fields-res.model';
import { GetJobTitlesResponse } from '../models/get-job-titles-res.mocel';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private baseUrl = 'http://localhost:8000/'
  constructor(private http :HttpClient) { }

  getJobFields() : Observable<GetJobFieldsResponse>{
    return this.http.get<GetJobFieldsResponse> (`${this.baseUrl}api/job/fields`);
  }
  getJobTitles(id:any) : Observable<GetJobTitlesResponse>{
    return this.http.get<GetJobTitlesResponse> (`${this.baseUrl}api/job/titles/${id}`);
  }
  getJobDetails(id:any) : Observable<GetJobDetailsResponse>{
    return this.http.get<GetJobDetailsResponse> (`${this.baseUrl}api/job/details/${id}`);
  }
}
