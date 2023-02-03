import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  DEFAULT_STRING = 'search?q='

  constructor(private _http:HttpClient) {}

  searchArtist(artist: string){
    debugger
    return this._http
               .get(`${this.DEFAULT_STRING}${artist}`)
               .pipe(tap((t) => {console.log('here'); debugger;}),map(res => (res as any).data), catchError(e => of(e)));
  }


  getSingleArtist(id:string){
    const ARTIST_STRING = 'artist/';
    return this._http.get(`${ARTIST_STRING}${id}`)
               .pipe(map(res => (res)), catchError(e => of(e)));
  }

  getTopTracks(id:string){
    const ARTIST_STRING = 'artist/';
    return this._http.get(`${ARTIST_STRING}${id}/top`)
               .pipe(map(res =>  (res as any).data), catchError(e => of(e)));

  }

  getAlbums(id:string){
    const ARTIST_STRING = 'artist/';
    return this._http.get(`${ARTIST_STRING}${id}/albums`)
               .pipe(map(res =>  (res as any).data), catchError(e => of(e)));

  }
}