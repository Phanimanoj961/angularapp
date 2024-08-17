import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.css'
})
export class PlacementsComponent {
SaveForm(myform:any):void{
  console.log(myform)
}
}
