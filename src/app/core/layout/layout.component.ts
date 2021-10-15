import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NodeSelectEventArgs, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

import { users, syncGroups } from './datasource';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  public data: Object[] = [
    {
      nodeId: '1',
      nodeText: 'Home',
      selected: true,
      url: ''
    },
    {
      nodeId: '2',
      nodeText: 'Grid & Tree',
      url: 'gridtree'
    }
  ];
  public field: Object = { dataSource: this.data, id: 'nodeId', text: 'nodeText'};
  @ViewChild('navtree') navtree: TreeViewComponent;

  ngOnInit() {
    if(localStorage.getItem("users") === null) localStorage.setItem("users", JSON.stringify(users));
    if(localStorage.getItem("syncGroups") === null) localStorage.setItem("syncGroups", JSON.stringify(syncGroups));

  }

  ngAfterViewInit() {
    switch(window.location.pathname) {
      case "/gridtree":
        this.navtree.selectedNodes = ['2'];
        break;
    }
  }

  public loadRoutingContent(args: NodeSelectEventArgs): void {
    let data: any = this.navtree.getTreeData(args.node);
    let routerLink: string = data[0].url;
    this.router.navigate([routerLink]);
 }
}
