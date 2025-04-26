import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../../../core/services/movie-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent {
  private route = inject(ActivatedRoute);
  public movieApiService = inject(MovieApiService);

  person = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.movieApiService.getPersonDetails(+id) : [];
      })
    )
  );

  getGenderText(gender: number | undefined): string {
    if (gender === undefined) return 'Not specified';
    
    switch(gender) {
      case 1: return 'Female';
      case 2: return 'Male';
      case 3: return 'Non-binary';
      default: return 'Not specified';
    }
  }
}