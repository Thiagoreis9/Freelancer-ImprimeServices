import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTGSComponent } from './storesDetails/store-tgs/store-tgs.component';
import { StorePlazaComponent } from './storesDetails/store-plaza/store-plaza.component';
import { StorePistaoComponent } from './storesDetails/store-pistao/store-pistao.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    { path: '', component: HomeScreenComponent },
    { path: 'services', component: ProductsComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'storeTGS', component: StoreTGSComponent },
    { path: 'storePlaza', component: StorePlazaComponent },
    { path: 'storePistao', component: StorePistaoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
