interface IObjTypes {
    [key: string]: {
        [key: string]: {
            href: string;
            value?: string;
            src?: string;
        }[] ;
    }
}

const objTypes: IObjTypes = {
    countries: {
        movies: [
            { href: '/', value: 'common:header.countries.Russians' },
            { href: '/', value: 'common:header.countries.Foreign' },
            { href: '/', value: 'common:header.countries.Soviet' },
        ],
        series: [
            { href: '/', value: 'common:header.countries.Russians' },
            { href: '/', value: 'common:header.countries.Foreign' },
            { href: '/', value: 'common:header.countries.American' },
            { href: '/', value: 'common:header.countries.Ukrainian' },
            { href: '/', value: 'common:header.countries.Korean' },
            { href: '/', value: 'common:header.countries.Turkish' },
        ],
        cartoons: [
            { href: '/', value: 'common:header.countries.Soviet' },
            { href: '/', value: 'common:header.countries.Russians' },
            { href: '/', value: 'common:header.countries.American' },
            { href: '/', value: 'common:header.countries.Foreign' },
        ],
    },
    genres: {
        movies: [
            { href: '/', value: 'common:header.genres.arthouse' },
            { href: '/', value: 'common:header.genres.militants' },
            { href: '/', value: 'common:header.genres.western' },
            { href: '/', value: 'common:header.genres.military' },
            { href: '/', value: 'common:header.genres.detectives' },
            { href: '/', value: 'common:header.genres.forTheWholeFamily' },
            { href: '/', value: 'common:header.genres.forChildren' },
            { href: '/', value: 'common:header.genres.documentaries' },
            { href: '/', value: 'common:header.genres.drama' },
            { href: '/', value: 'common:header.genres.historical' },
            { href: '/', value: 'common:header.genres.catastrophes' },
            { href: '/', value: 'common:header.genres.comedy' },
            { href: '/', value: 'common:header.genres.criminal' },
            { href: '/', value: 'common:header.genres.melodramas' },
            { href: '/', value: 'common:header.genres.mystical' },
            { href: '/', value: 'common:header.genres.basedOnComics' },
            { href: '/', value: 'common:header.genres.adventures' },
            { href: '/', value: 'common:header.genres.sport' },
            { href: '/', value: 'common:header.genres.thrillers' },
            { href: '/', value: 'common:header.genres.horror' },
            { href: '/', value: 'common:header.genres.fantastic' },
            { href: '/', value: 'common:header.genres.fantasy' },
        ],
        series: [
            { href: '/', value: 'common:header.genres.biography' },
            { href: '/', value: 'common:header.genres.militants' },
            { href: '/', value: 'common:header.genres.military' },
            { href: '/', value: 'common:header.genres.detectives' },
            { href: '/', value: 'common:header.genres.forTheWholeFamily' },
            { href: '/', value: 'common:header.genres.documentaries' },
            { href: '/', value: 'common:header.genres.drama' },
            { href: '/', value: 'common:header.genres.historical' },
            { href: '/', value: 'common:header.genres.comedy' },
            { href: '/', value: 'common:header.genres.criminal' },
            { href: '/', value: 'common:header.genres.medical' },
            { href: '/', value: 'common:header.genres.melodramas' },
            { href: '/', value: 'common:header.genres.adventures' },
            { href: '/', value: 'common:header.genres.romantic' },
            { href: '/', value: 'common:header.genres.TVshow' },
            { href: '/', value: 'common:header.genres.thrillers' },
            { href: '/', value: 'common:header.genres.turkish' },
            { href: '/', value: 'common:header.genres.horror' },
            { href: '/', value: 'common:header.genres.fantastic' },
            { href: '/', value: 'common:header.genres.fantasy' },
        ],
        cartoons: [
            { href: '/', value: 'common:header.genres.anime' },
            { href: '/', value: 'common:header.genres.action' },
            { href: '/', value: 'common:header.genres.detectives' },
            { href: '/', value: 'common:header.genres.forAdults' },
            { href: '/', value: 'common:header.genres.forTheWholeFamily' },
            { href: '/', value: 'common:header.genres.forChildren' },
            { href: '/', value: 'common:header.genres.drama' },
            { href: '/', value: 'common:header.genres.historical' },
            { href: '/', value: 'common:header.genres.comedy' },
            { href: '/', value: 'common:header.genres.criminal' },
            { href: '/', value: 'common:header.genres.musical' },
            { href: '/', value: 'common:header.genres.featureLength' },
            { href: '/', value: 'common:header.genres.adventures' },
            { href: '/', value: 'common:header.genres.educational' },
            { href: '/', value: 'common:header.genres.series' },
            { href: '/', value: 'common:header.genres.thrillers' },
            { href: '/', value: 'common:header.genres.fantastic' },
            { href: '/', value: 'common:header.genres.fantasy' },
        ],
        tv: [
            {
                href: 'https://www.ivi.ru/tvplus',
                value: 'common:header.selections.TVchannels',
            },
            {
                href: 'https://www.ivi.ru/tvplus/razvlekatelnoe',
                value: 'common:header.selections.entertainment',
            },
            {
                href: 'https://www.ivi.ru/tvplus/deti',
                value: 'common:header.selections.children',
            },
            {
                href: 'https://www.ivi.ru/tvplus/sport',
                value: 'common:header.selections.sportsTV',
            },
            {
                href: 'https://www.ivi.ru/tvplus/documentalnoe',
                value: 'common:header.selections.documentary',
            },
        ],
    },
    years: {
        movies: [
            { href: '/', value: 'common:header.yearsMovies.2023' },
            { href: '/', value: 'common:header.yearsMovies.2022' },
            { href: '/', value: 'common:header.yearsMovies.2021' },
            { href: '/', value: 'common:header.yearsMovies.2020' },
        ],
        series: [
            { href: '/', value: 'common:header.yearsSeries.2023' },
            { href: '/', value: 'common:header.yearsSeries.2022' },
            { href: '/', value: 'common:header.yearsSeries.2021' },
            { href: '/', value: 'common:header.yearsSeries.2020' },
        ],
        cartoons: [
            { href: '/', value: 'common:header.yearsCartoons.2023' },
            { href: '/', value: 'common:header.yearsCartoons.2022' },
            { href: '/', value: 'common:header.yearsCartoons.2021' },
            { href: '/', value: 'common:header.yearsCartoons.2020' },
        ],
    },
    selections: {
        movies: [
            {
                href: 'https://www.ivi.ru/new/movie-new',
                value: 'common:header.selections.new',
            },
            {
                href: 'https://www.ivi.ru/collections',
                value: 'common:header.selections.collections',
            },
            {
                href: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
                value: 'common:header.selections.iviRating',
            },
            {
                href: 'https://www.ivi.ru/new/soon-ivi',
                value: 'common:header.selections.comingSoonToIvi',
            },
            {
                href: 'https://www.ivi.ru/trailers',
                value: 'common:header.selections.trailers',
            },
            {
                href: 'https://www.ivi.ru/goodmovies',
                value: 'common:header.selections.whatToSee',
            },
            {
                href: 'https://www.ivi.ru/collections/movies-hd',
                value: 'common:header.selections.moviesInHD',
            },
            {
                href: 'https://www.ivi.ru/collections/vyibor-ivi',
                value: 'common:header.selections.iviChoice',
            },
            {
                href: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
                value: 'common:header.selections.subscriptionNews',
            },
            {
                href: 'https://www.ivi.ru/collections/filmyi-amediateka',
                value: 'common:header.selections.moviesAmediateka',
            },
            {
                href: 'https://www.ivi.ru/collections/best-movies',
                value: 'common:header.selections.popularFilms',
            },
            {
                href: 'https://www.ivi.ru/collections/ivi-originals',
                value: 'common:header.selections.iviFilms',
            },
        ],
        series: [
            {
                href: 'https://www.ivi.ru/new/series-new',
                value: 'common:header.selections.new',
            },
            {
                href: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
                value: 'common:header.selections.iviRating',
            },
            {
                href: 'https://www.ivi.ru/collections/series-hd',
                value: 'common:header.selections.seriesInHD',
            },
            {
                href: 'https://www.ivi.ru/collections/tvshow-free?sort=new',
                value: 'common:header.selections.freeSeries',
            },
            {
                href: 'https://www.ivi.ru/collections/serialyi-amediateka',
                value: 'common:header.selections.seriesAmediateka',
            },
            {
                href: 'https://www.ivi.ru/collections/series-paramount-play',
                value: 'common:header.selections.seriesParamountPlay',
            },
        ],
        cartoons: [
            {
                href: 'https://www.ivi.ru/new/animation-new',
                value: 'common:header.selections.new',
            },
            {
                href: 'https://www.ivi.ru/collections/cartoons-hd',
                value: 'common:header.selections.cartoonsInHD',
            },
            {
                href: 'https://www.ivi.ru/collections/animation-paramount-play',
                value: 'common:header.selections.cartoonParamountPlay',
            },
            {
                href: 'https://www.ivi.ru/collections/dreamworks-cartoons',
                value: 'common:header.selections.cartoonDreamworks',
            },
            {
                href: 'https://www.ivi.ru/collections/ctc-kid',
                value: 'common:header.selections.cartoonsSTSKids',
            },
        ],
    },
    images: {
        movies: [
            {
                href: 'https://www.ivi.ru/watch/509517',
                src: '/images/header/movies/movie_1.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/474934',
                src: '/images/header/movies/movie_2.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/504121',
                src: '/images/header/movies/movie_3.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/500728',
                src: '/images/header/movies/movie_4.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/503408',
                src: '/images/header/movies/movie_5.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/504177',
                src: '/images/header/movies/movie_6.jpg',
            },
        ],
        series: [
            {
                href: 'https://www.ivi.ru/watch/skazka-na-ostrove',
                src: '/images/header/series/series_1.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/lyubov-razum-mest',
                src: '/images/header/series/series_2.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/protiv-vseh',
                src: '/images/header/series/series_3.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/semya-2023',
                src: '/images/header/series/series_4.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/predposlednyaya-instantsiya',
                src: '/images/header/series/series_5.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/i-snova-zdravstvujte',
                src: '/images/header/series/series_6.jpg',
            },
        ],
        cartoons: [
            {
                href: 'https://www.ivi.ru/watch/213844',
                src: '/images/header/cartoons/cartoon_1.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/mishki-bratishki-oskolki-kristalla',
                src: '/images/header/cartoons/cartoon_2.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/tsvetnyashki',
                src: '/images/header/cartoons/cartoon_3.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/cherepashki',
                src: '/images/header/cartoons/cartoon_4.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/chuch-myauch',
                src: '/images/header/cartoons/cartoon_5.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/506006',
                src: '/images/header/cartoons/cartoon_6.jpg',
            },
        ],
        tv: [
            {
                href: 'https://www.ivi.ru/watch/mtv-plyazh-royal',
                src: '/images/header/tv/tv_1.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/odinochestvo-v-seti',
                src: '/images/header/tv/tv_2.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/comedy_woman',
                src: '/images/header/tv/tv_3.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/zhenskij-stand-up',
                src: '/images/header/tv/tv_4.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/comedy_club',
                src: '/images/header/tv/tv_5.jpg',
            },
            {
                href: 'https://www.ivi.ru/watch/v-zapisi-s-bobom-kostasom-vozvraschenie',
                src: '/images/header/tv/tv_6.jpg',
            },
        ],
    },
};

export const getTypeForHeaderDrop = (type: string, typeList: string): any => {
    return objTypes[typeList][type];
};
