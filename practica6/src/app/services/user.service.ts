import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPersonajeResponse, IPersonaje } from '../interfaces/ipersonaje.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://peticiones.online/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IPersonaje[]> {
    return this.http.get<IPersonajeResponse>(this.apiUrl).pipe(
      map((response: IPersonajeResponse) => response.results)
    );
  }

  getUserById(id: number): Observable<IPersonaje> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IPersonaje>(url);
  }

  createUser(user: IPersonaje): Observable<IPersonaje> {
    return this.http.post<IPersonaje>(this.apiUrl, user);
  }

  updateUser(id: number, user: any): Observable<IPersonaje> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<IPersonaje>(url, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}