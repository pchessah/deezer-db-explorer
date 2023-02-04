import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { IArtist } from 'libs/model/artists/src/lib/artist.interface';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

@Component({
  selector: 'lib-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  artist = "";
  artistDetails: IArtist[] = [];
  isLoaded = true;
  @Input() listIsVisible = false;
  @Output() searchArtistEvent = new EventEmitter();

  constructor(private _searchArtistService: SearchArtistService,
    private _router: Router) { }

  searchArtist(artist: string) {
    this.isLoaded = false;
    if (artist.trim().length === 0) {
      this.artistDetails = [];
      this.searchArtistEvent.emit(this.artistDetails);
      return;
    } else {
      return this._searchArtistService.searchArtist(artist).pipe(filter(artistData => !!artistData)).subscribe(artistData => {
        this.artistDetails = artistData.data.map((s: { artist: any; }) => s.artist);
        this.searchArtistEvent.emit(this.artistDetails);
        this.isLoaded = true;
      });
    }

  }

  goToArtistPage(artist: IArtist) {
    this._router.navigateByUrl(`/artists/${artist.id}`);
    this.artistDetails = [];
  }

}
