import { Component, OnInit, Input } from '@angular/core';

interface Button {
  label: string;
  link: string;
  type: 'btn-link' | 'btn-primary';
}

@Component({
  selector: 'ngptt-section-header',
  templateUrl: './section-header.component.html',
  styles: []
})
export class SectionHeaderComponent implements OnInit {
  _button: Button = { label: '', link: '#', type: 'btn-link'};

  @Input() set button(value: Button) {
    this._button = { ...this._button, ...value };
  };
  @Input() title = '';  

  constructor() { }

  ngOnInit() { }

}
