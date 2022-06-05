import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CnjAdapter } from '../adapters/cnj.adapter';
import {
  CnjFromApi,
  OperationStatus,
} from '../interfaces/cnj-from-api.interface';
import { CnjInterface } from '../interfaces/cnj.interface';

const BY_PROCESS_CNJ = 5;

@Injectable({
  providedIn: 'root',
})
export class CnjService {
  private apiURL = `/api/tribproc`;

  constructor(private httpClient: HttpClient, private cnjAdapter: CnjAdapter) {}

  getProcess(cnj: string): Observable<CnjInterface> {
    return this.httpClient
      .get<CnjFromApi | OperationStatus>(
        `${this.apiURL}/${cnj}?tipo_numero=${BY_PROCESS_CNJ}`
      )
      .pipe(map((response) => this.cnjAdapter.adapt(response)));
  }
}
