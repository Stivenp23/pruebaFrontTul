import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logo = '../assets/img/logo.png';
  formSuccess: boolean;

  constructor(
    public store: Store<AppState>,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  success() {
    this.formSuccess = true;
    setTimeout(() => {
      this.formSuccess = false;
    }, 3000);
  }
}
