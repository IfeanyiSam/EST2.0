
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ message: string }>(`http://${process.env["ELB_EP"]}/api/greeting`)
      .subscribe(response => {
        this.greeting = response.message;
      });
  }
}
