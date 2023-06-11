import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetJobDetailFirebaseService } from 'src/app/services/get-job-detail-firebase.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  Id!:string

  constructor(private jobservice:GetJobDetailFirebaseService, router:Router) {

    this.Id = router.url;
    console.log(this.Id);
  }

  ngOnInit(){

    this.jobservice.getJob(this.Id).subscribe(
      (data)=>{
        console.log(data)
      }
    )

  }

}
