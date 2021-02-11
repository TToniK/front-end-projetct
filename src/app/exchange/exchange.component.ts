import { Component, OnInit } from '@angular/core';
import {ExchangeService} from '../services/exchange.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.styl']
})
export class ExchangeComponent implements OnInit {
  public ratesData$: Observable<any>;
  price: number;
  constructor(private service: ExchangeService) { }

  ngOnInit() {

    this.ratesData$ = this.service.getData();
  }

  calculate(rate, amount) {
    this.price = amount / rate;
    return this.price;
  }
}

