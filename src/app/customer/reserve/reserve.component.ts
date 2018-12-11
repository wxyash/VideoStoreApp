import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GetService } from '../../get.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  id: any;
  videosData: any;
  customers: any = [];
  status = {status:"unavaliable"};
  path ="../../../assets/" ;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.queryParams.subscribe(params => {this.id =params.id;});

    // get video on db by id
    if(this.id !=null){
      this.getService.getOne(this.id).subscribe(videosList => {this.videosData = [videosList]; });
    }else{
      this.router.navigate(['mainAdmin']);
    }
    //get all customers
    this.getService.getAllCustomers().subscribe(gets => {this.customers = gets;});
  }

  updateVideo(id){
    //update video status field on db
    this.getService.updateFieldVideo(this.status,this.id).subscribe( data=>{
    data = this.videosData;
    this.router.navigate(['']);
    });


  }

}
