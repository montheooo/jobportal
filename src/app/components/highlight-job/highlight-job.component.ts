import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';
import { JobPost, JobType, Language } from 'src/app/Models/job-post';
import { GetJobFirebaseService } from 'src/app/services/get-job-firebase.service';
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

  @Input()
  isLoggedIn!:boolean;

  /**
   *
   */
  constructor(private jobservice:GetJobFirebaseService) {
  }

    ngOnInit(): void {
      this.sub = this.jobservice.getJob().subscribe(
        data => {
          const response = []
          for (let key in data) {

            const responseItem = {
              id: key,
              ...data[key]
            }
            response.push(responseItem)
            this.jobs = response
          }
          console.log(response);
        }
      )
    }

    ngOnDestroy(): void {
      if (this.sub) {
        this.sub.unsubscribe();
      }
    }
}
