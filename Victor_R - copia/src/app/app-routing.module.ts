import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPageModule } from './pages/inicio/inicio.module';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'datos-personales',
    loadChildren: () => import('./pages/datos-personales/datos-personales.module').then( m => m.DatosPersonalesPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'dam1',
    loadChildren: () => import('./pages/dam1/dam1.module').then( m => m.Dam1PageModule)
  },
  {
    path: 'dam2',
    loadChildren: () => import('./pages/dam2/dam2.module').then( m => m.Dam2PageModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('./pages/fct/fct.module').then( m => m.FctPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
