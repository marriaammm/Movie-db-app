import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  private route = inject(ActivatedRoute);
  public movieService = inject(MovieApiService);

  movie = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.movieService.getMovieDetails(+id) : [];
      })
    )
  );
}