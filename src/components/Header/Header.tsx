import { FC, MouseEvent, useState } from 'react';
import style from './Header.module.scss';
import Container from '../UI/Container/Container';
import { Logo } from '../UI/Logo/Logo';
import Navigation from '../UI/Navigation/Navigation';
import useTranslation from 'next-translate/useTranslation';
import { Additionally } from './Additionally/Additionally';
import { HeaderDrop } from './HeaderDrop/HeaderDrop';

export const Header: FC = () => {
    const { t } = useTranslation();
    const [stateHeaderDrop, setStateHeaderDrop] = useState(false);
    const [typeModal, setTypeModal] = useState('');

    const hover = (ev: MouseEvent<HTMLElement>) => {
        const target = ev.target as HTMLElement;
        const type = target.innerHTML;
        setStateHeaderDrop(true);
        if (type === t('common:header.movies')) setTypeModal('movies');
        if (type === t('common:header.series')) setTypeModal('series');
        if (type === t('common:header.cartoons')) setTypeModal('cartoons');
        if (type === t('common:header.tv')) setTypeModal('tv');
        if (target.dataset.notifications) setTypeModal('notifications');
        if (target.dataset.auth) setTypeModal('auth');
    };

    const hideHeadrBottom = () => setStateHeaderDrop(false);
    const showHeaderBottom = () => setStateHeaderDrop(true);

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
                            onEver: hideHeadrBottom,
                        },
                        {
                            href: '/',
                            value: 'common:header.series',
                            onHover: hover,
                            onEver: hideHeadrBottom,
                        },
                        {
                            href: '/',
                            value: 'common:header.cartoons',
                            onHover: hover,
                            onEver: hideHeadrBottom,
                        },
                        {
                            href: 'https://www.ivi.ru/tvplus',
                            value: 'common:header.tv',
                            onHover: hover,
                            onEver: hideHeadrBottom,
                        },
                    ]}
                />
                <Additionally
                    onHide={() => hideHeadrBottom()}
                    onHover={(e) => hover(e)}
                />
            </Container>
            {stateHeaderDrop && (
                <HeaderDrop
                    type={typeModal}
                    onHover={() => showHeaderBottom()}
                    onEver={() => hideHeadrBottom()}
                ></HeaderDrop>
            )}
        </header>
    );
};
