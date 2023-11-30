import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartmentComponent } from './apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    FooterComponent,
    ReactiveFormComponent,
    DetailProductComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
