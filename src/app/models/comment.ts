export class Comment {
    public _id: string
    public articleId: string
    public name: string
    public mail: string
    public date: Date
    public comment: string

    constructor(articleId: string, name: string, mail: string, comment: string) {
        this.articleId = articleId;
        this.name = name;
        this.mail = mail;
        this.comment = comment;
        this.date = new Date()
    }
}