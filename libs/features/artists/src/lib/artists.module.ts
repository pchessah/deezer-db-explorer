import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialDesignModule } from 'libs/elements/external/src/public-api';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { ArtistsRoutingModule } from './artists-routing.module';
@NgModule({
  declarations: [
    ArtistListComponent,
    SingleArtistComponent
  ],
  imports: [
    ArtistsRoutingModule, MaterialDesignModule, FormsModule, HttpClientModule],
  exports: [
    ArtistListComponent,
    SingleArtistComponent
  ],
  providers:[SearchArtistService]
})
export class ArtistsModule { }
