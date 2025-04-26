import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent {
  private route = inject(ActivatedRoute);
  public movieApiService = inject(MovieApiService);

  tvShow = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.movieApiService.getTvShowDetails(+id) : [];
      })
    )
  );
}