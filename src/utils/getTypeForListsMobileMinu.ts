export const getTitleAndLink = (type: string): any => {
    if (type === 'movies')
        return {
            title: 'common:header.movies',
            linkOnAll: 'common:mobileMenu.allFilms',
            href: '/',
        };
    if (type === 'series')
        return {
            title: 'common:header.series',
            linkOnAll: 'common:mobileMenu.allSeries',
            href: '/',
        };
    if (type === 'cartoons')
        return {
            title: 'common:header.cartoons',
            linkOnAll: 'common:mobileMenu.allCartoons',
            href: '/',
        };
    if (type === 'tv') return 'common:header.tv';
    if (type === 'aboutUs') return 'common:mobileMenu.aboutUs.aboutUs';
    if (type === 'support') return 'common:mobileMenu.support.support';
    return '';
};
