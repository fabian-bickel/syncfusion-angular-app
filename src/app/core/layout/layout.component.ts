import { Component, OnInit } from '@angular/core';

import { data } from './datasource';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  public data: Object[] = [
    {
      nodeId: '01',
      nodeText: 'Home',
      selected: true
    },
    {
      nodeId: '02',
      nodeText: 'Grid & Tree'
    }
  ];
  public field: Object = { dataSource: this.data, id: 'nodeId', text: 'nodeText', selected: 'selected'};

  ngOnInit() {
    if(localStorage.getItem("users") === null) localStorage.setItem("users", JSON.stringify(data));
  }
}
