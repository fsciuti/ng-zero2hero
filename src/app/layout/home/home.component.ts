import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngptt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Benvenuti in ngptt';

  constructor() { }

  ngOnInit() {
  }

}
