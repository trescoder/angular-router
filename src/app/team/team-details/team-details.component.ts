import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member, TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent implements OnInit, AfterViewInit, OnChanges {
  public member?: Member;

  constructor(
    private teamService: TeamServiceService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.route.params.subscribe(async (params) => {
      this.member = await this.teamService.getMember(Number(params['id']));
    });
  }

  ngAfterViewInit(): void {
    // this only run once
    alert('child view loaded');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this won't run just because the component loads,
    // it runs after something changes in the view
    console.log(this.member);
  }
}
