import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {FullListComponent} from './full-list/full-list.component';
const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'list/:id', component: FullListComponent},
  {path: 'list', redirectTo: 'list/0'},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: MainComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
