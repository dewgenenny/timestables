import { Component } from '@angular/core';
import 'hammerjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timestables';
  mediumMatrix = 6;


  matrixSize: number = this.mediumMatrix;
  numberMatrices: number = 2;


  onSliderChange(newValue: number) {
    this.matrixSize = newValue;
  }

  onMatricesChange(newValue: number) {
    this.numberMatrices = newValue;
  }



}

