import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentRenderer } from '@angular/core/testing';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: 'Home', component: HomeComponent },

  { path: 'Residence', component: ResidencesComponentComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
