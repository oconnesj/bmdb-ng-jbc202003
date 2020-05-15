import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Genre } from '../model/genre.class';
import { Observable } from 'rxjs';
const url: string = 'http://localhost:8080/genres/';


@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  create(genre: Genre): Observable<JsonResponse> {
    return this.http.post(url, genre) as Observable<JsonResponse>;
  }
  edit(genre: Genre): Observable<JsonResponse> {
    return this.http.put(url, genre) as Observable<JsonResponse>;
  }
  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }


}
