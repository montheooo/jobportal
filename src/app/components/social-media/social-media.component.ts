import { Component } from '@angular/core';
import { Profile } from 'src/app/Models/Profile';


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {

  myData: Profile = {

    myName:"Denis Monthe Happy",
    myProfession:"Full Stack Developer",
    imageProfile:"https://media.licdn.com/dms/image/D4E03AQFs4gU8ao2QZA/profile-displayphoto-shrink_800_800/0/1682960071683?e=1689206400&v=beta&t=GT2K7GB-BcR5Z6yvOD6G9z1jS2G88M9Wi9Ghy6naiPk",
    linkedinProfile:"https://www.linkedin.com/in/montheooo/",
    githubProfile:"https://github.com/montheooo",
    slackProfile:"https://app.slack.com/",
    aboutMe:"With more than 10 years of experience in the information and communication technology (ICT), I have worked in the areas of infrastructure management, software development and data analytics. I mainly worked in the design and development of several web applications (Frontend and Backend) in the fields of management, logistics, accounting. Today, I am particularly interested in software quality issues, managing software projects following the SCRUM method in order to create robust software systems perfectly adapted to the needs of customers and end users."

}
}
