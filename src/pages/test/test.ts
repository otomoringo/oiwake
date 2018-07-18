import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Howl } from 'howler';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  choir: Howl[] = []

  constructor(public navCtrl: NavController) {
  }

  play(num: number){
    console.log("playing " + num)
    const part = new Howl({
      src: ['mp3/oiwake'+ num +'.mp3']
    });
    part.play()
    this.choir.push(part)
  }

  stop(){
    console.log("stop")
    this.choir.forEach(part => {
      part.stop()
    });
  }
}
