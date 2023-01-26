import { NgModule } from '@angular/core';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { MaterialDesignModule } from 'libs/elements/external/src/public-api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  ]
})
export class ArtistsModule { }
