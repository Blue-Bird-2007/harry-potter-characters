import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IConfig } from './app-config.model';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfig {
  static settings: IConfig;
  private jsonFile = 'assets/config.json';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getConfig(): Observable<HttpResponse<IConfig>> {    
    return this.http.get<IConfig>(this.jsonFile, { observe: 'response' });
  }
}
