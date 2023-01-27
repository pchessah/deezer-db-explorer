import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {

  artist="";
  DEFAULT_STRING = 'api/search?q='

  constructor(private http: HttpClient){ }

  searchArtist(artist: string){
    return this.http.get(`${this.DEFAULT_STRING}${artist}`).subscribe(res =>{
      debugger
    })
  }


}
