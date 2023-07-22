import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversComponent } from './list-univers/list-univers.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddUniversComponent } from './add-univers/add-univers.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UpdateUniversComponent } from './update-univers/update-univers.component';
import { UpdateProduitsComponent } from './update-produits/update-produits.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { AssocierProduitsCategoriesComponent } from './associer-produits-categories/associer-produits-categories.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'produits', component: ListProduitsComponent},
  {path: 'univers', component: ListUniversComponent},
  {path: 'categories', component: ListCategoriesComponent},
  {path: 'associer-produits-categories/:id', component: AssocierProduitsCategoriesComponent},
  {path: 'add-produits', component: AddProduitsComponent},
  {path: 'add-univers', component: AddUniversComponent},
  {path: 'add-categories', component: AddCategoriesComponent},
  {path: 'update-produits/:id', component: UpdateProduitsComponent},
  {path: 'update-univers/:id', component: UpdateUniversComponent},
  {path: 'update-categories/:id', component: UpdateCategoriesComponent},
  {path: 'details-produits/:id', component: DetailsProduitsComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
