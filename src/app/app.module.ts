import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';






import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DatePipe } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisarMateriaisComponent } from './pesquisar-materiais/pesquisar-materiais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './views/components/templates/navbar/navbar.component';
import { FooterComponent } from './views/components/templates/footer/footer.component';
import { NavegacaoComponent } from './views/components/templates/navegacao/navegacao.component';
import { HomeComponent } from './views/components/home/home.component';
import { MateriaReadComponent } from './views/components/material/material-read/materia-read.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialCreateComponent } from './views/components/material/material-create/material-create.component';
import { MaterialUpdateComponent } from './views/components/material/material-update/material-update.component';
import { MaterialDeleteComponent } from './views/components/material/material-delete/material-delete.component';
import { UsuarioReadComponent } from './views/components/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './views/components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './views/components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './views/components/usuario/usuario-update/usuario-update.component';
import { SalaCreateComponent } from './views/components/sala/sala-create/sala-create.component';
import { SalaReadComponent } from './views/components/sala/sala-read/sala-read.component';
import { SalaDeleteComponent } from './views/components/sala/sala-delete/sala-delete.component';
import { SalaUpdateComponent } from './views/components/sala/sala-update/sala-update.component';
import { AgendamentoReadComponent } from './views/components/agendamento/agendamento-read/agendamento-read.component';
import { AgendamentoCreateComponent } from './views/components/agendamento/agendamento-create/agendamento-create.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { AgendamentoDeleteComponent } from './views/components/agendamento/agendamento-delete/agendamento-delete.component';
import { AgendamentoUpdateComponent } from './views/components/agendamento/agendamento-update/agendamento-update.component';
import { RequisicaoCreateComponent } from './views/components/requisicao/requisicao-create/requisicao-create/requisicao-create.component';
import { RequisicaoReadComponent } from './views/components/requisicao/requisicao-read/requisicao-read.component';
import { RequisicaoUpdateComponent } from './views/components/requisicao/requisicao-update/requisicao-update.component';
import { RequisicaoDeleteComponent } from './views/components/requisicao/requisicao-delete/requisicao-delete.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    PesquisarMateriaisComponent,
    NavbarComponent,
    FooterComponent,
    NavegacaoComponent,
    HomeComponent,
    MateriaReadComponent,
    MaterialCreateComponent,
    MaterialUpdateComponent,
    MaterialDeleteComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
    SalaCreateComponent,
    SalaReadComponent,
    SalaDeleteComponent,
    SalaUpdateComponent,
    AgendamentoReadComponent,
    AgendamentoCreateComponent,
    LocalDateTimePipe,
    AgendamentoDeleteComponent,
    AgendamentoUpdateComponent,
    RequisicaoCreateComponent,
    RequisicaoReadComponent,
    RequisicaoUpdateComponent,
    RequisicaoDeleteComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    DatePipe,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,




  ],
  providers: [
    LocalDateTimePipe,
    CookieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
