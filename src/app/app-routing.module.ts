import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: 'artists', loadChildren: () => import('../../libs/features/artists/src/lib/artists.module').then(m => m.ArtistsModule) },
  { path: '',   redirectTo: '/artists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
