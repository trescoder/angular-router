import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Member, TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent implements OnInit {
  public member?: Member;

  constructor(
    private teamService: TeamServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      console.log(params);
      this.member = await this.teamService.getMember(Number(params['id']));
    });
  }
}
