import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Movie } from '../../../core/models/movie.model';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { TvShow } from '../../../core/models/tv.model';
import { Person } from '../../../core/models/person.model';
import { Media } from '../../../core/models/media.model';


@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent {
  media = input.required<Media>();
  // mediaType = input.required<'movie' | 'tv'>();
  defaultPoster = '/public/images/gallary.png';

  constructor(protected _movieApiService: MovieApiService) {}
  getTitle(): string {
    const media = this.media();
        if (this.isMovie(media)) {
      return media.title || media.original_title || 'Untitled Movie';
    }
    else if (this.isTvShow(media)) {
      return media.name || media.original_name || 'Untitled TV Show';
    }
    else if (this.isPerson(media)) {
      return media.name || 'Unknown Person';
    }
    
    return 'Untitled';
  }

  private isMovie(media: Media): media is Movie {
    return 'title' in media;
  }

  private isTvShow(media: Media): media is TvShow {
    return 'name' in media && 'first_air_date' in media;
  }
  private isPerson(media: Media): media is Person {
    return 'name' in media && 'profile_path' in media;
  }

  getReleaseDate(): string | null {
    switch (this.media().media_type) {
      case 'movie': return (this.media() as Movie).release_date || null;
      case 'tv': return (this.media() as TvShow).first_air_date || null;
      default: return null;
    }
  }
  getPosterUrl(): string {
    const path = this.media().poster_path || 
                (this.media().media_type === 'person' ? (this.media() as Person).profile_path : null);
    return path ? this._movieApiService.getImageUrl(path) : this.defaultPoster;
  }
  handleImageError() {
    console.error('Error loading image for:', this.getTitle());
    this.defaultPoster = '/public/images/gallary.png';
  }

  getRouterLink(): string[] {
    const media = this.media();
    
    if (this.isMovie(media)) {
      return ['/movies', media.id.toString()];
    }
    else if (this.isTvShow(media)) {
      return ['/tv', media.id.toString()];
    }
    else if (this.isPerson(media)) {
      return ['/people', media.id.toString()];
    }
    
    return ['/']; 
  }
}
