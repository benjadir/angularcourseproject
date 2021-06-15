import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('inputName',{static:false}) inputname:ElementRef|null=null;
  @ViewChild('inputAmount',{static:false}) inputamount:ElementRef|null=null;
  @Output() IngredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    console.log(this.inputname?.nativeElement.value);
   const ing= new Ingredient(this.inputname?.nativeElement.value,
      this.inputamount?.nativeElement.value)
    this.IngredientAdded.emit(ing);

  }
}
