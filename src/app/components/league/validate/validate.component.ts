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
  
  options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.route.snapshot.paramMap.get('jwt')}`
    })
  };
  success = false;

  validate() {
    this.http.post('https://youthdraft.com/api/league/validate', '', this.options)
      .subscribe(() => this.success = true)
  }
}