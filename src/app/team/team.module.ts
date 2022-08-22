import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team-list/team.component';
import { TeamServiceService } from './team-service.service';
import { AppRoutingModule } from '../app-routing.module';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
  declarations: [TeamComponent, TeamDetailsComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [TeamServiceService],
})
export class TeamModule {}
