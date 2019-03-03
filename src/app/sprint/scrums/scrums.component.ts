import { Component, OnInit } from '@angular/core';
import scrums from '../../data/scrums.js';

@Component({
  selector: 'app-scrums',
  templateUrl: './scrums.component.html',
  styleUrls: ['./scrums.component.css']
})
export class ScrumsComponent implements OnInit {
  showScrums: Boolean = true;
  buttonLabel: String = 'Hide Scrums';
  iteration: String = 'PI34.3';
  scrums: any[] = scrums
  constructor() { }

  ngOnInit() {
  }

  toggleScrums() {
    this.showScrums = !this.showScrums;
    this.buttonLabel = this.showScrums ? 'Hide Scrums' : 'Show Scrums';
  }
}
