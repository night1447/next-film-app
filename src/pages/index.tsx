import { Layout } from '@/components/layout/Layout';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import { FirstScreen, InteractiveBlock } from '@/components/Screens';
import { InteractiveType } from '@/models/InteractiveType';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
    const translation = useTranslation();
    const interestingInfo: InteractiveType[] = [
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        }, {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        }, {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
        title: 'Сериалы ivi',
    }, {
        href: '/',
        urlImg: '/example-interactive-card.jpeg',
        title: 'Сериалы ivi',
    }, {
        href: '/',
        urlImg: '/example-interactive-card.jpeg',
        title: 'Сериалы ivi',
    }, {
        href: '/',
        urlImg: '/example-interactive-card.jpeg',
        title: 'Сериалы ivi',
    }, {
        href: '/',
        urlImg: '/example-interactive-card.jpeg',
        title: 'Сериалы ivi',
    }, {
        href: '/',
        urlImg: '/example-interactive-card.jpeg',
        title: 'Сериалы ivi',
    }];
    const filmCards: FilmCardMinimize[] = [
        {
            title: 'Лунтик и его друзья',
            year: 2022,
            urlImg: '/luntik.jpeg',
            limitAge: '+0',
            rating: '7,5',
            country: 'USA',
            bestCharacteristic: 'сюжет',
            isSubscribe: true,
            duration: 0,
            isSeries: true,
            href: '/',
            mainGenre: 'Для детей',
            feature: 'choice',
        }, {
            title: 'Лунтик и его друзья',
            year: 2022,
            urlImg: '/luntik.jpeg',
            limitAge: '+0',
            rating: '7,5',
            country: 'USA',
            bestCharacteristic: 'сюжет',
            isSubscribe: false,
            duration: 8,
            isSeries: true,
            href: '/',
            mainGenre: 'Для детей',
            feature: 'choice',
        }, {
            title: 'Лунтик и его друзья',
            year: 2022,
            urlImg: '/luntik.jpeg',
            limitAge: '+0',
            rating: '7,5',
            country: 'USA',
            bestCharacteristic: 'сюжет',
            isSubscribe: false,
            duration: 12,
            isSeries: false,
            href: '/',
            mainGenre: 'Для детей',
            feature: 'choice',
        },
    ];
    return (
        <Layout title={translation.t('common:titles.index', {})}>
            <FirstScreen />
            <InteractiveBlock title={translation.t('index:watchFree')} isCards={true} href={'/'}
                              info={filmCards} />
            < InteractiveBlock title={'Сериалы с высоким рейтингом по подписке'} isCards={true} href={'/'}
                               info={filmCards} />
            <InteractiveBlock title={'Современные мультфильмы'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Сериалы Amediateka'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Поймать преступника'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Добрые мультсериалы'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Российские детективные сериалы'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Романтическое кино'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Криминальные драмы'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Про любовь и не только'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Самое интересное'} isCards={false} info={interestingInfo} />
            <InteractiveBlock title={'Зарубежные мультфильмы'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Лучшие фильмы в подписке'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Мультфильмы о храбрости'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Криминальные триллеры'} isCards={true} href={'/'} info={filmCards} />
        </Layout>
    );
}
