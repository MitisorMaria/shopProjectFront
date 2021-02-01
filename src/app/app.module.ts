import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { EmailService } from './email.service';
import { LoginService } from './login.service';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { OneProductComponent } from './one-product/one-product.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { RingsComponent } from './rings/rings.component';
import { UserService } from './user.service';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    ContactComponent,
    SignupComponent,
    CheckoutComponent,
    FavouritesComponent,
    OneProductComponent,
    NecklacesComponent,
    BraceletsComponent,
    RingsComponent,
    CartComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService, LoginService, OrderService, ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
