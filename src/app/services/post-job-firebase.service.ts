import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JobPost } from '../Models/job-post';
import { Observable, map, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostJobFirebaseService {

  constructor(private http: HttpClient) {
  }

  getJob() : Observable<any>{

    return this.http.get('https://jobportal-ee422-default-rtdb.firebaseio.com/job.json').pipe(
      tap(),
      take(1)
    )
  }

  postJob(data:any){

    return this.http.post<JobPost>('https://jobportal-ee422-default-rtdb.firebaseio.com/job.json', data)
  }
}
