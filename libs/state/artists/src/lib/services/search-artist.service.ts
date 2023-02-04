import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  DEFAULT_STRING = "search?q="

  constructor(private _http:HttpClient) { }

  searchArtist(artist: string){
    const httpOptions = {
      headers:new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this._http.request('GET', "search?q=" + artist, httpOptions)
                     .pipe(map(res => (res as any).data), 
                           tap((r)=> {debugger;}),
                           catchError(e => { console.log(e); return of(e)}));
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