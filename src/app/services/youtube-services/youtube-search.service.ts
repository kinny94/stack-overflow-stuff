import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=49&q=';
  api_key = 'AIzaSyDbIxP2GeiKE-GLWg2IgLq025LLiHVsDjk';

  constructor( private http: HttpClient ) {}

  getYouTubeVideos( video: string ) {
    return this.http.get( `${ this.url }${ video }&key=${ this.api_key }` );
  }
}
