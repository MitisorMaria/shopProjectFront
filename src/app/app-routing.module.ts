import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:  '', pathMatch:  "full", redirectTo:  "home" },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
