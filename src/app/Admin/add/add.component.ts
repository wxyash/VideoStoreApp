import { Component, OnInit } from '@angular/core';
import { Video } from '../../videos';
import { GetService } from '../../get.service';
import {Router} from '@angular/router';
import {SessionStorageService} from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  videos = new Video();
  videosData: any;
  img: File;
  img2: any;
  path= "../../../assets/";

  constructor(private getService: GetService,private router:Router,private session:SessionStorageService,private http: HttpClient) { }

  onSubmit(title, rTime, genre, ratings, director, status) {

    if( this.img == null) {
      this.img2 = "default.jpg";
      //assigned values to be updated
      this.videosData = {title:title.value,rTime: rTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
       // update video
       this.getService.addVideo(this.videosData).subscribe(data=>{
        data =this.videosData;
      window.alert("Video Added!");
         this.router.navigate(['mainAdmin']);});

      }else{
      const fd = new FormData();
      fd.append('image',this.img ,this.img.name);
      this.img2 = this.img.name
       //assigned values to be updated
       this.videosData = {title:title.value,rTime: rTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
       // update video
       this.getService.addVideo(this.videosData).subscribe(data=>{
        data =this.videosData;
      window.alert("Video Updated!");

         this.router.navigate(['mainAdmin']);});
      this.getService.addImage(fd).subscribe( data=>{return false;});

    }

  }

  onFileSelected(event){
    this.img = <File>event.target.files[0];
    if( this.img == null) {this.img2 = "default.jpg";}else{this.img2 = this.img.name}
    const fd = new FormData();
    fd.append('image',this.img ,this.img.name);
    console.log(this.img2);
  }

  ngOnInit() {
     //session handle
    if( this.img == null) {this.img2="default.jpg";}else{this.img2 = this.img.name}
    if(!this.session.get('logged'))this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}});
  }


}
