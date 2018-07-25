export class Record {
    createDate: number
    timmingList: Array<Timming> = []

    constructor(){
    }

    describe(filename: String){
        const time = (new Date).getTime()
        this.timmingList.push(new Timming(time, filename))
    }

    save(){
        this.createDate = (new Date).getTime()
        console.log(this)
        let min = this.timmingList[0].startTime
        this.timmingList.forEach(timming => {
            timming.startTime -= min
        })
        sessionStorage.setItem('timmingList', JSON.stringify(this))
    }

}

export class Timming {
    startTime: number
    endTime: number
    filename: String

    constructor(start: number, name: String){
        this.startTime = start
        this.filename = name
    }
}
