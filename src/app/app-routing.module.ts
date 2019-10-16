import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { GranitComponent } from './components/granit/granit.component';
import { MermerComponent } from './components/mermer/mermer.component';
import { DetaljiComponent } from './components/detalji/detalji.component';


const routes: Routes = [
	{ path: '', redirectTo: '/pocetna', pathMatch: 'full' },
	{ path: 'pocetna', component: HomePageComponent },
	{ path: 'granit', component: GranitComponent },
	{ path: 'mermer', component: MermerComponent },
	{ path: 'detalji/:id', component: DetaljiComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
