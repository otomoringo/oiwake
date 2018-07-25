import { Howl } from 'howler';

export class Part {
    name: String
    section: Howl
    id: string

    constructor(name: String, filename: String){
        this.name = name
        this.section = new Howl({
            src: [filename]
          });      
    }

    start(){
        let id = this.section.play()
        console.log('play: ' + id)
        this.id = id
    }

    pause(){
        this.section.pause(this.id)
        console.log('pause: ' + this.id)
    }

    play(){
        this.section.play(this.id)
        console.log('play: ' + this.id)
    }
}
