import { Component, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HandlingDataService } from './handling-data.service';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'facebook-news-feed';
  posts: any = [];
  arrayOfObjects: any = [];
  public safeURL: SafeResourceUrl;

  constructor(
    private http: HandlingDataService,
    private msg: MessagesService,
    private sanitizer: DomSanitizer
  ) {
    this.http.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
    this.msg.getMessage().subscribe(data => {
      this.arrayOfObjects.push(data);
      console.log(this.arrayOfObjects);
    });
  }

  ngOnInit() {}

  ngOnChanges() {}
}
