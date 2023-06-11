import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';
import { JobPost, JobType, Language } from 'src/app/Models/job-post';
import { PostJobFirebaseService } from 'src/app/services/post-job-firebase.service';

@Component({
  selector: 'app-highlight-job',
  templateUrl: './highlight-job.component.html',
  styleUrls: ['./highlight-job.component.css']
})
export class HighlightJobComponent implements OnInit, OnDestroy {

  jobs: any;
  currentJob!: JobPost;
  sub!: Subscription;

  /**
   *
   */
  constructor(private jobservice:PostJobFirebaseService) {
  }

    ngOnInit(): void {
      this.sub = this.jobservice.getJob().subscribe(
        data => {
          const response = []
          for (let key in data) {
            console.log(key)
            const responseItem = {
              id: key,
              ...data[key]
            }
            response.push(responseItem)
            this.jobs = response
          }
        }
      )
    }

    ngOnDestroy(): void {
      if (this.sub) {
        this.sub.unsubscribe();
      }
    }
}
