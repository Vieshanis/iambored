import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    public getData(): Observable<any> {

        return this.http.get('https://reqres.in/api/unknown');
    }

    public getDelayedData(): Observable<any> {

        return this.http.get('https://reqres.in/api/users?delay=3');
    }

    public getExchangeRates(): Observable<any> {

        return this.http.get('https://api.exchangeratesapi.io/latest')
    }

}