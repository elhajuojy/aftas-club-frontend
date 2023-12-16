import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService, AngularToastifyModule } from 'angular-toastify';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { MemberComponent } from './pages/member/member/member.component';
import { StatusCompetition } from './models/competition-status-enum.model';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionDetailComponent } from './pages/competition-detail/competition-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RankCardTrComponent } from './shared/rank-card-tr/rank-card-tr.component';
import { AddCompetitionModalComponent } from './shared/add-competition-modal/add-competition-modal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterDropdownCompetitionComponent } from './shared/filter-dropdown-competition/filter-dropdown-competition/filter-dropdown-competition.component';
import { AddMemberModalComponent } from './shared/add-member-modal/add-member-modal/add-member-modal.component';
import { AddMemberToCompetitionComponent } from './shared/add-member-to-competition/add-member-to-competition/add-member-to-competition.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    AdminNavbarComponent,
    MemberComponent,
    CompetitionDetailComponent,
    HomeComponent,
    RankingComponent,
    RankCardTrComponent,
    AddCompetitionModalComponent,
    FilterDropdownCompetitionComponent,
    AddMemberModalComponent,
    AddMemberToCompetitionComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
  imports: [
    AngularToastifyModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
