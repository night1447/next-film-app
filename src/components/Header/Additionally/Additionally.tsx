import { FC } from 'react';
import style from './Additionally.module.scss';
import { Button } from '../../UI/Button/Button';
import useTranslation from 'next-translate/useTranslation';

interface IAdditionally {
    onHover: (e: any) => void;
    onHide: () => void;
}

export const Additionally: FC<IAdditionally> = ({ onHover, onHide }) => {
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <Button
                type="button"
                variants="accent-transparent"
                href="https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fprofile%2Fpull_notifications"
            >
                {t('common:header.advertising')}
            </Button>
            <Button type="button" variants="transparent">
                <div className={style.btn__primaryText}>
                    <div></div>
                    {t('common:header.search')}
                </div>
            </Button>
            <Button
                type="button"
                variants="transparent"
                href="https://www.ivi.ru/profile/pull_notifications"
            >
                <div
                    data-notifications={true}
                    className={style.message}
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={() => onHide()}
                ></div>
            </Button>
            <Button type="button" variants="transparent" href="/">
                <div
                    data-auth={true}
                    className={style.auth}
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={() => onHide()}
                ></div>
            </Button>
        </div>
    );
};
