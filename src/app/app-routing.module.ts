import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentRenderer } from '@angular/core/testing';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ApartmentComponent } from './apartment/apartment.component';


const routes: Routes = [

  { path: 'Home', component: HomeComponent },

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Forms', component: ReactiveFormComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'Residence', component: ResidencesComponentComponent },
  { path: 'product', component: HomeComponent },

  { path: 'showApparts/:id', component: ApartmentComponent },
  { path: 'tv', component: TvComponent },
  { path: 'mobile', component: MobileComponent },
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
