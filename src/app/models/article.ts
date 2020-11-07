export class Article{
    public _id: string
    public title: string
    public description: string
    public imgs: string[]
    public date: Date

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
    }
}