import { Component, OnInit } from '@angular/core';
import { Moviegenre } from 'src/app/model/moviegenre.class';
import { MovieGenreService } from 'src/app/service/moviegenre.service';

@Component({
  selector: 'app-moviegenre-list',
  templateUrl: './moviegenre-list.component.html',
  styleUrls: ['./moviegenre-list.component.css']
})
export class MoviegenreListComponent implements OnInit {
  title: string = "MovieGenre-List";
  moviegenres: Moviegenre[] = [];
  constructor(private moviegenreSvc: MovieGenreService) { }

  ngOnInit(): void {
    this.moviegenreSvc.list().subscribe(
      jr => {
        this.moviegenres = jr.data as Moviegenre[];
        console.log("List of genres", this.moviegenres);
      }
    );

  }

}


