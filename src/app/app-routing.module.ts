import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditeduacionComponent } from './components/educacion/editeduacion.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';

const routes: Routes = [
  {path:'', component: HomeComponent},


  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},

  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeduacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'edithys/:id', component: EditSkillComponent},
  {path: 'editpersona/:id', component: EditAcercaDeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
