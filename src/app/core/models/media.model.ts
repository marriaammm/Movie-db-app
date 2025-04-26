export interface MediaBase {
    id: number;
    backdrop_path: string | null;
    poster_path: string | null;
    overview: string;
    popularity: number;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    vote_average: number;
    vote_count: number;
}