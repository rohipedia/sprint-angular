import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stories-status',
  templateUrl: './stories-status.component.html',
  styleUrls: ['./stories-status.component.css']
})
export class StoriesStatusComponent implements OnInit {

  @Input('status') status: Object = {};
  constructor() { }

  ngOnInit() {
    
  }

}
