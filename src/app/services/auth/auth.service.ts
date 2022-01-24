import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// models
import { IUser } from 'src/app/models/user.model';
import { IHttpResponse } from 'src/app/models/http-response.model';
// envs
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http$: HttpClient
  ) { }

  async authUser(username: string, password: string): Promise<IHttpResponse<string>> {
    try {
      const response = await this.http$.post<string>(`${environment.apiUrl}/auth?username=${username}&password=${password}`, {}).toPromise();
      return { ok: true, response, error: null}
    } catch (e) {
      return { ok: false, response: null, error: e}
    }
  }

  async getUserInfo(): Promise<IHttpResponse<IUser>> {
    try {
      const response = await this.http$.get<IUser>(`${environment.apiUrl}/auth`).toPromise();
      return {ok: true, response, error: null};
    } catch (e) {
      return {ok: false, response: null, error: e};
    }
  }

  async logout(): Promise<IHttpResponse<string>> {
    try {
      const response = await this.http$.get<string>(`${environment.apiUrl}/logout`).toPromise();
      return {ok: true, response, error: null};
    } catch (e) {
      return {ok: false, response: null, error: e};
    }
  }
}
