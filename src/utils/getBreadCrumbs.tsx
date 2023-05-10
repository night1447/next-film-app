import { Button } from "@/components/UI/Button/Button";
import { useRouter } from 'next/router';



export const getBreadcrumbs = (
    type: string,
    moviePage: boolean,
    styles: {[key:string]:string},
    filters?: { genres?: string[] | undefined; years?: string | undefined },
) => {
    const router = useRouter();

    if (!filters) return <p className={styles.location}>{type}</p>;
    if (moviePage)
        return (
            <Button
                variants="transparent"
                className={styles.btnMoviePage}
                href={`/${type}`}
            >
                <p>{type}</p>
            </Button>
        );
    if (filters) {
        const genres = filters.genres!.join(', ')
        return (
            <>
                <div className={styles.boxBtn}>
                    <Button
                        variants="transparent"
                        className={styles.button}
                        href={`/${type}`}
                    >
                        <p>{type}</p>
                    </Button>
                </div>
                {filters.years ? (
                    filters.genres!.length > 1 ? (
                        <>
                            <p className={styles.location}>{genres}</p>
                            <p className={styles.location}>
                                {filters.years}
                            </p>
                        </>
                    ) : (
                        <>
                            <div className={styles.boxBtn}>
                                <Button
                                    variants="transparent"
                                    className={styles.button}
                                    href={`/${type}/${genres}`}
                                >
                                    <p>{genres}</p>
                                </Button>
                            </div>
                            <p className={styles.location}>
                                {filters.years}
                            </p>
                        </>
                    )
                ) : (
                    <p className={styles.location}>{genres}</p>
                )}
            </>
        );
    }
};