import { Component, OnInit } from '@angular/core';
import { Member, TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public members: Member[] = [];

  constructor(private teamService: TeamServiceService) {}

  async ngOnInit() {
    this.members = await this.teamService.getMembers();
  }
}
