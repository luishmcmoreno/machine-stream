import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IMachine } from '../../models/machines.model';

@Component({
  selector: 'app-machine-location-dumb',
  templateUrl: './machine-location-dumb.component.html',
  styleUrls: ['./machine-location-dumb.component.scss']
})
export class MachineLocationDumbComponent implements OnInit {

  @Input() machines: IMachine[];
  @ViewChild('map') mapElement: ElementRef;
  private map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {

    });
    const bounds = new google.maps.LatLngBounds();
    this.machines.forEach(machine => {
      const latLng = new google.maps.LatLng(machine.longitude, machine.latitude);
      bounds.extend(latLng);
      const marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
      });
    });
    
    this.map.fitBounds(bounds);
  }

}
