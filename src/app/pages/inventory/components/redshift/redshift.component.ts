import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'redshift',
  templateUrl: './redshift.html',
  styleUrls: ['./redshift.scss']
})

export class REDSHIFT {
   public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_redshift").subscribe(data => {
      this.rdsdata(data);
      this.displayTable = true;
    });
  }

  rdsdata(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    this.update_time=this.update_time.replace(/\[{"update_time":"/g,'').replace(/T/,' ').replace(/.000Z"}]/,'');
    
    // console.log(this.data);
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
    
      data: this.data,
      columns: [{title: 'VpcId',data: 'VpcId'}, {title: 'EndpointAddress',data: 'EndpointAddress'},  {title: 'EndpointPort',data: 'EndpointPort'},{title: 'ClusterIdentifier',data: 'ClusterIdentifier'},
     {title: 'ClusterStatus',data: 'ClusterStatus'},{title: 'NodeType',data: 'NodeType'},{title: 'NumberOfNodes',data: 'NumberOfNodes'},{title: 'PubliclyAccessible',data: 'PubliclyAccessible'},
     {title: 'AvailabilityZone',data: 'AvailabilityZone'}, {title: 'AccountName',data: 'AccountName'},  {title: 'RegionName',data: 'RegionName'
    }],
      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
    // this.dtColumns =this.dtOptions.columns;
  }
}
