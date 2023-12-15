import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionDetailComponent } from './pages/competition-detail/competition-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: 'competition', component: CompetitionComponent },
  {path: '',component: HomeComponent},
  { path: 'competition/:id', component: CompetitionDetailComponent },
  { path: 'competition/:id/ranking', component: RankingComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


