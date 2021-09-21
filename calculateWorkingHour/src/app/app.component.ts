import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReportWorkingHour';

  constructor(private router:Router){
  }

  list(){
    this.router.navigate(["list"]);
  }

  add(){
    this.router.navigate(["add"]);
  }

  calculate(){
    this.router.navigate(["calculate"]);
  }
}
