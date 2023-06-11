import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginFirebaseService {

  constructor(private http:HttpClient) { }

  login(data:any): Observable<any> {
    return this.http.post(`https://jobportal-ee422-default-rtdb.firebaseio.com/login.json`, data);
  }

}
