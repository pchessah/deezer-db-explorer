import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import axios from "axios";
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  constructor(private _http:HttpClient) { }

  searchArtist(artist: string){
    const SEARCH_STRING =  "search?q="+artist
    const promise = axios.get(SEARCH_STRING)
    return from(promise).pipe(map(res => (res as any).data.data),
    catchError(e => { console.log(e); return of(e)}));
  
    return this._http.get(SEARCH_STRING)
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