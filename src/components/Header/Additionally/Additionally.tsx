import { FC, MouseEvent, useCallback, useState } from 'react';
import style from './additionally.module.scss';
import { Button } from '../../UI/Button/Button';
import useTranslation from 'next-translate/useTranslation';
import SearchModal from '@/components/SearchModal/SearchModal';

interface IAdditionally {
    onHover: (e: MouseEvent<HTMLElement>) => void;
    onHide: () => void;
}

export const Additionally: FC<IAdditionally> = ({ onHover, onHide }) => {
    const { t } = useTranslation();
    const [showSearch, setShowSearch] = useState(false);

    const openSearchHandler = useCallback(() => {
        setShowSearch(true);
    }, []);

    const closeModalHandler = useCallback(() => {
        setShowSearch(false);
    }, []);


    return (
        <div className={style.container}>
            <Button
                type='button'
                variants='accent-transparent'
                href='https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fprofile%2Fpull_notifications'
            >
                {t('common:header.advertising')}
            </Button>
            <Button type={'button'} variants={'transparent'} onClick={openSearchHandler}>
                <div className={style.button}>
                    <div></div>
                    {t('common:header.search')}
                </div>
            </Button>
            <Button
                type='button'
                variants='transparent'
                href='https://www.ivi.ru/profile/pull_notifications'
            >
                <div
                    data-notifications={true}
                    className={style.message}
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={() => onHide()}
                ></div>
            </Button>
            <Button type='button' variants='transparent' href={'/'}>
                <div
                    data-auth={true}
                    className={style.auth}
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={() => onHide()}
                ></div>
            </Button>
            {<SearchModal showSearch={showSearch} onCloseModal={closeModalHandler} />}
        </div>
    );
};
