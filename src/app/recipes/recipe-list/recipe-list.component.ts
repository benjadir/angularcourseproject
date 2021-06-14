import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe("pizza topple","dellecious","/home/karim/Bureau/recipe.png")
  //https://fr.freepik.com/vecteurs-libre/ensemble-ailes-couleur-transparent_3791883.htm
];
  constructor() { }

  ngOnInit(): void {
  }

}
