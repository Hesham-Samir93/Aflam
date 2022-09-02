import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { PopularComponent } from './popular/popular.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TvshowComponent } from './tvshow/tvshow.component';


const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',canActivate:[GuardGuard] , component: HomeComponent},
  {path: 'nowplaying',canActivate:[GuardGuard] , component: NowplayingComponent},
  {path: 'popular',canActivate:[GuardGuard] , component: PopularComponent},
  {path: 'toprated',canActivate:[GuardGuard] , component: TopRatedComponent},
  {path: 'tvshow',canActivate:[GuardGuard] , component: TvshowComponent},
  {path: 'moviedetail/:id',canActivate:[GuardGuard] , component: DetailsComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
