import { IHttpResponse } from 'src/app/models/http-response.model';
import { Injectable } from '@angular/core';
// http
import { HttpClient } from '@angular/common/http';
// envs
import { environment } from '../../../environments/environment';
import { IArticleResponse } from 'src/app/models/articles.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http$: HttpClient
  ) { }

  async getArticles(): Promise<IHttpResponse<IArticleResponse>> {
    try {
      const response = await this.http$.get<IArticleResponse>(`${environment.apiUrl}/articles`).toPromise();
      return {ok: true, response, error: null};
    } catch (e) {
      return {ok: false, response: null, error: e};
    }
  }
}
