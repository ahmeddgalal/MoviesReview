import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { PopularComponent } from './popular/popular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrendingComponent } from './trending/trending.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'trending', pathMatch: 'full' },
  { path: 'trending', component: TrendingComponent, title: 'Trending' },
  { path: 'movies', component: MoviesComponent, title: 'Movies' },
  { path: 'tvshow', component: TvshowComponent, title: 'Tv Show' },
  { path: 'popular', component: PopularComponent, title: 'Popular' },
  { path: 'nowplaying', component: NowplayingComponent, title: 'Now Playing' },
  { path: 'search', component: SearchComponent, title: 'search' },
  { path: 'details/:id/:type', component: DetailsComponent, title: 'details' },
  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
