import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamComponent } from './team-list/team.component';

// the prefix for all these routes is team
const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    children: [
      {
        path: ':id', // the full route to render this child is /team/:id
        // now this component is a child of the TeamComponent, which means, we can render this component inside TeamComponent
        component: TeamDetailsComponent,
      },
    ],
  },
];

@NgModule({
  // this routes will be lazy-loaded, that's why it must be use forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
