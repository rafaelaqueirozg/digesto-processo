import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cnj, OperationStatus } from '../models/cnj.model';

const BY_PROCESS_CNJ = 5;

@Injectable({
  providedIn: 'root',
})
export class CnjService {
  private apiURL = `/api/tribproc`;

  constructor(private httpClient: HttpClient) {}

  getProcess(cnj: string): Observable<Cnj> {
    return this.httpClient
      .get<Cnj | OperationStatus>(
        `${this.apiURL}/${cnj}?tipo_numero=${BY_PROCESS_CNJ}`
      )
      .pipe(map((response) => this.adapterResponse(response)));
  }

  private adapterResponse(response: Cnj | OperationStatus): Cnj {
    if ((response as OperationStatus).status_op) {
      return {} as Cnj;
    }
    return response as Cnj;
  }
}
