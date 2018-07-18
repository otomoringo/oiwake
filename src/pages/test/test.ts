import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Howl } from 'howler';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  sound: Howl = null

  constructor(public navCtrl: NavController) {
    console.log(this.sound)
  }

  play(){
    console.log("playing")
    this.sound = new Howl({
      src: ['mp3/system7.mp3']
    });
    this.sound.play()
  }

  stop(){
    console.log("stop")
    this.sound.stop()
  }
}
