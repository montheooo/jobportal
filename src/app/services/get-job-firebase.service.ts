import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJobFirebaseService {

  constructor(private http:HttpClient) { }

  getJob() : Observable<any>{

    return this.http.get('https://jobportal-ee422-default-rtdb.firebaseio.com/job.json').pipe(
      tap(),
      take(1)
    )
  }
}
