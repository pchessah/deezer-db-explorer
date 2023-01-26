import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

const ARTISTS_ROUTES: Routes = [
  { path: '', component: ArtistListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ARTISTS_ROUTES)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
