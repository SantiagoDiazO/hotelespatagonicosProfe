import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FooterComponent } from './footer/footer.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservasComponent } from './reservas/reservas.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DescripcionComponent,
    FooterComponent,
    HabitacionesComponent,
    RoomsComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
