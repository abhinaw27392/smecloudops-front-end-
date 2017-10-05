import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'opensecuritygroup',
  templateUrl: './opensecuritygroup.html',
  styleUrls: ['./opensecuritygroup.scss']
})

export class OPENSECURITYGROUP implements OnInit{
    public data = [];

  dtOptions: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_open_securitygroup").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data[0];
    
    console.log(this.data);
    this.data.forEach(res => {
      res.Outbound = res.Outbound.replace(/,/g, '<br>');
      res.Inbound = res.Inbound.replace(/,/g, '<br>');
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,

      columns: [{ title: 'GroupName', data: 'GroupName' },
      { title: 'VpcId', data: 'VpcId' },
      { title: 'Outbound', data: 'Outbound' },
      { title: 'Inbound', data: 'Inbound' },
      { title: 'GroupId', data: 'GroupId' },
      { title: 'AccountName', data: 'AccountName' },
      { title: 'RegionName', data: 'RegionName' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
