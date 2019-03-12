import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgMovies'
})
export class ImgMoviesPipe implements PipeTransform {
  
  private urlImage300 = 'https://image.tmdb.org/t/p/w200';

  transform(value: string): any {

    return `${ this.urlImage300 }`+value;

  }

}
