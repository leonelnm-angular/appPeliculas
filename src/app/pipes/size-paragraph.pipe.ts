import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeParagraph'
})
export class SizeParagraphPipe implements PipeTransform {


  transform(value: string): string {

    let texto: string;

    texto = value;

    if( value.length > 150 ) {
      texto = value.substring(1, 150) + '...';
    }

    return texto;
  }

}
