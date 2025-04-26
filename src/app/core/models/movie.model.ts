import { MediaBase } from './media.model';

export interface Movie extends MediaBase {
    media_type: 'movie';
    title: string;
    original_title?: string;
    release_date?: string;
    video?: boolean;
}