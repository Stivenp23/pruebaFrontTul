import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppActions} from '../actions';
import {catchError, switchMap, take} from 'rxjs/operators';
import {AppService} from '../services/app.service';
import {of} from 'rxjs';

@Injectable()
export class AppEffect {
  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {
  }

  @Effect()
  getApp$ = this.actions$.pipe(
    ofType(AppActions.SET_APP),
    take(1),
    switchMap<any, any>(data =>
      this.appService.getApp().pipe(
        switchMap(res => of(AppActions.getAppSuccess(res))),
        catchError(err => {
          return of();
        })
      )
    )
  );

}
