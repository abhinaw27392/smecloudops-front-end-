import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'subnet',
  templateUrl: './subnet.html',
  styleUrls: ['./subnet.scss']
})

export class SUBNET {
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_subnet").subscribe(data => {
      this.rdsdata(data);
      this.displayTable = true;
    });
  }

  rdsdata(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    this.update_time=this.update_time.replace(/\[{"update_time":"/g,'').replace(/T/,' ').replace(/.000Z"}]/,'');

    // this.data.forEach(res => {
    //   res.CreateDate = res.CreateDate.replace(/T/g,' ').replace(/.000Z/,'');
    // });
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{title: 'SubnetId',data: 'SubnetId'},{title: 'VpcId',data: 'VpcId'},{title: 'State',data: 'State'},{title: 'CidrBlock',data: 'CidrBlock'},{title: 'AvailabilityZone',data: 'AvailabilityZone'},
      {title: 'AvailableIpAddressCount',data: 'AvailableIpAddressCount'},{title: 'AccountName',data: 'AccountName'},{title: 'RegionName',data: 'RegionName'
      }],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
