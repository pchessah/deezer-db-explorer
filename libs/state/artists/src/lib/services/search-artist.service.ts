import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  private _env: any;
  private _envAppendString: string;

  constructor(private _http:HttpClient,
              @Inject("ENV") _env: any) { 
                this._env = _env;
                this._envAppendString = this._env.apiUrl;
              }

  searchArtist(artist: string){

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  const SEARCH_STRING = this._env.production ? this._envAppendString+"search?q="+artist 
                                             : "search?q="+artist;

  return this._http.get(SEARCH_STRING, httpOptions)
                    .pipe(map(res => (res as any).data),
                          catchError(e => { console.log(e); return of(e)}));
  }

  getSingleArtist(id:string){
    const ARTIST_STRING = this._env.production ? this._envAppendString+'artist/'
                                               : 'artist/'
    return this._http.get(`${ARTIST_STRING}${id}`)
               .pipe(map(res => (res)), catchError(e => of(e)));
  }

  getTopTracks(id:string){
    const ARTIST_STRING = this._env.production ? this._envAppendString+'artist/'
                                               : 'artist/'
    return this._http.get(`${ARTIST_STRING}${id}/top`)
               .pipe(map(res =>  (res as any).data), catchError(e => of(e)));
  }

  getAlbums(id:string){
    const ARTIST_STRING = this._env.production ? this._envAppendString+'artist/'
                                               : 'artist/'
    return this._http.get(`${ARTIST_STRING}${id}/albums`)
               .pipe(map(res =>  (res as any).data), catchError(e => of(e)));

  }

}