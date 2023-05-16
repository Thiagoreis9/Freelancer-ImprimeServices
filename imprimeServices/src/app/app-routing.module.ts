import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTGSComponent } from './storesDetails/store-tgs/store-tgs.component';
import { StorePlazaComponent } from './storesDetails/store-plaza/store-plaza.component';
import { StorePistaoComponent } from './storesDetails/store-pistao/store-pistao.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
    { path: '', component: HomeScreenComponent },
    { path: 'services', component: ProductsComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'store-TGS', component: StoreTGSComponent },
    { path: 'store-Plaza', component: StorePlazaComponent },
    { path: 'store-Pistao', component: StorePistaoComponent },
    { path: 'gallery', component: GalleryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
