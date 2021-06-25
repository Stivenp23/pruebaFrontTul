import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss'],
})
export class HomeProductComponent implements OnInit {
  data$: Observable<any>;

  constructor(
    public store: Store<AppState>,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }
}
