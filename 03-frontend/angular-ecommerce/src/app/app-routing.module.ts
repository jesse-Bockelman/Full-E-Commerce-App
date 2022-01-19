import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';
import myAppConfig from './config/my-app-config';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ProductCategory } from './common/product-category';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth,injector) => {
    const router = injector.get(Router);

    //redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  {path: 'members', component: MembersPageComponent, canActivate:[OktaAuthGuard] },
  {path: 'order-history', component: OrderHistoryComponent, canActivate:[OktaAuthGuard] },
  {path: 'login/callback', component: OktaCallbackComponent },
  {path: 'login', component: LoginComponent },
  {path: 'checkout', component: CheckoutComponent },
  {path: 'cart-details', component: CartDetailsComponent },
  {path: 'products/:id', component: ProductDetailsComponent },
  {path: 'search/:keyword', component: ProductListComponent},
  {path:'category/:id', component: ProductListComponent},
  {path:'category', component: ProductListComponent},
  {path:'products', component: ProductListComponent},
  {path:'', redirectTo: '/products', pathMatch:'full'},
  {path:'**',redirectTo: '/products', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    OktaAuthModule
  ],
  providers:[{provide: OKTA_CONFIG, useValue: oktaConfig},/*{provide:APP_BASE_HREF,useValue:'/AngularECommerce/'}*/
              {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService, multi:true}],
  exports:[RouterModule]
})
export class AppRoutingModule { }
