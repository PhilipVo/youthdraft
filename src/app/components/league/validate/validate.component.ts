import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  success = false;

  validate() {
    this.http.postJwt('/api/league/validate', this.route.snapshot.paramMap.get('jwt'))
      .then(() => this.success = true)
      .catch(() => { });
  }
}