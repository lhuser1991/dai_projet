import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ListUniversComponent } from './list-univers/list-univers.component';
import { AddUniversComponent } from './add-univers/add-univers.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { UpdateUniversComponent } from './update-univers/update-univers.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';
import { UpdateProduitsComponent } from './update-produits/update-produits.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { AssocierProduitsCategoriesComponent } from './associer-produits-categories/associer-produits-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    AddCategoriesComponent,
    ListUniversComponent,
    AddUniversComponent,
    ListProduitsComponent,
    AddProduitsComponent,
    WelcomePageComponent,
    UpdateUniversComponent,
    UpdateCategoriesComponent,
    UpdateProduitsComponent,
    DetailsProduitsComponent,
    AssocierProduitsCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
