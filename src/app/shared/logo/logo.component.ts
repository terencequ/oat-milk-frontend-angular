import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() scale: number = 1;
  @Input() showImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
