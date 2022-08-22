import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamDetailsComponent } from './team/team-details/team-details.component';
import { TeamComponent } from './team/team-list/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'team',
    component: TeamComponent,
    children: [
      {
        path: ':id', // the full route to render this child is /team/:id
        // now this component is a child of the TeamComponent, which means, we can render this component inside TeamComponent
        component: TeamDetailsComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
