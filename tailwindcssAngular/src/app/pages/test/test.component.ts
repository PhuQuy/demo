import { Component, OnInit } from '@angular/core';
import { Profile } from '@models/profile';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'app/ngrx/actions/counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  count$: Observable<number>;
  profile1 = new Profile('a', 'b');
  profile2 = new Profile('c', 'd');
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
