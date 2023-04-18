import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTGSComponent } from './storesDetails/store-tgs/store-tgs.component';
import { HeaderComponent } from './components/header/header.component';
import { StorePlazaComponent } from './storesDetails/store-plaza/store-plaza.component';
import { StorePistaoComponent } from './storesDetails/store-pistao/store-pistao.component';

const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'storeTGS', component: StoreTGSComponent },
    { path: 'storePlaza', component: StorePlazaComponent },
    { path: 'storePistao', component: StorePistaoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
