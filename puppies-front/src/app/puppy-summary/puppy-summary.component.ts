import { Component, OnInit, Input } from '@angular/core';
import { Puppy, initializePuppy } from '../puppy';

@Component({
  selector: 'app-puppy-summary',
  templateUrl: './puppy-summary.component.html',
  styleUrls: ['./puppy-summary.component.scss']
})
export class PuppySummaryComponent implements OnInit {

  @Input() puppyId: string;
  @Input() request: any;
  @Input() refresh: any;

  puppy: Puppy;

  constructor() { }

  ngOnInit() {
    this.request('puppies/get', { puppyId: this.puppyId }).subscribe(puppy => {
      this.puppy = initializePuppy(puppy);
    });
  }

  onDelete() {
    this.request('puppies/delete', { puppyId: this.puppyId }).subscribe(() => {
      this.refresh();
    });
  }

}
