import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProduitsPageComponent } from './produits-page/produits-page.component';
import { ProduitschoisiePageComponent } from './produitschoisie-page/produitschoisie-page.component';
import { LicencePageComponent } from './licence-page/licence-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AproposPageComponent } from './apropos-page/apropos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    ProduitsPageComponent,
    ProduitschoisiePageComponent,
    LicencePageComponent,
    ContactPageComponent,
    AproposPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
