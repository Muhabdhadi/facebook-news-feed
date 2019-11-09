import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HandlingDataService {
  configUrl = '../assets/data.json';

  constructor(private http: HttpClient) { }

  getAllPosts() {
  return this.http.get(this.configUrl);
  }
}
