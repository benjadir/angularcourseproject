import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
showDetail:Recipe|null=null;
  constructor() { }

  ngOnInit(): void {
  }

  OnshowDetail(recipe: Recipe) {
  this.showDetail=recipe;
  }
}
