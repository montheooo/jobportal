import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JobPost } from '../Models/job-post';
import { take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostJobFirebaseService {

  constructor(private http: HttpClient) {
  }

  getJob(){

    return this.http.get<JobPost>('https://jobportal-ee422-default-rtdb.firebaseio.com/job.json').pipe(

      tap(data => console.log(data)),
      take(1)
    );
  }

  postJob(data:any){

    return this.http.post<JobPost>('https://jobportal-ee422-default-rtdb.firebaseio.com/job.json', data)
  }
}
