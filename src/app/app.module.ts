import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { MemberComponent } from './pages/member/member/member.component';
import { StatusCompetition } from './models/competition-status-enum.model';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionDetailComponent } from './pages/competition-detail/competition-detail.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    AdminNavbarComponent,
    MemberComponent,
    CompetitionDetailComponent,
    HomeComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
