import { Component } from '@angular/core';
import 'hammerjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timestables';
  repeatMatrices = [0, 0];
  numberMatrices: number = 2;
  matrixSize: number = 6;

  ngOnInit() {
    this.repeatMatrices = Array(this.numberMatrices).fill(0).map((x,i)=>i);
  }


  ngOnChanges()
  {
    this.repeatMatrices = Array(this.numberMatrices).fill(0).map((x,i)=>i);

  }


  onSliderChange(newValue: number) {
    this.matrixSize = newValue;
  }

  onMatricesChange(newValue: number) {
    this.numberMatrices = newValue;
    this.repeatMatrices = Array(this.numberMatrices).fill(0).map((x,i)=>i);

  }



}

