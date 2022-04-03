import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortcardsComponent } from './sortcards/sortcards.component';

const routes: Routes = [
  {
    path: '',
    component: SortcardsComponent
  },
  {
    path: 'sortcards',
    component: SortcardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
