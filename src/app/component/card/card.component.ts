import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  brand:String;
  listband = ['IPhone','S20 5G','NOTE20']
  constructor() { }

  ngOnInit(): void {
  }

}
