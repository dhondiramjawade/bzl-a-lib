import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib1',
  template: `
    <p>
      HELLO lib1 works!
    </p>
  `,
  styles: []
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
