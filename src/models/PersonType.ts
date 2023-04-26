export type Movie = {
    id: number;
    name: string;
    enName: string | null;
    type: string;
    rating: number;
    year: number;
    poster: string;
};

export type Profession = {
    id: number;
    name: string;
    movies: Movie[];
};

export type Person = {
    id: number;
    name: string;
    enName: string;
    photo: string;
    professions: Profession[];
};
