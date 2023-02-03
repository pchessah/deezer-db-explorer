import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import * as moment from 'moment';
import { IArtist } from 'libs/model/artists/src/lib/artist.interface';
import { SearchArtistService } from 'libs/state/artists/src/public-api';

@Component({
  selector: 'lib-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.css']
})
export class SingleArtistComponent implements OnInit {

  artist!: IArtist;
  topTracks: any;
  isLoaded = false
  albums: any;
  artistDetails: IArtist[] = [];
  displayedColumns: string[] = ['track', 'track-time'];
  dataSource!:any;


  constructor(private _getArtistService: SearchArtistService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute)
  {
    _router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.setArtistDetails();
      }
    });
  }

  ngOnInit() {
    this.setArtistDetails();
  }

  setArtistDetails(){
    const id = this._activatedRoute.snapshot.url[0].path;

    const artist$ =  this._getArtistService.getSingleArtist(id);
    const topTracks$ = this._getArtistService.getTopTracks(id);
    const albums$ = this._getArtistService.getAlbums(id);

    combineLatest([artist$, topTracks$, albums$]).subscribe(([artist, topTracks, albums]) =>{
      this.artist = artist;
      this.topTracks = topTracks;
      this.dataSource = this.topTracks;
      this.albums = albums;
      this.isLoaded = true
    })
  }

  searchArtist(artists: IArtist[]){
    this.artistDetails = artists;
  }

  getTime(time: number){
    const convertedMoment = moment(time * 1000).format("mm:ss")
    return convertedMoment;
  }

  getYear(dateString:string){
    const date = new Date(dateString);
    const convertedMoment = moment(date).format("YYYY");
    return convertedMoment;
  }

}
