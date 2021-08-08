import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-list',
  templateUrl: './inline-list.component.html',
  styles: [
    '.custom{color:red}'
  ]
})
export class InlineListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
