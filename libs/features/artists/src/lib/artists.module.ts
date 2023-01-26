import { NgModule } from '@angular/core';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { ArtistsRoutingModule } from './artists-routing.module';
@NgModule({
  declarations: [
    ArtistListComponent,
    SingleArtistComponent
  ],
  imports: [
    ArtistsRoutingModule
  ],
  exports: [
    ArtistListComponent,
    SingleArtistComponent
  ]
})
export class ArtistsModule { }
