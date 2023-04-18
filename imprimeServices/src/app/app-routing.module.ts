import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTGSComponent } from './storesDetails/store-tgs/store-tgs.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'storeTGS', component: StoreTGSComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
