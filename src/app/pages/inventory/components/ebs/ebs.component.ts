import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ebs',
  templateUrl: './ebs.html',
  styleUrls: ['./ebs.scss']
})

export class EBS {
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_ebs").subscribe(data => {
      this.rdsdata(data);
      this.displayTable = true;
    });
  }

  rdsdata(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    this.update_time=this.update_time.replace(/\[{"update_time":"/g,'').replace(/T/,' ').replace(/.000Z"}]/,'');

    this.data.forEach(res => {
      res.CreateTime = res.CreateTime.replace(/T/g,' ').replace(/.000Z/,'');
    });
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{title: 'AvailabilityZone',data: 'AvailabilityZone'},{title: 'CreateTime',data: 'CreateTime'},{title: 'Size',data: 'Size'},{title: 'State',data: 'State'},
      {title: 'VolumeId',data: 'VolumeId'},{title: 'InstanceID',data: 'InstanceID'},{title: 'Status',data: 'Status'},{title: 'VolumeType',data: 'VolumeType'},{title: 'Name',data: 'Name'},{title: 'BusinessUnit',data: 'BusinessUnit'},{title: 'ProjectCode',data: 'ProjectCode'},
      {title: 'Owner',data: 'Owner'},{title: 'App',data: 'App'},{title: 'AccountName',data: 'AccountName'},
      {title: 'RegionName',data: 'RegionName'
      }],
   
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}