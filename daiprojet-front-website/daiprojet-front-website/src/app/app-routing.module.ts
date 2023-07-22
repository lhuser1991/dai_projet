import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProduitsPageComponent } from './produits-page/produits-page.component';
import { ProduitschoisiePageComponent } from './produitschoisie-page/produitschoisie-page.component';
import { LicencePageComponent } from './licence-page/licence-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AproposPageComponent } from './apropos-page/apropos-page.component';

const routes: Routes = [
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: 'produits-page', component: ProduitsPageComponent},
  {path: 'produitschoisie-page/:id', component: ProduitschoisiePageComponent},
  {path: 'licence-page/:id', component: LicencePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'a-propos', component: AproposPageComponent},
  {path: '', redirectTo: 'welcome-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
