import { Component, OnInit, Input, AfterContentChecked, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Puppy, initializePuppy } from '../puppy';

@Component({
  selector: 'app-puppy-edit',
  templateUrl: './puppy-edit.component.html',
  styleUrls: ['./puppy-edit.component.scss']
})
export class PuppyEditComponent implements OnInit, OnChanges {

  _puppyId: string;
  @Input() set puppyId(value: string) {
    this._puppyId = value;
    this.getPuppy();
  }
  get puppyId() {
    return this._puppyId;
  }
  @Input() refresh: any;
  @Input() request: any;

  constructor() { }

  puppy: Puppy;

  ngOnInit() {
  }

  getPuppy() {
    if (this.request) {
      this.request('puppies/get', { puppyId: this.puppyId }).subscribe(puppy => {
        this.puppy = initializePuppy(puppy);
      });
    }
  }

  makeRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  onIssueAccessKey() {
    this.puppy.accessKey = this.makeRandomString(10);
  }

  onDelete() {
    this.request('puppies/delete', { puppyId: this.puppyId }).subscribe(() => {
      this.refresh();
    });
  }


}
