import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageContentsComponent } from './components/page-contents/page-contents.component';
import { ProductsComponent } from './components/products/products.component';
import { BtnTopComponent } from './components/btn-top/btn-top.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StoresComponent } from './components/stores/stores.component';
import { StorePistaoComponent } from './storesDetails/store-pistao/store-pistao.component';
import { StoreTGSComponent } from './storesDetails/store-tgs/store-tgs.component';
import { StorePlazaComponent } from './storesDetails/store-plaza/store-plaza.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PapelariaPersonalizadaComponent } from './screens/productsDetail/papelaria-personalizada/papelaria-personalizada.component';
import { EncadernacaoComponent } from './screens/productsDetail/encadernacao/encadernacao.component';
import { MaterialEscritorioComponent } from './screens/productsDetail/material-escritorio/material-escritorio.component';
import { CriacaoArteDesignComponent } from './screens/productsDetail/criacao-arte-design/criacao-arte-design.component';
import { ImpressaoDigitalComponent } from './screens/productsDetail/impressao-digital/impressao-digital.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageContentsComponent,
    ProductsComponent,
    BtnTopComponent,
    CarouselComponent,
    StoresComponent,
    StorePistaoComponent,
    StoreTGSComponent,
    StorePlazaComponent,
    HomeScreenComponent,
    GalleryComponent,
    PapelariaPersonalizadaComponent,
    EncadernacaoComponent,
    MaterialEscritorioComponent,
    CriacaoArteDesignComponent,
    ImpressaoDigitalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
