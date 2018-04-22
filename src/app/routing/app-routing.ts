// import { AuthGuardService } from './../services/guard/auth-guard.service';
// import { AuthenticationService } from './../services/authentication/authentication.service';
// import { TournamentsComponent } from './../components/tournaments/tournaments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../components/login/login.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
