import { Component, OnInit } from '@angular/core';
import { GetService } from '../../get.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SessionStorageService} from 'angular-web-storage';


@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css'],
})

export class MainAdminComponent implements OnInit {

  videos: any = [];
  path ="../../../assets/" ;
  message:any;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute,private session:SessionStorageService) { }

  ngOnInit() {




    if(this.session.get('logged')){

    //get url parameters
    this._route.queryParams.subscribe(params => {this.message =params['authentication'];if(this.message == "Sucessful")window.location.reload();this.router.navigate(['/mainAdmin'])});


    //get all videos from DB
    this.getService.getAllVideos().subscribe(videosList => {
      this.videos = videosList;
        });

    //bad session handle
    }else{ this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}}); }
  }

  //btn Update function
  btnUpdate(id){
    this.router.navigate(['/update'],{queryParams: {'id': id}});
   }

  //btn delete function
  btnDelete(id){
    this.getService.delete(id).subscribe(video =>{
      this.videos.splice(id,1);
      this.router.navigate(['mainAdmin']);
      });

  }

}
