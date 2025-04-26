import { Component, inject } from '@angular/core';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../../../shared/components/media-card/media-card.component';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  private mediaService = inject(MovieApiService);
  people = toSignal(this.mediaService.getPopularPeople());
}