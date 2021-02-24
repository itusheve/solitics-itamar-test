import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IDataType} from '../types/data-type.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jsonDataResult: any;
  constructor(private http: HttpClient) {
  }

  getData(): Observable<IDataType[]> {
    return this.http.get<IDataType[]>('/assets/data.json');
  }
}
