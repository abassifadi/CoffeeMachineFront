import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCommandComponent} from './components/create-command/create-command.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PreviousCommandsComponent } from './components/previous-commands/previous-commands.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'command', component: CreateCommandComponent },
  { path: 'previous-commands', component: PreviousCommandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
