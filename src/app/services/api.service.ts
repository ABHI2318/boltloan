import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../models/api.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Add your API methods here
  // Example:
  // getItems() {
  //   return this.http.get(`${API_CONFIG.baseUrl}/items`);
  // }
}