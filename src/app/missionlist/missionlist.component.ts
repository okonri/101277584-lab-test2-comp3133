import { Component, OnInit } from '@angular/core';
import { MissionService } from '../network/mission.service';
import { Mission_Interface } from '../models/mission_interface';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: any;
  selectedMission: Mission_Interface | undefined;
  showList: boolean = true;

  missionSelect(mission: Mission_Interface): void {

    this.selectedMission = mission;
    this.showList = false;

   }
  constructor(private spaceXApi: MissionService) { }

  ngOnInit(): void {

    this.spaceXApi.getMissions().subscribe((missions:any) => {
  		this.missions = missions;

  	})
  }
  goBackList(value: boolean): void {

    this.showList = value;
  }
}
