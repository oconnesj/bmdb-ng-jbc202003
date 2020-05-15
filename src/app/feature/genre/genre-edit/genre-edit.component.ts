import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  title: string = "Genre-Edit";
  submitBtnTitle: string = "Edit";
  genre: Genre = new Genre();
  genreId: number = 0;


  constructor(private genreSvc: GenreService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.genreId = parms["id"]);
    this.genreSvc.get(this.genreId).subscribe(jr => {

      this.genre = jr.data as Genre;
    });

    
  }
  save() {
    this.genreSvc.edit(this.genre).subscribe(jr => {
        if (jr.errors == null) {
          this.router.navigateByUrl("/genre/list");

        }
        else{
          console.log("***Error editing genre.", this.genre);
        }
    });

  }
  delete() {
    this.genreSvc.delete(this.genreId).subscribe(jr => {
      if (jr.errors==null){
        console.log(jr.data);
        this.router.navigateByUrl("/genre/list");
      }
      else{
        console.log("*** Error deleting genre!", this.genreId,jr.errors);
      }

    });

  }
}
