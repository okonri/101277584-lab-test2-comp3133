import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  api = 'https://api.spacexdata.com/v3/launches';
  constructor(private http: HttpClient) { }
  
  getMissions() {
  	return this.http.get(this.api);

  }
}