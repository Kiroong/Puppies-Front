import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  @Input() token: string;
  @Output() tokenChange: EventEmitter<string> = new EventEmitter();

  dogPhotoUrl: string;
  backendUrl = environment.backendUrl;
  signInFormData = {
    id: '',
    pw: ''
  }
  errorMessage: string;

  ngOnInit() {
    this.http.get<any>('https://dog.ceo/api/breed/Shiba/images/random')
      .subscribe(data => this.dogPhotoUrl = data.message);
  }

  onSubmit() {
    const { id, pw } = this.signInFormData;
    this.http.post<any>(this.backendUrl + 'auth', { id, pw })
      .subscribe(token => {
        if (token.length) {
          this.errorMessage = '';
          this.tokenChange.emit(token);
        } else {
          this.errorMessage = 'Invalid ID or PW';
        }
      });
    }

}
