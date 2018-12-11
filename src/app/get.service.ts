import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

  getAllVideos(): Observable<any> {
    return this.http.get('http://localhost:3000/getVideos').pipe(map((gets) => {
      return gets;
    }));
  }
  getAllCustomers(): Observable<any> {
    return this.http.get('http://localhost:3000/getCustomers').pipe(map((gets) => {
      return gets;
    }));
  }

  addVideo(videos): Observable<any> {
    return this.http.post('http://localhost:3000/add',videos);
  }

  addImage(video):Observable<any>{
    let header = new HttpHeaders();
    header.append('Content-Type','multipart/form-data');
    return this.http.put(`http://localhost:3000/image`,video);
  }

  updateVideo(video,videoId):Observable<any>{
    return this.http.post(`http://localhost:3000/${videoId}`,video);
  }

  updateFieldVideo(video,videoId):Observable<any>{
    return this.http.put(`http://localhost:3000/${videoId}`,video);
  }

  getOne(videoId): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.get(`http://localhost:3000/get/${videoId}`).pipe(map(get =>{
       get => get.json();
       return get;
    }));

  }

  delete(videoId): Observable<any>{
    return this.http.delete(`http://localhost:3000/${videoId}`,videoId)
  }

  getAdmin(): Observable<any> {
    return this.http.get('http://localhost:3000/getAdmin').pipe(map((gets) => {
      return gets;
    }));

  }
}
