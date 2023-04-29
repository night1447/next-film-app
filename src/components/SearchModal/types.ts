export interface IResultItem {
    type: 'film' | 'person' | 'category' | 'serial' | 'tv';
    title: string;
    addingInfo?: string;
    href?: string;
}