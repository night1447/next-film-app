export type IFilmFeature = 'choice' | 'exclusive' | 'creating' | 'all';

export interface FilmCardMinimize {
    title: string;
    isSubscribe?: boolean;
    year: number;
    limitAge: string;
    rating: string;
    country: string;
    mainGenre: string;
    isSeries: boolean;
    duration: number;
    urlImg: string;
    href: string;
    bestCharacteristic: string;
    feature?: IFilmFeature;
}

