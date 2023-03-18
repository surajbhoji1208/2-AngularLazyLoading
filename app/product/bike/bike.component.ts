import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  constructor() {
    console.warn("bike loaded")
   }

  ngOnInit(): void {
  }

}
