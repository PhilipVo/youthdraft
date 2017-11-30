import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent {
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  reject() {
    this.http.postJwt('/api/league/reject', this.route.snapshot.paramMap.get('jwt'))
      .then(() => this.router.navigate(['/']))
      .catch(() => { });
  }
}