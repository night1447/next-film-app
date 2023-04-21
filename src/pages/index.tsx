import { Layout } from '@/components/layout/Layout';
import FirstScreen from '@/components/Screens/FirstScreen/FirstScreen';
import InteractiveBlock from '@/components/Screens/InteractiveBlock/InteractiveBlock';
import { InteractiveType } from '@/components/Screens/InteractiveBlock/InteractiveType';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';

export default function Home() {
    const interestingInfo: InteractiveType[] = [{
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
        <Layout title={'Ivi главная страница'}>
            <FirstScreen />
            <InteractiveBlock title={'Самое интересное'} isCards={false} info={interestingInfo} />
            <InteractiveBlock title={'Самое интересное'} isCards={true} href={'/'} info={filmCards} />
            <InteractiveBlock title={'Самое интересное'} isCards={false} info={interestingInfo} />
        </Layout>
    );
}
