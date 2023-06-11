import { Component } from '@angular/core';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

const JobsTitle = [
	'Full stack engineer',
	'software developer',
	'back end developer',
	'.NET developer',
	'Java developer',
	'Cloud developer',
	'UI designer',
	'Angular developer',

];
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  public jobTitle: any;
  public location: any;

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : JobsTitle.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

}
