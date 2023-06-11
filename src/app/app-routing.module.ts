import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { LoginComponent } from './components/login/login.component';
import { JobDetailsGuard } from './services/job-details.guard';
import { JobPostGuard } from './services/job-post.guard';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'job/:id', component: JobDetailsComponent, canActivate:[JobDetailsGuard] },
  { path: 'addjob', component: ReactiveFormComponent, canActivate:[JobPostGuard]},
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
