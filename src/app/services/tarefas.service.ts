import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarefaRequest } from '../models/request/tarefa-request';
import { TarefaResponse } from '../models/response/tarefa-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private httpClient: HttpClient) {

   }

   getAll(tarefaRequest: TarefaRequest): Observable<TarefaResponse> {
    return this.httpClient.get<TarefaResponse>('');
   }

  getById(id: number): Observable<TarefaResponse> {
    return this.httpClient.get<TarefaResponse>('' + id);
  }

  create(tarefaRequest: TarefaRequest): Observable<TarefaResponse> {
    return this.httpClient.post<TarefaResponse>('', tarefaRequest);
  }

  update(id: number, tarefaRequest: TarefaRequest): Observable<TarefaResponse> {
    return this.httpClient.put<TarefaResponse>('' + id, tarefaRequest);
  }

  delete(id: number): Observable<TarefaResponse> {
    return this.httpClient.delete<TarefaResponse>('' + id);
  }

}
