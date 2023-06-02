import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { JobPost, JobType, Language } from 'src/app/Models/job-post';

@Component({
  selector: 'app-highlight-job',
  templateUrl: './highlight-job.component.html',
  styleUrls: ['./highlight-job.component.css']
})
export class HighlightJobComponent {

  datas: JobPost[] ;

  /**
   *
   */
  constructor() {

    this.datas = [

      {
        jobPostDate: "2020-02-01",
        jobTitle: "Full stack developer",
        jobDescription: "concevoir developer tester integrer deployer",
        location:"Ottawa ON",
        rating:4.5,
        salary:50.000,
        language: Language.french,
        company: "Google",
        jobType: JobType.hybrid
      },

      {
        jobPostDate: "2020-02-01",
        jobTitle: "Full stack developer",
        jobDescription: "concevoir developer tester integrer deployer",
        location:"Ottawa ON",
        rating:4.5,
        salary:50.000,
        language: Language.french,
        company: "Google",
        jobType: JobType.hybrid
      },

      {
        jobPostDate: "2020-02-01",
        jobTitle: "Full stack developer",
        jobDescription: "concevoir developer tester integrer deployer",
        location:"Ottawa ON",
        rating:4.5,
        salary:50.000,
        language: Language.french,
        company: "Google",
        jobType: JobType.hybrid
      },

      {
        jobPostDate: "2020-02-01",
        jobTitle: "Full stack developer",
        jobDescription: "concevoir developer tester integrer deployer",
        location:"Ottawa ON",
        rating:4.5,
        salary:50.000,
        language: Language.french,
        company: "Google",
        jobType: JobType.hybrid
      },
    ]



  }

}
