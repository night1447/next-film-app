import { Layout } from '@/components/layout/Layout';
import { FilmCardMinimize } from '@/models/FilmCardMinimize';
import { FirstScreen, InteractiveBlock } from '@/components/Screens';
import useTranslation from 'next-translate/useTranslation';
import { InteractiveType } from '@/models/InteractiveType';
import { v4 as uuid } from 'uuid';
import { interactiveBlocks } from '@/constants/Index';
import FirstDescriptionBlock from '@/components/FirstDescriptionBlock/FirstDescriptionBlock';
import { Breadcrumbs } from '@/components/UI/Breadcrumbs/Breadcrumbs';
import { useRouter } from 'next/router';

export default function Home() {
    const { t } = useTranslation();
    const router = useRouter();

    const interestingInfo: InteractiveType[] = [
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
        {
            href: '/',
            urlImg: '/example-interactive-card.jpeg',
            title: 'Сериалы ivi',
        },
    ];
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
            feature: 'all',
        },
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
        },
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
        },
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
        },
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
        },
        {
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
            feature: 'exclusive',
        },
        {
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
            feature: 'creating',
        },
    ];
    return (
        <Layout title={t('common:titles.index')}>
            <FirstScreen />
            <InteractiveBlock
                title={t('index:recommended.title')}
                info={filmCards}
                isCards={true}
                moreHref={'/'}
            />
            <FirstDescriptionBlock />
            {interactiveBlocks.map((block) => (
                <InteractiveBlock
                    key={uuid()}
                    title={t(`index:${block.block}.title`)}
                    isCards={block.isCard !== false}
                    href={'/'}
                    info={block.isCard !== false ? filmCards : interestingInfo}
                    moreHref={'/'}
                />
            ))}
        </Layout>
    );
}
