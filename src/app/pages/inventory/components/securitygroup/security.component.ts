import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'securitygroup',
  templateUrl: './security.html',
  styleUrls: ['./security.scss']
})

export class SECURITYGROUP {
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_securitygroup").subscribe(data => {
      this.rdsdata(data);
      this.displayTable = true;
    });
  }

  rdsdata(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    this.update_time=this.update_time.replace(/\[{"update_time":"/g,'').replace(/T/,' ').replace(/.000Z"}]/,'');

    this.data.forEach(res => {
      res.Outbound = res.Outbound.replace(/,/g, '<br>');
      res.Inbound = res.Inbound.replace(/,/g, '<br>');
    });
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
    columns: [{title: 'GroupName',data: 'GroupName'},{title: 'VpcId',data: 'VpcId'},{title: 'Outbound',data: 'Outbound'},{title: 'Inbound',data: 'Inbound'},{title: 'GroupId',data: 'GroupId'},
      {title: 'AccountName',data: 'AccountName'},{title: 'RegionName',data: 'RegionName'},{title: 'ProjectCode',data: 'ProjectCode'},{title: 'BusinessUnit',data: 'BusinessUnit'},
      {title: 'Owner',data: 'Owner'},{title: 'App',data: 'App'
      }],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
