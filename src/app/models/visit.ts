export class Visit{
    public _id: string
    public device: string
    public deviceInfo: string
    public date: Date

    constructor(){
        this.device = ''
        this.deviceInfo = ''
        this.date = new Date()
    }
}