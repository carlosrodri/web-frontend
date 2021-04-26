import { Tag } from './tag';
export class Article {
    _id?: string;
    tags: Tag[];
    comments?: Comment[];
    date: Date;
}