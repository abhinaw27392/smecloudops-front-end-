import { Router } from '@angular/router';
import { Component, ViewContainerRef, ViewEncapsulation, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { BaThemeConfig } from './theme/theme.config';
import { layoutPaths } from './theme/theme.constants';
import { Pages } from './pages/pages.component';
import { Http } from '@angular/http';


@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class App implements OnInit {

  ngOnInit() {
    if ("currentUser" in localStorage) {
      if (localStorage.getItem('currentUser') !== null) {
        this.showdashboard = true;
        this.showlogin = false;
        this.router.navigate(['/dashboard1']);
      }
    }

  }


  constructor(private _state: GlobalState,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner,
    private viewContainerRef: ViewContainerRef,
    private themeConfig: BaThemeConfig,
    private router: Router,
    private http: Http) {
    themeConfig.config();
    this._loadImages();
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public value: boolean = false;

  public display = false;

  isMenuCollapsed: boolean = false;
  public showlogin = true;
  public showdashboard = false;
  public t;

  public cred = {
    name: '',
    pword: ''
  }

  public k;

  logme() {
    this.http.post('http://localhost:3000/get_user_login', this.cred).subscribe((data) => this.myfnlogin(data));
  }

  myfnlogin(data) {
    if (data._body == "") {
      console.log("has no data");                                                                                   
      this.value = true;
    }
    else {
      // localStorage.setItem('currentUser', this.cred.name);
      this.t = JSON.parse(data._body);
      if (this.cred.name == this.t.Username && this.cred.pword == this.t.Password) {
        this.showdashboard = true;
        this.showlogin = false;
        var da = true;
        this.navigateme(da);
      }
      else {
        console.log("invalid data");
        this.value = true;
      }
    }
  }

  navigateme(da) {

    if (da == true) {
      //   var date = new Date();
      // var t=  date.setTime(date.getTime()+(30*100));


      // var maxAge = "; max-age=" + 300;
      // document.cookie = encodeURI(this.cred.name) + maxAge;

      // document.cookie = this.cred.name + "; expires=" + t;
      this.showdashboard = true;
      this.showlogin = false;
      this.router.navigate(['/dashboard1']);
    }
  }


  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('assets/img/sky-bg.jpg'));
  }


  hideall() {
    this.value = false;
    this.cred.name = null;
    this.cred.pword = null;
  }
  resetme() {
    this.value = false;
    this.cred.name = null;
  }
  resetme1() {
    this.value = false;
    this.cred.pword = null;
  }



}
