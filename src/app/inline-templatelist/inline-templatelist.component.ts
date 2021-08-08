import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-templatelist',
  template: `
    <h2 class="custom">
      inline-templatelist works!
    </h2>
  `,
  styleUrls: ['./inline-templatelist.component.css']
})
export class InlineTemplatelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
