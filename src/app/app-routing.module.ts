import { SalaUpdateComponent } from './views/components/sala/sala-update/sala-update.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { MateriaReadComponent } from './views/components/material/material-read/materia-read.component';
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
import { AgendamentoReadComponent } from './views/components/agendamento/agendamento-read/agendamento-read.component';
import { AgendamentoCreateComponent } from './views/components/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoDeleteComponent } from './views/components/agendamento/agendamento-delete/agendamento-delete.component';
import { AgendamentoUpdateComponent } from './views/components/agendamento/agendamento-update/agendamento-update.component';
import { RequisicaoCreateComponent } from './views/components/requisicao/requisicao-create/requisicao-create/requisicao-create.component';
import { RequisicaoReadComponent } from './views/components/requisicao/requisicao-read/requisicao-read.component';
import { RequisicaoUpdateComponent } from './views/components/requisicao/requisicao-update/requisicao-update.component';
import { RequisicaoDeleteComponent } from './views/components/requisicao/requisicao-delete/requisicao-delete.component';
import { AuthGuard } from './guards/auth-guard.service';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path:'material',
    component: MateriaReadComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'material/create',
    component: MaterialCreateComponent,
    canActivate: [AuthGuard]
  },
  {
  path: 'material/update/:id',
  component: MaterialUpdateComponent,
  canActivate: [AuthGuard]
  },
  {
    path: 'material/delete/:id',
    component: MaterialDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'usuario',
    component: UsuarioReadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/create',
    component: UsuarioCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/delete/:id',
    component: UsuarioDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/update/:id',
    component: UsuarioUpdateComponent,
    canActivate: [AuthGuard]
    },
    {
      path: 'sala',
      component: SalaReadComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'sala/create',
      component: SalaCreateComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'sala/delete/:id',
      component: SalaDeleteComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'sala/update/:id',
      component: SalaUpdateComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'agendamento',
      component: AgendamentoReadComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'agendamento/create',
      component: AgendamentoCreateComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'agendamento/delete/:id',
      component: AgendamentoDeleteComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'agendamento/update/:id',
      component: AgendamentoUpdateComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'requisicao/create',
      component: RequisicaoCreateComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'requisicao/update/:id',
      component: RequisicaoUpdateComponent,
      canActivate: [AuthGuard]
    },

    {
      path: 'requisicao',
      component: RequisicaoReadComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'requisicao/delete/:id',
      component: RequisicaoDeleteComponent,
      canActivate: [AuthGuard]


    },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
