import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';

const ARTISTS_ROUTES: Routes = [
  { path: '', component: ArtistListComponent },
  { path: ':id', component: SingleArtistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(ARTISTS_ROUTES)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
