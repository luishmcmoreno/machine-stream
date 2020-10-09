import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MachineStatusColors } from '../../models/machine-status-color.map';
import { IMachine } from '../../models/machines.model';

@Component({
  selector: 'app-machine-location-dumb',
  templateUrl: './machine-location-dumb.component.html',
  styleUrls: ['./machine-location-dumb.component.scss']
})
export class MachineLocationDumbComponent implements OnInit {

  @Input() machines: IMachine[] = [];
  @ViewChild('map') mapElement: ElementRef;
  private map: google.maps.Map;
  private markers: {[id: string]: google.maps.Marker} = {};

  constructor(
    private router: Router,
  ) { }

  private setMarkerColor(marker: google.maps.Marker, color: string): void {
    marker.setIcon(`https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}`);
  }

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
      this.setMarkerColor(marker, MachineStatusColors[machine.status]);
      this.markers[machine.id] = marker;
      marker.addListener('click', () => {
        this.router.navigate([`/machine/${machine.id}/details`])
      });
    });
    this.map.fitBounds(bounds);
  }

  ngOnChanges(): void {
    this.machines.forEach((machine) => {
      if (this.markers[machine.id]) {
        this.setMarkerColor(this.markers[machine.id], MachineStatusColors[machine.status]);
      }
    })
  }

}
