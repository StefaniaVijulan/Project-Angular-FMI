import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-jewelry-details',
  templateUrl: './jewelry-details.component.html',
  styleUrls: ['./jewelry-details.component.scss'],
  inputs: ['jewel']
})
export class JewelryDetailsComponent implements OnInit {
  public jewel: any;
  constructor(private _activateRouter: ActivatedRoute) { }

  ngOnInit() {
  }


}
