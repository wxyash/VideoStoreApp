import { Component, OnInit } from '@angular/core';
import { Video } from '../../videos';
import { GetService } from '../../get.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SessionStorageService} from 'angular-web-storage';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  imageSrc:any;
  videos =new Video();
  id: any;
  videosData = {title:"",rTime: "", genre: "", ratings: "" , director: "",status:"", image:"" };
  path ="../../../assets/" ;
  img: File;
  img2: any;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute,private session:SessionStorageService) { }

  onSubmit(title, rTime, genre, ratings, director, status) {

    if( this.img == null) {
      this.img2 = "default.jpg";
      //assigned values to be updated
      this.videosData = {title:title.value,rTime: rTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
      // update video
      this.getService.updateVideo(this.videosData,this.id).subscribe(data=>{
        data =this.videosData;
        window.alert("Video Updated!");

        this.router.navigate(['mainAdmin']);
       });

      }else{
      const fd = new FormData();
      fd.append('image',this.img ,this.img.name);
      this.img2 = this.img.name
       //assigned values to be updated
       this.videosData = {title:title.value,rTime: rTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
       // update video
       this.getService.updateVideo(this.videosData,this.id).subscribe(data=>{
         data =this.videosData;
         window.alert("Video Updated!");

         this.router.navigate(['mainAdmin']);
        });
      this.getService.addImage(fd).subscribe( data=>{return false;});

    }



  }

  ngOnInit() {

    if(this.session.get('logged')){
      //get video id parameter
      this._route.queryParams.subscribe(params => {this.id =params.id;});

      // get video on db by id
      if(this.id !=null){
        this.getService.getOne(this.id).subscribe(video => {
          this.videosData = video;
          this.imageSrc = video.image.originalname;});

      }else{
        this.router.navigate(['mainAdmin']);
      }

    }else{
       //bad session handle
      this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}});
  }



  }

  onFileSelected(event){
    this.img = <File>event.target.files[0];
    if( this.img == null) {this.img2 = "default.jpg";}else{this.img2 = this.img.name}
    const fd = new FormData();
    fd.append('image',this.img ,this.img.name);

    console.log(this.img);
  }

}
