import { Component, inject } from '@angular/core';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../../../shared/components/media-card/media-card.component';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent {
  private mediaService = inject(MovieApiService);
  tvShows = toSignal(this.mediaService.getPopularTvShows());
}