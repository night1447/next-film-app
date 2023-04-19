import { FC, useState } from 'react';
import style from './Header.module.scss';
import Container from '../UI/Container/Container';
import { Logo } from '../UI/Logo/Logo';
import Navigation from '../UI/Navigation/Navigation';
import useTranslation from 'next-translate/useTranslation';
import { Additionally } from './Additionally/Additionally';
import { HeaderDrop } from './HeaderDrop/HeaderDrop';

export const Header: FC = () => {
    const { t } = useTranslation();
    const [stateHeaderDrop, useStateHeaderDrop] = useState(false);
    const [tupeModal, useTypeModal] = useState('');

    const hover = (ev: any) => {
        const type = ev.target.innerHTML;
        useStateHeaderDrop(true);
        if (type === t('common:header.movies')) useTypeModal('movies');
        if (type === t('common:header.series')) useTypeModal('series');
        if (type === t('common:header.cartoons')) useTypeModal('cartoons');
        if (type === t('common:header.tv')) useTypeModal('tv');
        if (ev.target.dataset.notifications) useTypeModal('notifications');
        if (ev.target.dataset.auth) useTypeModal('auth');
    };

    const hideHeadrBottm = () => useStateHeaderDrop(false);
    const showHeaderBottom = () => useStateHeaderDrop(true);

    return (
        <header className={`${style.header} ${stateHeaderDrop && style.modal}`}>
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
                            onHover: hover,
                            onEver: hideHeadrBottm,
                        },
                        {
                            href: '/',
                            value: 'common:header.series',
                            onHover: hover,
                            onEver: hideHeadrBottm,
                        },
                        {
                            href: '/',
                            value: 'common:header.cartoons',
                            onHover: hover,
                            onEver: hideHeadrBottm,
                        },
                        {
                            href: 'https://www.ivi.ru/tvplus',
                            value: 'common:header.tv',
                            onHover: hover,
                            onEver: hideHeadrBottm,
                        },
                    ]}
                />
                <Additionally
                    onHide={() => hideHeadrBottm()}
                    onHover={(e) => hover(e)}
                />
            </Container>
            {stateHeaderDrop && (
                <HeaderDrop
                    type={tupeModal}
                    onHover={() => showHeaderBottom()}
                    onEver={() => hideHeadrBottm()}
                ></HeaderDrop>
            )}
        </header>
    );
};
