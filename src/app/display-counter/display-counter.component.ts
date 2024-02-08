import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAppState } from '../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrl: './display-counter.component.css'
})
export class DisplayCounterComponent implements OnInit{
  counter$?: Observable<any>;

  constructor(private store: Store<{ app: IAppState }>){
    this.counter$ = this.store.select('app').pipe(
      map(e => e.counter)
    );
  }

  ngOnInit(): void {
    console.log("Aqui: ", this.counter$);
  }

}
