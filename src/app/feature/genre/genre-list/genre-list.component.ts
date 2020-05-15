import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  title: string = "Genre-List";
  genres: Genre[] = [];
  constructor(private genreSvc: GenreService) { }

  ngOnInit(): void {
    this.genreSvc.list().subscribe(
      jr => {
        this.genres = jr.data as Genre[];
        console.log("List of genres", this.genres);
      }
    );

  }

}


