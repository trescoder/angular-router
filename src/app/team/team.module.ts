import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team-list/team.component';
import { TeamServiceService } from './team-service.service';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  declarations: [TeamComponent, TeamDetailsComponent],
  imports: [CommonModule, TeamRoutingModule],
  providers: [TeamServiceService],
})
export class TeamModule {}
