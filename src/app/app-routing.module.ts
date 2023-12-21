import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionDetailComponent } from './pages/competition-detail/competition-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { MemberComponent } from './pages/member/member/member.component';
import { FishComponent } from './pages/fish/fish.component';

const routes: Routes = [
  { path: 'competitions', component: CompetitionComponent },
  {path: '',component: HomeComponent},
  { path: 'competitions/:id', component: CompetitionDetailComponent },
  {path : 'fishes', component: FishComponent},
  { path: 'members', component: MemberComponent },
  { path: 'members/:id', component: MemberComponent},
  { path: 'competitions/:id/ranking', component: RankingComponent },
  { path: '', redirectTo: '/competitions', pathMatch: 'full' },
  { path: '**', redirectTo: '/competitions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


