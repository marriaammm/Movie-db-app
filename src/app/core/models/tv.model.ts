import { MediaBase } from './media.model';

export interface TvShow extends MediaBase {
    media_type: 'tv';
    name: string;
    original_name?: string;
    first_air_date?: string;
    origin_country?: string[];
}