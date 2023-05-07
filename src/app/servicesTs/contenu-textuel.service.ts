import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Text } from '../models/text.model';

const baseUrl = 'http://localhost:8080/api/ContenuText';

@Injectable({
  providedIn: 'root'
})
export class ContenuTextuelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Text[]> {
    return this.http.get<Text[]>(baseUrl);
  }

  get(id: any): Observable<Text> {
    return this.http.get<Text>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Text[]> {
    return this.http.get<Text[]>(`${baseUrl}?title=${title}`);
  }
}
