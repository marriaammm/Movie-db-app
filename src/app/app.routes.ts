import { Routes } from '@angular/router';
import { MovieListComponent } from './features/movies/movie-list/movie-list.component';
import { MovieDetailsComponent } from './features/movies/movie-details/movie-details.component';
import { TvListComponent } from './features/tv/tv-list/tv-list.component';
import { TvDetailsComponent } from './features/tv/tv-details/tv-details.component';
import { PeopleListComponent } from './features/people/people-list/people-list.component';
import { PeopleDetailsComponent } from './features/people/people-details/people-details.component';

export const routes: Routes = [
    {
        path: 'movies',
        children: [
            { path: '', component: MovieListComponent },
            { path: ':id', component: MovieDetailsComponent }
        ]
    },

    {
        path: 'tv',
        children: [
            { path: '', component: TvListComponent },
            { path: ':id', component: TvDetailsComponent }
        ]
    },

    {
        path: 'people',
        children: [
            { path: '', component: PeopleListComponent },
            { path: ':id', component: PeopleDetailsComponent }
        ]
    },

    { path: '', redirectTo: 'movies', pathMatch: 'full' },

    { path: '**', redirectTo: 'movies' }
];