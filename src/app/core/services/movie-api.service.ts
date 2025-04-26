import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import{ TvShow } from '../models/tv.model';
import { Person } from '../models/person.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly apikey = environment.apiKey;
  constructor(private _httpClient: HttpClient) { }


//movies api
  getPopularMovies(): Observable<Movie[]> {
    return this
    ._httpClient
    .get<{ results: Movie[] }>(`${this.baseUrl}/movie/popular?api_key=${this.apikey}`)
    .pipe
    (map(res => res.results));
  }
  getMovieDetails(id: number): Observable<Movie> {
    return this._httpClient
    .get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apikey}`);
  }

  //tv shows api
  getPopularTvShows(): Observable<TvShow[]> {
    return this
    ._httpClient
    .get<{ results: TvShow[] }>(`${this.baseUrl}/tv/popular?api_key=${this.apikey}`)
    .pipe
    (map(res => res.results));
  }

  getTvShowDetails(id: number): Observable<TvShow> {
    return this._httpClient
    .get<TvShow>(`${this.baseUrl}/tv/${id}?api_key=${this.apikey}`);
  }

  //people api
  getPopularPeople(): Observable<Person[]> {
    return this
    ._httpClient
    .get<{ results: Person[] }>(`${this.baseUrl}/person/popular?api_key=${this.apikey}`)
    .pipe
    (map(res => res.results));
  }

  getPersonDetails(id: number): Observable<Person> {
    return this._httpClient
    .get<Person>(`${this.baseUrl}/person/${id}?api_key=${this.apikey}`);
  }

  getImageUrl(path: string | null| undefined, size: string = 'w500'): string {
    return path 
      ? `${environment.imageBaseUrl}${size}${path}`
      : '/public/images/gallery.png'; 
  }
  
}
