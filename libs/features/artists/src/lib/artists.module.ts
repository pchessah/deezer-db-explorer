import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialDesignModule } from 'libs/elements/external/src/public-api';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    ArtistListComponent,
    SingleArtistComponent,
    SearchBarComponent
  ],
  imports: [CommonModule,
    ArtistsRoutingModule, MaterialDesignModule, FormsModule, HttpClientModule],
  exports: [
    ArtistListComponent,
    SingleArtistComponent
  ],
  providers: [SearchArtistService]
})
export class ArtistsModule { }
