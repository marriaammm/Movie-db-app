import { Movie } from './movie.model';
import { TvShow } from './tv.model';

export interface Person {
    id: number;
    name: string;
    original_name: string;
    media_type: string;
    adult: boolean;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string | null;
    known_for?: (Movie | TvShow)[];
}