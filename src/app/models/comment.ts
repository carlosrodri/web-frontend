export class Comment{
    public _id: string
    public idArticle: string
    public name: string
    public mail: string
    public date: Date
    public description: string

    constructor(){
        this.date = new Date()
    }
}