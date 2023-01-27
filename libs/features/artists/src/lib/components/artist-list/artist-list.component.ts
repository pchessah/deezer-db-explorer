import { Component, OnInit } from '@angular/core';
import { IArtist } from 'libs/model/artists/src/lib/artist.interface';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

@Component({
  selector: 'lib-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artist="";
  artistDetails:IArtist[] = [];

  constructor(private _searchArtistService: SearchArtistService){ }

  ngOnInit(): void {
    // this.searchArtist('eminem');
  }

  searchArtist(artist: string){
    return this._searchArtistService.searchArtist(artist).subscribe(artistData =>{
     this.artistDetails = artistData.map((s: { artist: any; }) => s.artist);
    //  debugger
    });
  }


}
