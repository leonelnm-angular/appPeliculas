import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent implements OnInit {

  constructor( private _moviesS: MoviesService ) { }

  ngOnInit() {

    this._moviesS.test()
      .subscribe( res => console.log(res)
      );

      this._moviesS.buscarPelicula('casa')
        .subscribe( res => console.log(res)
         );

  }



}
