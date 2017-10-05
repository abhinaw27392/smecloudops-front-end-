import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'tagsowner',
  templateUrl: './tagsowner.html',
  styleUrls: ['./tagsowner.scss']
})

export class TAGSOWNER implements OnInit{
  public data = [];
  public update_time;

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;
  constructor(private router: Router, private http: Http) { }
  

  ngOnInit() {
    this.http.get("http://localhost:3000/get_tags_owner").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data[0];

    console.log(this.data);
// (select Owner from ec2 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))
// union (select Owner from rds  where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
// union (select Owner from ebs  where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))
// union (select Owner from vpc  where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev')) 
// union  (select Owner from s3 where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))  
// union (select Owner from securitygroup where AccountName not in ('sme-cloud-ops','sme-cloud-ops-dev'))
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
    

      columns: [{ title: 'Owner', data: 'Owner' }
      ],
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }
}
