import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private offers;
  private proposals;
  private selectedProposal;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.get('/api/proposals/get-my-applications')
      .then(data => this.proposals = data)
      .catch(error => console.log(error));
  }

  getOffersForProposal(proposal): void {
    this.selectedProposal = proposal;
    this.http.get(`/api/get-offers-for-proposal/`)
      .then(data => this.offers = data)
      .catch(error => console.log(error));
  }

  sendTicket(): void {
    this.http.post('/api/suppliers/send-ticket', null)
      .catch(error => console.log(error));
  }

}
