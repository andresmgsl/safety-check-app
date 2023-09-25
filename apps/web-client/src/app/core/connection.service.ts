import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConnectionService {
  private readonly _rpcEndpoint = new BehaviorSubject(
    localStorage.getItem('rpcEndpoint') ?? 'https://rpc.heavyduty.builders'
  );
  private readonly _programId = new BehaviorSubject(
    localStorage.getItem('programId') ??
    '52pYVuqpERBeQExxC3GnPFrLSbCS4GsJTmwRCmGwMJWY'
  );

  readonly rpcEndpoint$ = this._rpcEndpoint.asObservable();
  readonly programId$ = this._programId.asObservable();

  setRpcEndpoint(rpcEndpoint: string) {
    this._rpcEndpoint.next(rpcEndpoint);
    localStorage.setItem('rpcEndpoint', rpcEndpoint);
  }

  setProgramId(programId: string) {
    this._programId.next(programId);
    localStorage.setItem('programId', programId);
  }
}
