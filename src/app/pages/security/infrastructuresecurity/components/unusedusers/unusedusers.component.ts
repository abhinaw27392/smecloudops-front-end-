import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'unusedusers',
  templateUrl: './unusedusers.html',
  styleUrls: ['./unusedusers.scss']
})

export class UNUSEDUSERS implements OnInit{
  public data = [];

  dtOptions: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_iam_unused_users").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data[0];
    
    console.log(this.data);
    this.data.forEach(res => {
      res.CreateDate = res.CreateDate.replace(/T/g, ' ').replace(/.000Z/, '');
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      // select  UserName,CreateDate,DATEDIFF(CURDATE(),PasswordLastUsed)AS 'Last Sign-In 
      // (> 60 Days)',AccountName from iam_user where DATEDIFF(CURDATE(),PasswordLastUsed)>=60
      columns: [{ title: 'UserName', data: 'UserName' },
      { title: 'CreateDate', data: 'CreateDate' },
      { title: 'Last Sign-In (> 60 Days)', data: 'Last Sign-In (> 60 Days)' },
      { title: 'AccountName', data: 'AccountName' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
