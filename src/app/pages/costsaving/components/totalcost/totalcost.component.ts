import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import * as _ from 'underscore';


import * as $ from 'jquery';

@Component({
  selector: 'totalcost',
  templateUrl: './totalcost.html',
  styleUrls: ['./totalcost.scss']
})

export class TOTALCOST implements OnInit {


  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;

  public value: boolean = false;
public value1=false;
  public display = false;
  public accountName;
  public regionName;
  public data = [];
  public update_time;
  public barChartLabels;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [{ data: [28, 48, 40, 19, 86, 27, 90] }];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,

    scales: {
      xAxes: [{
        barPercentage: 0.4
      }]
    }
  };
  public para = {
    RegName: "",
    AccName: ""
  }

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    // var k = document.cookie;
    // console.log('cookie ' + k);

    // var c = localStorage.getItem('currentUser');
    // console.log('current user' + c);

    // if (k == c) {
    this.http.get("http://localhost:3000/get_graph_implement").subscribe(data => {
      this.totalcostfind(data);
      this.displayTable = true;
    });
//   } else{
//     this.value1=true;

//   }
}

hideall()
{
  this.value1=false;
  location.reload();
}
  totalcostfind(res) {
    this.data = JSON.parse(res._body);
    var filterObj = {
      AccountName: _.uniq(_.map(this.data, 'AccountName')),
      RegionName: _.uniq(_.map(this.data, 'RegionName'))
    }
    this.accountName = filterObj.AccountName;
    this.regionName = filterObj.RegionName;
  }



  getdata() {
    console.log(this.para.AccName + this.para.RegName);
    this.http.post("http://localhost:3000/get_graph_implement1", this.para).subscribe(data => {
      this.actiondata(data);
    });
  }
  actiondata(res) {
    var k = JSON.parse(res._body);
    var filterObj = {
      ResourceName: _.uniq(_.map(k, 'ResourceName')),

    }
    var filterobj1 = {
      TotalCost: (_.map(k, 'TotalCost'))
    }

    this.barChartLabels = filterObj.ResourceName;
    this.barChartData[0].data = filterobj1.TotalCost;
    console.log(this.barChartLabels);
    console.log(filterobj1.TotalCost);
    console.log(this.barChartData[0].data);
    this.display = true;

    // for(var i=0;i<filterobj1.TotalCost.length;i++)
    //   {
    //     if(filterobj1.TotalCost[i]==0)
    //       {

    //       }
    //   }
    var p = function () {
      for (var i = 0; i < filterobj1.TotalCost.length; i++) {
        if (filterobj1.TotalCost[i] != 0) {
          return false;
        }
      }
      return true;


    }
    if (p() == true) {
      console.log('all the values are zero');
      this.value = true;
    }

  }

  hideonce() {
    this.value = false;
    this.display = false;
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  reset() {
    $('#first:input').val('');

    if (this.value == true) {
      this.hideonce();
    }

  }
  reset2() {
    $('#second:input').val('');
    if (this.value == true) {
      this.hideonce();
    }


  }

}



