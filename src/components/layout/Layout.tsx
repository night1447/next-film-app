import { FC, PropsWithChildren } from 'react';
import Footer from './Footer/Footer';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};
export default Layout;
