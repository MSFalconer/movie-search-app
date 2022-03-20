import { MediaType } from '@services/omdb/types';

export const generateSearchMoviePath = ({ id, type = 'movie' }: { type: MediaType, id: string}) => `/${type}/${id}`;