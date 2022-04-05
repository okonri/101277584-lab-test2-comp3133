import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mission_Interface } from '../models/mission_interface';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input() mission: Mission_Interface | undefined;
  @Output() value = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  goBackDetails(value: boolean): void {

    this.value.emit(value);

    }

}
