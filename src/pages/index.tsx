import { Meta } from '@/seo/Meta';
import FirstScreen from '@/components/Screens/FirstScreen/FirstScreen';
import InteractiveBlock from '@/components/Screens/InteractiveBlock/InteractiveBlock';
import { InteractiveType } from '@/components/Screens/InteractiveBlock/InteractiveType';

export default function Home() {
    const info: InteractiveType[] = [{
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }, {
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }, {
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }, {
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }, {
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }, {
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }, {
        urlImg: '/example-interactive-card.jpeg',
        title: 'Новинки подписки',
        href: '/',
    }];


    return (
        <Meta title={''}>
            <main>
                <FirstScreen />
                <InteractiveBlock title={'Самое интересное'} isCards={false} info={info} />
                <InteractiveBlock title={'Самое интересное'} isCards={true} info={info} />
            </main>
        </Meta>
    );
}
