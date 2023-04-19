import { Meta } from '@/seo/Meta';
import Container from '@/components/UI/Container/Container';
import Title from '@/components/UI/Title/Title';
import { Logo } from '@/components/UI/Logo/Logo';
import Navigation from '@/components/UI/Navigation/Navigation';
import { Header } from '@/components/Header/Header';

export default function Home() {
    return (
        <Meta title={''}>
            <main>
                <Container>
                    <Header></Header>
                    {/* <Logo />
                    <Navigation
                        items={[
                            { href: '/', value: 'мой иви' },
                            { href: '/', value: 'мой иви1' },
                            { href: '/', value: 'мой иви2' },
                            { href: '/', value: 'мой иви3' },
                        ]}
                        flex={true}
                    /> */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor rerum similique facere vitae magni vero maiores
                        architecto pariatur minus laudantium perferendis
                        corporis, doloremque consequuntur amet inventore
                        deserunt nostrum repudiandae porro, velit atque maxime
                        accusantium tempora accusamus quidem. Aliquam maxime
                        voluptatibus adipisci reiciendis corporis fuga porro
                        mollitia rerum laudantium recusandae esse quod officiis
                        saepe possimus tempore quo culpa beatae quasi, dicta cum
                        illum! Placeat dolores iure corrupti modi quos nam
                        adipisci, accusamus cupiditate cumque ipsam amet dolore
                        mollitia, eos aliquid obcaecati deleniti! Sit esse atque
                        ad voluptatibus, eligendi unde iure odit quos doloremque
                        error. Et blanditiis obcaecati, sunt qui sequi nesciunt!
                    </p>
                </Container>
            </main>
        </Meta>
    );
}
