import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path : 'temp',
  loadChildren : () => import('./temp/temp.module.ngfactory').then(m => m.TempModuleNgFactory)
},
// {
//   path : 'lib1',
//   loadChildren : () => import('../../dist/bin/projects/lib1/src/lib/lib1.module.ngfactory').then(m => m.Lib1ModuleNgFactory)
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
