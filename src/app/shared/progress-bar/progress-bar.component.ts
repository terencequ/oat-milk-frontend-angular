import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  // CSS height of the progress bar.
  @Input() barHeight = '0.75rem';
  // CSS width of the progress bar.
  @Input() barWidth = '100%';

  @Input() current = 0;
  @Input() max = 100;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Get the percentage value of current divided by max.
   */
  getCurrentPercent(): number{
    if (this.max === 0 || this.max < this.current) {
      return 100;
    }
    return (this.current / this.max) * 100;
  }
}
