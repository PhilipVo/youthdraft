import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  
  jwt = this.route.snapshot.paramMap.get('jwt');
  options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.jwt}`
    })
  };
  success = false;

  validate() {
    this.http.post('https://youthdraft.com/api/league/validate', { JWT: this.jwt }, this.options)
      .subscribe(() => this.success = true)
  }
}