import { FC, PropsWithChildren } from 'react';
import { Meta } from '@/seo/Meta';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import { Header } from '@/components/Header/Header';

interface LayoutProps {
    title: string;
    description?: string;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    title,
    description,
    children,
}) => {
    return (
        <Meta title={title} description={description}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Meta>
    );
};
