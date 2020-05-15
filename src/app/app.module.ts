import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail/credit-detail.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { GenreDetailComponent } from './feature/genre/genre-detail/genre-detail.component';
import { GenreEditComponent } from './feature/genre/genre-edit/genre-edit.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';

import { MoviegenreListComponent } from './feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MoviegenreEditComponent } from './feature/moviegenre/moviegenre-edit/moviegenre-edit.component';
import { MoviegenreCreateComponent } from './feature/moviegenre/moviegenre-create/moviegenre-create.component';
import { MoviegenreDetailComponent } from './feature/moviegenre/moviegenre-detail/moviegenre-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    MovieEditComponent,
    ActorDetailComponent,
    ActorCreateComponent,
    ActorEditComponent,
    CreditCreateComponent,
    CreditEditComponent,
    CreditDetailComponent,
    MenuComponent,
    UserLoginComponent,
    GenreCreateComponent,
    GenreDetailComponent,
    GenreEditComponent,
    GenreListComponent,

    MoviegenreListComponent,
    MoviegenreEditComponent,
    MoviegenreCreateComponent,
    MoviegenreDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
