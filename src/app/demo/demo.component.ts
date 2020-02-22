import { Component, OnInit } from '@angular/core';
import { RestHandlerService } from '../services/rest-handler.service';
import { Observable } from 'rxjs';
import { Country } from '../model/Country';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public data$: Observable<Country[]>;
  constructor(private restService: RestHandlerService) { }

  ngOnInit() { }

  generateClientError() {
    const a = null;
    a.toString();
  }

  generateBackendStatus(status) {
    this.data$ = this.restService.get(`http://localhost:8080/getStatus?status=${status}`);
  }
}
