import { FC, MouseEvent, useState } from 'react';
import style from './header.module.scss';
import Container from '../UI/Container/Container';
import { Logo } from '../UI/Logo/Logo';
import Navigation from '../UI/Navigation/Navigation';
import useTranslation from 'next-translate/useTranslation';
import { Additionally } from './Additionally/Additionally';
import { HeaderDrop } from './HeaderDrop/HeaderDrop';
import { IHeaderDrop } from '@/components/Header/types';

let initialType: IHeaderDrop = '';
export const Header: FC = () => {
    const { t } = useTranslation();
    const [showHeaderDrop, setShowHeaderDrop] = useState(false);
    const [typeModal, setTypeModal] = useState(initialType);

    const hoverHandler = (ev: MouseEvent<HTMLElement>) => {
        const target = ev.target as HTMLElement;
        const type = target.innerHTML;
        setShowHeaderDrop(true);
        if (type === t('common:header.movies')) setTypeModal('movies');
        if (type === t('common:header.series')) setTypeModal('series');
        if (type === t('common:header.cartoons')) setTypeModal('cartoons');
        if (type === t('common:header.tv')) setTypeModal('tv');
        if (target.dataset.notifications) setTypeModal('notifications');
        if (target.dataset.auth) setTypeModal('auth');
    };

    const hideHeaderBottomHandler = () => setShowHeaderDrop(false);
    const showHeaderBottomHandler = () => setShowHeaderDrop(true);

    return (
        <header className={`${style.header} ${showHeaderDrop && style.modal}`}>
            <Container>
                <Logo />
                <Navigation
                    flex={true}
                    items={[
                        { href: '/', value: 'common:header.ivi' },
                        {
                            href: 'https://www.ivi.ru/new',
                            value: 'common:header.new',
                        },
                        {
                            href: '/',
                            value: 'common:header.movies',
                            onHover: hoverHandler,
                            onEver: hideHeaderBottomHandler,
                        },
                        {
                            href: '/',
                            value: 'common:header.series',
                            onHover: hoverHandler,
                            onEver: hideHeaderBottomHandler,
                        },
                        {
                            href: '/',
                            value: 'common:header.cartoons',
                            onHover: hoverHandler,
                            onEver: hideHeaderBottomHandler,
                        },
                        {
                            href: 'https://www.ivi.ru/tvplus',
                            value: 'common:header.tv',
                            onHover: hoverHandler,
                            onEver: hideHeaderBottomHandler,
                        },
                    ]} />
                <Additionally
                    onHide={hideHeaderBottomHandler}
                    onHover={hoverHandler} />
            </Container>
            {showHeaderDrop && (
                <HeaderDrop
                    type={typeModal}
                    onHover={showHeaderBottomHandler}
                    onEver={hideHeaderBottomHandler}
                />
            )}
        </header>
    );
};
