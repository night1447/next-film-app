export interface Movie {
    id: number;
    name: string;
    enName: string | null;
    type: string;
    rating: number;
    year: number;
    poster: string;
}

export interface Profession {
    id: number;
    name: string;
    movies: Movie[];
}

export interface Person {
    id: number;
    name: string;
    enName: string;
    photo: string;
    professions: Profession[];
}
