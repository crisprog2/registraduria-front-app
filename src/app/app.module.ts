import { MesaService } from './mesa/mesa.service';
import { LugarService } from './lugar/lugar.service';
import { CiudadService } from './ciudad/ciudad.service';
import { DepartamentoService } from './departamento/departamento.service';
import { PersonaService } from './persona/persona.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoComponent } from './departamento/departamento.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { LugarComponent } from './lugar/lugar.component';
import { MesaComponent } from './mesa/mesa.component';
import { FormComponent } from './departamento/form.component';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './ciudad/crear.component';
import { CrearLugarComponent } from './lugar/crear-lugar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'departamentos', component: DepartamentoComponent},
  {path: 'personas', component: PersonaComponent},
  {path: 'ciudades', component: CiudadComponent},
  {path: 'lugares', component: LugarComponent},
  {path: 'mesas', component: MesaComponent},
  {path: 'departamentos/form', component: FormComponent},
  {path: 'ciudades/crear', component: CrearComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    HeaderComponent,
    FooterComponent,
    DepartamentoComponent,
    HomeComponent,
    CiudadComponent,
    LugarComponent,
    MesaComponent,
    FormComponent,
    CrearComponent,
    CrearLugarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonaService,
    DepartamentoService,
    CiudadService,
    LugarService,
    MesaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
