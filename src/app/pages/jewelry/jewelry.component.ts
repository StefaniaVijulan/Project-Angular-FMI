import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss']

})
export class JewelryComponent implements OnInit {

  selectedJewel: any = {photo: "", id: 0, name: "", description: "", price: ""};

  constructor(private _router: Router) { }
  public jewelys =[
    {"id":1, "name":"Brăţară Moments din argint","price":"400", "description": "Brăţară Moments din argint, cu inchizatoare in forma de Inimă Rose ce include si zirconiu cubic transparent","photo":"bratara1.png"},
    {"id":2, "name":"Brățară cu lanț voluminos înnodat în stil infinity", "price":"120", "description": "Iubire la puterea a doua prin interpretarea unică a simbolului infinitului de la Pandora. Nodul emblematic înconjoară centrul asimetric pentru a simboliza puterea conexiunii sentimentale.","photo":"bratara2.png"},
    {"id":3, "name":"Brăţară Moments din argint, Inimă Rose Pavé", "price":"124", "description":"Brăţară Moments din argint, cu inchizatoare in forma de Inimă Rose ce include si zirconiu cubic transparent","photo":"bratara3.png"},

  ]
  ngOnInit(): void {
  }
  onSelect(x:any){
    this.selectedJewel = x;
  }
}
