import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtist } from 'libs/model/artists/src/lib/artist.interface';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

@Component({
  selector: 'lib-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.css']
})
export class SingleArtistComponent implements OnInit {

  artist!: IArtist;

  constructor(private _getArtistService: SearchArtistService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.url[0].path;
    this._getArtistService.getSingleArtist(id).subscribe(artist => {
      this.artist = artist;
    });
  }

}
