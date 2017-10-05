import { Component, NgZone, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'passwordpolicy',
  templateUrl: './passwordpolicy.html',
  styleUrls: ['./passwordpolicy.scss']
})

export class PASSWORDPOLICY {
  public data = [];
  public update_time;
  public show = true;
  public table =false;
  message = '';

  dtOptions: any = {};
  dtColumns: any = {};
  displayTable: boolean = false;

  constructor(private router: Router, private http: Http, private zone: NgZone) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/get_iam_pass_policy").subscribe(data => {
      this.ec2data(data);
      this.displayTable = true;
    });
  }
  someClickHandler(info: any): void {
    this.message = info;

  }
  bottonClick() {
     this.show = true;
     this.table=false;
  }

  ec2data(res) {
    this.data = JSON.parse(res._body).data;
    this.update_time = JSON.stringify(JSON.parse(res._body).update_time[0]);
    console.log(this.update_time);
    this.update_time = this.update_time.replace(/\[{"update_time":"/g, '').replace(/T/, ' ').replace(/.000Z"}]/, '');

    console.log(this.data);


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      columns: [{ title: 'AccountName', data: 'AccountName' }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          this.table= true;
          this.show = false;
          this.someClickHandler(data);
        });
        return row;
      },
      data: this.data,

      dom: "<'row'<'col-sm-2'f><'col-sm-10'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: ['colvis', 'copy', 'print', 'csv', 'excel']
    };
  }

}
