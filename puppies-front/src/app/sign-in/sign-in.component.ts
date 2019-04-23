import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  dogPhotoUrl: string;

  ngOnInit() {
    this.http.get<any>('https://dog.ceo/api/breed/Shiba/images/random')
      .subscribe(data => this.dogPhotoUrl = data.message);
  }

}
