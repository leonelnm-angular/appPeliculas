import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesService } from './providers/movies.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app.routing';
import { MovieComponent } from './components/movie/movie.component';

// Pipes
import { ImgMoviesPipe } from './pipes/img-movies.pipe';
import { SizeParagraphPipe } from './pipes/size-paragraph.pipe';
import { ImgMovieBigPipe } from './pipes/img-movie-big.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    MovieComponent,
    ImgMoviesPipe,
    SizeParagraphPipe,
    ImgMovieBigPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
