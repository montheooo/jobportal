import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJobDetailFirebaseService {

  constructor(private http:HttpClient) {
  }

  getJob(id:string) {

    return this.http.get(`https://jobportal-ee422-default-rtdb.firebaseio.com/${id}.json`).pipe(
      tap(),
      take(1)
    )
  }

}
