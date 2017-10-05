import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'ec2',
  templateUrl: './ec2.html',
  styleUrls: ['./ec2.scss']
})

export class EC2 implements OnInit {

  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_ec2").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    console.log(this.update_time);
    this.update_time = this.update_time.replace(/\[{"update_time":"/g, '').replace(/T/, ' ').replace(/.000Z"}]/, '');

    this.data.forEach(res => {
      res.SecurityGroups = res.SecurityGroups.replace(/,/g, '<br>');
      res.LaunchTime = res.LaunchTime.replace(/T/g, ' ').replace(/.000Z/, '');
    });
    // console.log(this.data);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{ title: 'Name', data: 'Name' }, { title: 'InstanceId', data: 'InstanceId' }, { title: 'InstanceType', data: 'InstanceType' }, { title: 'LaunchTime', data: 'LaunchTime' },
      { title: 'PrivateIpAddress', data: 'PrivateIpAddress' },
      { title: 'PublicIpAddress', data: 'PublicIpAddress' }, { title: 'State', data: 'State' }, { title: 'ImageId', data: 'ImageId' }, { title: 'VpcId', data: 'VpcId' },
      { title: 'SecurityGroups', data: 'SecurityGroups' },
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
