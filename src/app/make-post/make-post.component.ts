import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {
  newPost: any[] = [];
  makePostForm = new FormGroup({
    textControl: new FormControl(''),
    imageControl: new FormControl(''),
    videoControl: new FormControl('')
  });
  constructor(private msg: MessagesService) {}

  ngOnInit() {}
  onSubmit() {
    this.newPost = this.makePostForm.value;
    this.msg.sendMessage(this.newPost);
  }

  clearMessage() {
    this.clearMessage();
  }
}
