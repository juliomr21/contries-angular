import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContryDetailComponent } from './Components/contry-detail/contry-detail.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '',
component: HomeComponent},
{path: 'post/:variable',
component: ContryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
