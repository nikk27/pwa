import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'docs', component: DocsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '',   redirectTo: '/portfolio', pathMatch: 'full' }, // redirect to `first-component`
  /*{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
