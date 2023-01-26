import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceTsService {
  constructor(private http:HttpClient) { }

  register(payload:any){
    return this.http.post(`${environment.APP_URL}user`,payload);
  }
}
