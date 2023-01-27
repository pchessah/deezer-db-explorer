import { Component } from '@angular/core';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

@Component({
  selector: 'lib-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {

  artist="";

  constructor(private _searchArtistService: SearchArtistService){ }

  searchArtist(artist: string){
    return this._searchArtistService.searchArtist(artist).subscribe(artistData =>{
      debugger
    });
  }


}
