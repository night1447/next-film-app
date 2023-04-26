import { FC, PropsWithChildren } from 'react';
import { Meta } from '@/seo/Meta';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import { Header } from '@/components/Header/Header';
import { MobileMenu } from '../MobileMenu/MobileMenu';

interface LayoutProps {
    title: string;
    description?: string;
    border?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    title,
    description,
    children,
}) => {
    return (
        <Meta title={title} description={description}>
            <Header border={border} />
            <MobileMenu/>
            <Main>
                {children}
            </Main>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Meta>
    );
};
