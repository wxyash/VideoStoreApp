import { Component, OnInit } from '@angular/core';
import { GetService } from '../../get.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoslist',
  templateUrl: './videoslist.component.html',
  styleUrls: ['./videoslist.component.css'],

})
export class VideoslistComponent implements OnInit {


  private videos: any = [];
  path ="../../../assets/" ;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {

    //get all videos
    this.getService.getAllVideos().subscribe(videosList => {this.videos = videosList;});

  }

  //btn reserve function
  btnReserve(id) {
    this.router.navigate(['/reserve'],{ queryParams: {'id': id}});
 }
}


