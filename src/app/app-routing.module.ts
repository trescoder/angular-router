import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamRoutingModule } from './team/team-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then((t) => t.TeamModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
