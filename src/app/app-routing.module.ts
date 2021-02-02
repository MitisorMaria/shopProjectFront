import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { RingsComponent } from './rings/rings.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:  '', pathMatch:  "full", redirectTo:  "home" },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'favourites', component: FavouritesComponent},
  { path: 'necklaces', component: NecklacesComponent },
  { path: 'bracelets', component: BraceletsComponent },
  { path: 'rings', component: RingsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account/:id', component: AccountComponent},
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
