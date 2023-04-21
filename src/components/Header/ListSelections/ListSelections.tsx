import style from './ListSelections.module.scss';
import React, { FC } from 'react';
import ListLinks from '../ListLinks/ListLinks';
import { getTypeForHeaderDrop } from '@/utils/getTypeForHeaderDrop';

interface IListSelections {
    type: string;
}

export const ListSelections: FC<IListSelections> = ({ type }) => {
    let ListSlect = getTypeForHeaderDrop(type, 'selections')

    return (
        <div className={style.selections}>
            <ListLinks items={ListSlect} />
        </div>
    );
};
