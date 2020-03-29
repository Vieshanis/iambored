import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  public data$: Observable<any>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.data$ = this.apiService.getData().pipe(tap(data => console.log(data.data[0])));
  }

}
