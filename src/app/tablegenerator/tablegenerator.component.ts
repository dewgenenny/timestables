import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-tablegenerator',
  templateUrl: './tablegenerator.component.html',
  styleUrls: ['./tablegenerator.component.css']
})
export class TablegeneratorComponent implements OnInit {

  @Input() arraySize: number;
  @Input() numberMatrices: number;
  repeatMatrices: number[];



  // horizontalNumbers: Array<number> = [returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12)];
  // verticalNumbers: Array<number> = [returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12)];

  horizontalNumbers: Array<number> = removeDuplicateEntries([0], this.arraySize +1);
  verticalNumbers: Array<number> = removeDuplicateEntries([], this.arraySize);

  constructor() { }

  ngOnInit() {
    this.repeatMatrices = Array(this.numberMatrices).fill(0).map((x,i)=>i);
    console.log(this.repeatMatrices);
  }


 ngOnChanges()
  {
    this.repeatMatrices = Array(this.numberMatrices).fill(0).map((x,i)=>i);
    console.log(this.repeatMatrices);

    this.horizontalNumbers = removeDuplicateEntries([0], this.arraySize + 1);
    this.verticalNumbers = removeDuplicateEntries([], this.arraySize);

  }



}

function returnRandomInteger(min: number, max: number) {

  const value =  Math.round(Math.random() * (max - min )) + 1 ;
  return value;

}

function removeDuplicateEntries(numberArray: Array<number>, arrayLength: number) {

  const testing =  new Set(numberArray);
  let largestNumber = 12;

  if(arrayLength > largestNumber){
    largestNumber = arrayLength;
  }

  // if(arrayLength < largestNumber)
  // {
  //   testing.delete(0);
  // }



  while(testing.size +1 <= arrayLength) {
    testing.add(returnRandomInteger(0, largestNumber -1));
    if(testing.has(13)){
      testing.delete(13);
    }
  }



  return(Array.from(testing));

}
