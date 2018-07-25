import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Part } from '../../model/part'
import { Record } from '../../model/record'

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  choir: Part[] = []
  recorder: Record

  constructor(public navCtrl: NavController) {
    this.recorder = new Record()
  }

  start(filename: String){
    console.log('playing ' + filename)
    const part = new Part('Part' + filename, 'mp3/' + filename);
    part.start()
    this.choir.push(part)
    this.recorder.describe(filename)
  }

  play(index: number){
    console.log('play' + index)
    this.choir[index].play()
  }

  pause(index: number){
    console.log('pause' + index)
    this.choir[index].pause()
  }

  stop(index: number){
    console.log('stop' + index)
    this.choir[index].section.stop()
    this.choir.splice(index, index+1)
  }

  stopAll(){
    console.log('stopAll')
    this.choir.forEach(part => {
      part.section.stop()
    });
    this.choir = []
  }

  save(){
    this.recorder.save()
  }

  replay(){
    this.recorder.replay()
  }

}
