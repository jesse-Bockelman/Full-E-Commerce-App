import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
//import {Routes, RouterModule, Router} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OKTA_CONFIG} from '@okta/okta-angular';
import { AuthInterceptorService } from './services/auth-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import myAppConfig from './config/my-app-config';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
//import { APP_BASE_HREF } from '@angular/common';


const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth,injector) => {
    const router = injector.get(AppRoutingModule);

    //redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    MembersPageComponent,
    OrderHistoryComponent
  ],
  imports: [
    //RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //OktaAuthModule
  ],
  providers: [ProductService, {provide: OKTA_CONFIG, useValue: oktaConfig}, {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService, multi:true}/*{provide:APP_BASE_HREF,useValue:'/AngularECommerce/'}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
