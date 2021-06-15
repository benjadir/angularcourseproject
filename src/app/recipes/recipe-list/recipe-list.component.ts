import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[  new Recipe("pizza topple","pitza topple from new carolina north ilirom iumik...",'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/512px-Recipe_logo.jpeg'),
  new Recipe("HumberGer","the italian pitzza known as delicious ...",'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/512px-Recipe_logo.jpeg'),
  new Recipe("Shwarma hot","the italian pitzza known as delicious ...",'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/512px-Recipe_logo.jpeg')
  //https://fr.freepik.com/vecteurs-libre/ensemble-ailes-couleur-transparent_3791883.htm
];
@Output() diaplayRecipeDetaisEvent=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe) {
this.diaplayRecipeDetaisEvent.emit(recipe);
  }
}
