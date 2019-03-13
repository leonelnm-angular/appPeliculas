import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  private id: string;
  public movie: any;

  public loading: boolean = false;

  constructor( private activated: ActivatedRoute, private _ms: MoviesService) {

    this.activated.params.subscribe( p => this.id=p['id']);

    this._ms.getDetail(this.id)
      .subscribe( res  => (
        this.movie = res,
        console.log(this.movie),
        this.loading = true
      ));

    

  }

  ngOnInit() {
  }

}
