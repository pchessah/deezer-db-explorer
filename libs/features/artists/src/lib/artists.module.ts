import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';



@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistListComponent,
    SingleArtistComponent
  ],
  imports: [
  ],
  exports: [
    ArtistsComponent
  ]
})
export class ArtistsModule { }
