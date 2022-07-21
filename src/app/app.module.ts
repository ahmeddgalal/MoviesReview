import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from "@angular/common/http";
import { MoviedataComponent } from './moviedata/moviedata.component';
import { PopularComponent } from './popular/popular.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    MoviesComponent,
    TvshowComponent,
    NavbarComponent,
    NotfoundComponent,
    MoviedataComponent,
    PopularComponent,
    NowplayingComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
