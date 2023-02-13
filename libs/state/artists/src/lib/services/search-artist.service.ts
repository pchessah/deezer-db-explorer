import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  _env

  constructor(private _http:HttpClient,
              @Inject("ENV") _env: any) { 
                this._env = _env;
              }

  searchArtist(artist: string){

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  let SEARCH_STRING =""

  if(this._env.production){
    SEARCH_STRING = "https://api.deezer.com/search?q="+artist
  } else {
    SEARCH_STRING = "search?q="+artist;
  }

  return this._http.get(SEARCH_STRING, httpOptions)
                    .pipe(map(res => (res as any).data),
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