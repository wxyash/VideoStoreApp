import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged:any;
  constructor(private router:Router,private session:SessionStorageService) { }

  ngOnInit() {

    // logout btn handle
    if(this.session.get('logged') == true){
      this.logged =true;
    }else{
      this.logged =false;
    }
  }

  onSubmit(){
    this.session.clear();
    this.logged = false;
    this.router.navigate(['']);
  }
}

