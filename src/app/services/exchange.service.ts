import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Currency} from '../classes/currency-item';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  ratesSource = 'https://api.exchangeratesapi.io/latest';
  currencies: Array<Currency>;

  constructor(private httpClient: HttpClient) {
    this.currencies = new Array<Currency>();
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.ratesSource).pipe(map(response => {
      // @ts-ignore
      // console.log(Object.keys(response.rates));
      // @ts-ignore
      // console.log(Object.values(response.rates));
      // @ts-ignore
      const objectArray = Object.entries(response.rates);

      objectArray.forEach(([key, value]) => {
        this.currencies.push(new Currency(key, Number(value)));
      });
      return this.currencies;
    }));
  }
}
