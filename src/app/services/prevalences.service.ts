import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrevalenceService {


  constructor(private http: HttpClient) { }

  getPrevalence() {
    return this
            .http.get('../../assets/prevalences.json');
        }
}
