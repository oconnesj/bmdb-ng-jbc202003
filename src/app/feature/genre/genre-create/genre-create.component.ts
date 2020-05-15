import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  title: string = "Genre-Create";
  genre: Genre = new Genre();
  submitBtnTitle: string = "Create";
  constructor(private genreSvc: GenreService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.genreSvc.create(this.genre).subscribe(jr => {
      // if jr.erros is null, save was successful
      if (jr.errors==null){
        //sucess
        this.router.navigateByUrl("/genre/list");
      }
      else {
        console.log("***Error creating new genre:", this.genre), jr.errors;
      }
       


    }

    );


  }

}
