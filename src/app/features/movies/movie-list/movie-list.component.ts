import { Component } from '@angular/core';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaCardComponent } from '../../../shared/components/media-card/media-card.component';
import { Movie } from '../../../core/models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MediaCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];
  constructor(private _movieApiService: MovieApiService) {}
  ngOnInit() {
    this._movieApiService.getPopularMovies().subscribe({
      next: (movies) => this.movies = movies,
      error: (err) => console.error('Failed to load movies:', err),
      complete:() => console.log( this.movies)
    });
}
}