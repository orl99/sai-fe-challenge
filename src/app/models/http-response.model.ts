import { HttpErrorResponse } from '@angular/common/http';
export interface IHttpResponse<TResponse> {
  ok: boolean;
  response: TResponse | null;
  error: HttpErrorResponse | null;
}
