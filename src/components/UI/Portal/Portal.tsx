import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    id: string;
}

const Portal: FC<PropsWithChildren<PortalProps>> = ({ children, id }) => {
    const [isCreating, setIsCreating] = useState(false);
    useEffect(() => {
        setIsCreating(true);
    }, []);
    if (!isCreating) {
        return null;
    }
    return createPortal(children, document.getElementById(id) || new HTMLElement());
};

export default Portal;
