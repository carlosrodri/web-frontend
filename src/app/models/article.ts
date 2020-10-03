export class Article{
    public _id: string
    public title: string
    public description: string
    public img: string[]
    public date: Date

    constructor(){
        this.title = ''
        this.description = ''
        this.img = []
    }
}