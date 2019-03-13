import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgMovieBig'
})
export class ImgMovieBigPipe implements PipeTransform {

  private urlImage185 = 'https://image.tmdb.org/t/p/w300';
  private imgNotAvailable = '../assets/img/notAvailable.png'

  transform(value: string): any {

    if (value === null) {
      return this.imgNotAvailable;
    }

    return `${ this.urlImage185 }`+value;

  }

}
