import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machine-details-page',
  templateUrl: './machine-details-page.component.html',
  styleUrls: ['./machine-details-page.component.scss']
})
export class MachineDetailsPageComponent implements OnInit {

  params$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
