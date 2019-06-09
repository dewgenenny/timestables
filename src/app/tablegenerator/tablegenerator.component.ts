import { Component, OnInit } from '@angular/core';
import {distinct} from "rxjs/operators";

@Component({
  selector: 'app-tablegenerator',
  templateUrl: './tablegenerator.component.html',
  styleUrls: ['./tablegenerator.component.css']
})
export class TablegeneratorComponent implements OnInit {

  array_size: number = 7;

 // horizontal_numbers: Array<number> = [returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12)];
  //vertical_numbers: Array<number> = [returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12),returnRandomInteger(3,12)];

  horizontal_numbers: Array<number> = removeDuplicateEntries([],this.array_size);
  vertical_numbers: Array<number> = removeDuplicateEntries([],this.array_size -1);


  constructor() { }

  ngOnInit() {
  }

}

function returnRandomInteger(min: number, max: number){

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function removeDuplicateEntries(numberArray: Array<number>, arrayLength: number){

  let testing =  new Set(numberArray);

  while(testing.size < arrayLength){
    testing.add(returnRandomInteger(3,12))
    }



  return(testing);

}
