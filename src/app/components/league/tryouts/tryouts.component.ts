import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-tryouts',
  templateUrl: './tryouts.component.html',
  styleUrls: ['./tryouts.component.css']
})
export class TryoutsComponent implements OnInit {
  constructor(private http: HttpService) { }

  error = null;
  tryouts = [];

  ngOnInit() {
    this.http.get('/api/tryouts')
      .then(tryouts => {
        this.tryouts = tryouts.map(tryout => {
          tryout.date = tryout.date.substring(0, 16);
          return tryout;
        });
      }).catch(() => { });
  }

  submit() {
    this.http.post('/api/tryouts', this.tryouts)
      .catch(error => this.error = typeof error === 'string' ? error : 'Something went wrong.');
  }
}
