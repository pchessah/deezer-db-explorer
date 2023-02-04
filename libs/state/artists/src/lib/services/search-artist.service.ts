import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  constructor(private _http:HttpClient) { }

  searchArtist(artist: string){
    const SEARCH_STRING =  "search?q="+artist;
    return this._http.get(SEARCH_STRING,{responseType: 'json'})
                     .pipe(tap(res => {
                      console.log('Res is here', res);
                      console.log('Res Json', JSON.stringify(res))
                     
                    }),
                           map(res => (res as any).data),
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