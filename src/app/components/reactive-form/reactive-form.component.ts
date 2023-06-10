import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobPost } from 'src/app/Models/job-post';
import { PostJobFirebaseService } from 'src/app/services/post-job-firebase.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  jobformGroup!: FormGroup;
  submitted = false;
  job!:JobPost;

  constructor(private formBuilder: FormBuilder,  private router: Router, private jobservice:PostJobFirebaseService ){
  }

  ngOnInit() {

    this.jobformGroup = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      location: ['', [Validators.required]],

      salary: ['', Validators.required],
      language: ['', Validators.required],
      company: ['', Validators.required],
      jobType: ['', Validators.required],

    })

  }

  get f() { return this.jobformGroup.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.jobformGroup.invalid) {
      console.log(this.jobformGroup);
      return;
    }

   this.jobservice.postJob(this.jobformGroup.value).subscribe(
    (data) => {
      console.log(this.jobformGroup);
      this.router.navigate(['/home']);
    }
   )




  }



}
