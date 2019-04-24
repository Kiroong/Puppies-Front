import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @Input() authToken: string;

  backendUrl = environment.backendUrl;

  puppyIds: string[];
  puppyIdToEdit: number;

  constructor(
    private http: HttpClient,
  ) { }

  request(path: string, args: any) {
    return this.http.post(this.backendUrl + path, {
      token: this.authToken,
      ...args
    });
  }

  refresh() {
    this.request('puppies/list', {}).subscribe((puppyIds: string[]) => {
      this.puppyIds = puppyIds;
    });
  }

  ngOnInit() {
    this.refresh();
  }

  onCreatePuppy() {
    this.request('puppies/create', {}).subscribe(() => this.refresh());
  }

}
