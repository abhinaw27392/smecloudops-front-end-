import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'ec2',
  templateUrl: './ec2.html',
  styleUrls: ['./ec2.scss']
})

export class EC2 implements OnInit{

  public data = [];
  dtOptions: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_ec2").subscribe(data => {
        this.ec2data(data);
        this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body);
    // console.log(this.data);

  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 30,

      columns: [{ title:  'Name', data:  'Name' }, { title:  'InstanceId', data:  'InstanceId' }, { title:  'InstanceType', data:  'InstanceType' }, { title:  'LaunchTime', data:  'LaunchTime' },
      { title:  'PrivateIpAddress', data:  'PrivateIpAddress' },
      { title:  'PublicIpAddress', data:  'PublicIpAddress' }, { title:  'State', data:  'State' }, { title:  'ImageId', data:  'ImageId' }, { title:  'VpcId', data:  'VpcId' }, { title:  'AccountName', data:  'AccountName' },
      { title:  'RegionName', data:  'RegionName' },
      {title:  'SecurityGroups', data:  'SecurityGroups'}],
      data: this.data,

      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel', 'csv']
    };
    console.log(this.dtOptions);
  }
}
