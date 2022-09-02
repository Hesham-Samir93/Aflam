import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { observable } from 'rxjs';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './search.pipe';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { PopularComponent } from './popular/popular.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvshowComponent,
    NavComponent,
    RegisterFormComponent,
    LogInComponent,
    DetailsComponent,
    SearchPipe,
    NowplayingComponent,
    TopRatedComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
