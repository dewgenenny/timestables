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
  matricesSelected: boolean = true;
  quizSelected: boolean = false;



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

  onMatricesSelected()
  {
    this.matricesSelected = true;
    this.quizSelected =  false;
    console.log("selecting matrix: ");
    console.log(this.matricesSelected);
    console.log("selecting quiz: ");
    console.log(this.quizSelected);
  }

  onQuizSelected()
  {
    this.quizSelected = true;
    this.matricesSelected = false;
    console.log("selecting matrix: ");
    console.log(this.matricesSelected);
    console.log("selecting quiz: ");
    console.log(this.quizSelected);


  }

}

