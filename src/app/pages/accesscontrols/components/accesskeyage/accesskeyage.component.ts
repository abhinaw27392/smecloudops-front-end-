import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'accesskeyage',
  templateUrl: './accesskeyage.html',
  styleUrls: ['./accesskeyage.scss']
})

export class ACCESSKEYAGE implements OnInit{
  // select UserName,AccessKeyId,AccessKeyAge,Status,AccountName  from access_key_age
   public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_access_key_age").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    console.log(this.update_time);
    this.update_time = this.update_time.replace(/\[{"update_time":"/g, '').replace(/T/, ' ').replace(/.000Z"}]/, '');
    
    console.log(this.data);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{ title: 'UserName', data: 'UserName' },{ title: 'AccessKeyId', data: 'AccessKeyId' },{ title: 'AccessKeyAge', data: 'AccessKeyAge' },
      { title: 'Status', data: 'Status' },{ title: 'AccountName', data: 'AccountName' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
