import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() smallClicked = new EventEmitter<boolean>();
  @Output() mediumClicked = new EventEmitter<boolean>();
  @Output() largeClicked = new EventEmitter<boolean>();
  @Input() sliderValue: number = 6;
  @Input() numberMatrices: number = 1;
  @Output() newSliderValue = new EventEmitter<number>();
  @Output() newMatricesValue = new EventEmitter<number>();
  @Output() quizSelected = new EventEmitter<boolean>();
  @Output() matricesSelected = new EventEmitter<boolean>();
  showMatrixSelectors: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChange() {
    console.log("slider value: "+this.sliderValue);
  }

  onSliderChange() {
    this.newSliderValue.emit(this.sliderValue);
  }

  onMatricesChange()
  {
    this.newMatricesValue.emit(this.numberMatrices);
  }

  onQuizSelected()
  {
    this.quizSelected.emit(true);
    // this.matricesSelected.emit(false);
    this.showMatrixSelectors = false;

  }

  onMatricesSelected()
  {
    // this.quizSelected.emit(false);
    this.matricesSelected.emit(true);
    this.showMatrixSelectors = true;
  }


}

