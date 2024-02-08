import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, decrementaContador, incrementaContador } from './store/app.state';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NGRX1';
  counter$?: Observable<any>;

  constructor(private store: Store<{ app: IAppState }>){
    this.counter$ = this.store.select('app').pipe(
      map(e => e.counter)
    )
  }

  incrementaContador() {
    this.store.dispatch(incrementaContador())
  }

  decrementaContador() {
    this.store.dispatch(decrementaContador())
  }

}
