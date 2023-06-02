import { Component, Input } from '@angular/core';
import { JobPost } from 'src/app/Models/job-post';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent {

  @Input()
  cardData! : JobPost ;
}
