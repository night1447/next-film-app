interface Buttons {
    light: string;
    bold: string;
    url: string;
    img: 'appStore' | 'googlePlay' | 'E35C' | 'E02B';
}
interface Links {
    title: string;
    url: string;
}

export interface Translate {
    about: {
        title: string;
        links: Links[];
    };
    sections: {
        title: string;
        links: Links[];
    };
    certificateText: string;
    service: {
        title: string;
        text: string;
        button: string;
        linkText: string;
    };
    widgetText: string;
    buttonGroup: Buttons[];
    copyright: string;
}
