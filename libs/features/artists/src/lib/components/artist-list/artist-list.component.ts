import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArtist } from 'libs/model/artists/src/lib/artist.interface';

@Component({
  selector: 'lib-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

export class ArtistListComponent implements OnInit {

  artistDetails:IArtist[] = [];
  isLoaded = true;

  constructor(private _router:Router){ }

  ngOnInit(): void { }

  searchArtist(artists: IArtist[]){
    this.artistDetails = artists;
  }

  goToArtistPage(artist: IArtist){
    this._router.navigateByUrl(`/artists/${artist.id}`);
  }

}
