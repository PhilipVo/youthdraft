import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private _ip = 'https://www.youthdraft.com';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any): Promise<any> {
    try {
      return Promise.reject(error.json().message);
    } catch (_) {
      return Promise.reject(error);
    }
  }

  private handleResponse(response: any): Promise<any> {
    try {
      return Promise.resolve(response.json());
    } catch (error) {
      return Promise.resolve(response);
    }
  }

  constructor(
    private authHttp: AuthHttp,
    private http: Http
  ) { }

  get ip(): string {
    return this._ip;
  }

  //////////////////////////////////////////////////////
  //               HTTP METHODS
  //////////////////////////////////////////////////////
  delete(url: string): Promise<any> {
    const http = url.includes('/api/') ? this.authHttp : this.http;
    return http.delete(`${this._ip}${url}`)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  get(url: string): Promise<any> {
    const http = url.includes('/api/') ? this.authHttp : this.http;
    return http.get(`${this._ip}${url}`)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  post(url: string, data: any): Promise<any> {
    const http = url.includes('/api/') ? this.authHttp : this.http;
    return http.post(`${this._ip}${url}`, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  postFormData(url: string, data: any): Promise<any> {
    return this.http.post(`${this._ip}${url}`, data)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  postJwt(url: string, jwt: any): Promise<any> {
    const header = new Headers({ 'Authorization': `Bearer ${jwt}` });
    return this.http.post(`${this._ip}${url}`, '', { headers: header })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  put(url: string, data: any): Promise<any> {
    const http = url.includes('/api/') ? this.authHttp : this.http;
    return http.put(`${this._ip}${url}`, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

}