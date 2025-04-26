import { Movie } from "./movie.model";
import { Person } from "./person.model";
import { TvShow } from "./tv.model";

export interface MediaBase {
    id: number;
    media_type: 'movie' | 'tv' | 'person';
    poster_path?: string | null;
    backdrop_path?: string | null;
    overview?: string;
    popularity?: number;
    vote_average?: number;
    vote_count?: number;
    adult?: boolean;
    original_language?: string;
    genre_ids?: number[];
}
export type Media = Movie | TvShow | Person;
