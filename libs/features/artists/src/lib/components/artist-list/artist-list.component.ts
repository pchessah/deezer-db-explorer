import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isLoaded = true;

  constructor(private _searchArtistService: SearchArtistService, private _router:Router){ }

  ngOnInit(): void {
    // this.searchArtist('eminem');
  }

  searchArtist(artist: string){
    this.isLoaded = false;
    return this._searchArtistService.searchArtist(artist).subscribe(artistData => {
     this.artistDetails = artistData.map((s: { artist: any; }) => s.artist);
     this.isLoaded = true;
    });
  }

  getSingleArtistDetails(artistId:string){


  }

  goToArtistPage(artist: IArtist){
    this._router.navigateByUrl(`/artists/${artist.id}`);
  }


}
