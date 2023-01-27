import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})

export class SearchArtistService {

  DEFAULT_STRING = 'api/search?q='

  constructor(private _http:HttpClient) {}

  searchArtist(artist: string){
    return this._http
               .get(`${this.DEFAULT_STRING}${artist}`)
               .pipe(map(res => (res as any).data), catchError(e => of(e)));
  }
}