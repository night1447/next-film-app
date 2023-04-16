import { Meta } from '@/seo/Meta';
import Container from '@/components/UI/Container/Container';
import Title from '@/components/UI/Title/Title';
import { Button } from '@/components/UI/Button/Button';
import { LanguageSelect } from '@/components/LanguageSelect/LanguageSelect';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
    const { t, lang } = useTranslation('Home');
    return (
        <Meta title={''}>
            <main>
                <Container>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid at blanditiis eligendi eos est expedita fuga fugit
                    harum id iure libero maxime nostrum, numquam perspiciatis
                    provident qui repudiandae suscipit velit.
                    <Title htmlTagName={'h1'}
                           linkSettings={{
                               isLink: true,
                               decorating: 'arrow',
                               isWholeTitle: true,
                           }}
                           title={`${t('title')}`} />
                    <Title htmlTagName={'h2'}
                           linkSettings={{
                               isLink: true,
                               decorating: 'underline',
                               isWholeTitle: false,
                               linkedPartTitle: 'Record',
                           }}
                           title={' Lorem'} />
                    <Title htmlTagName={'h3'}
                           linkSettings={{
                               isLink: false,
                           }}
                           title={' h3'} /> <Title htmlTagName={'h3'}
                                                   linkSettings={{
                                                       isLink: false,
                                                   }}
                                                   title={' h4'} />

                    <Button titleSettings={{ hasTitle: false }}
                            iconSettings={{ hasIcon: true, imageUrl: './next.svg' }} variants={'accent-transparent'}
                            isCircle={true}
                            linkSettings={{ href: '/' }} />
                    <LanguageSelect />
                </Container>
            </main>
        </Meta>
    );
}
