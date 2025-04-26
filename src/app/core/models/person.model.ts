import { MediaBase } from './media.model';
import { Movie } from './movie.model';
import { TvShow } from './tv.model';

export interface Person extends MediaBase {
    media_type: 'person';
    name: string;
    original_name?: string;
    gender?: number;
    known_for_department?: string;
    profile_path?: string | null;
    known_for?: Array<Movie | TvShow>;
}