import { Part } from './part'

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
        let min = this.timmingList[0].startTime
        this.timmingList.forEach(timming => {
            timming.startTime -= min
        })
        sessionStorage.setItem('timmingList', JSON.stringify(this))
    }

    replay(){
        let replayList: Record = JSON.parse(sessionStorage.getItem('timmingList'))
        console.log(replayList)
        replayList.timmingList.forEach(timming => {
            console.log(timming.startTime)
            console.log(timming.filename)
            // setTimeout('this.autoPlay("' + timming.filename + '")', timming.startTime)
        })
    }

    // autoPlay = (filename) => {
    //     console.log('autoPlay')
    //     const part = new Part(filename, 'mp3/' + filename)
    //     part.start()
    // }
    
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
