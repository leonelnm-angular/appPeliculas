import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgMovies'
})
export class ImgMoviesPipe implements PipeTransform {
  
  private urlImage185 = 'https://image.tmdb.org/t/p/w185';

  transform(value: string): any {

    return `${ this.urlImage185 }`+value;

  }

}
