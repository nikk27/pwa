import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  title = 'Nikhil Arramsetty';
  
  constructor() { }

  ngOnInit(): void {
  }

}
