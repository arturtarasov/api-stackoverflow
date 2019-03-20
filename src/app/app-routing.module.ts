import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'result', component: ResultPageComponent },
  { path: 'info', component: InfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
