import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}