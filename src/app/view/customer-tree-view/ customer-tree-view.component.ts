import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { NodeClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-customer-tree-view',
  templateUrl: './customer-tree-view.component.html',
  styleUrls: ['./customer-tree-view.component.css']
})
export class CustomerTreeViewComponent implements OnInit {

  constructor() { }

  public hierarchicalData: Object[];
  public field: Object;
  public selectedNodeData: Object;
  private users: Object[];
  private usersTree: Object[];
  private syncGroups: Object[];
  private syncGroupsTree: Object[];
  @ViewChild ('treeelement') treeelement: TreeViewComponent;

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
    this.syncGroups = JSON.parse(localStorage.getItem("syncGroups"));
    this.usersTree = this.users.map((user) => {
      user['name'] = user["firstName"] + ' ' + user["lastName"];
      user['treeId'] = '1-1-' + user['id'];
      user['pid'] = '1-1';
      return user;
    });
    this.syncGroupsTree = this.syncGroups.map((syncGroup) => {
      syncGroup['treeId'] = '1-2-' + syncGroup['id'];
      syncGroup['pid'] = '1-2';
      return syncGroup;
    });
    this.hierarchicalData = [
      {
        treeId: '1', name: 'Customers', expanded: true,
        subChild: [
          {
            treeId: '1-1', name: 'Users', pid: '1',
            subChild: this.usersTree
          },
          {
            treeId: '1-2', name: 'Sync Groups', pid: '1',
            subChild: this.syncGroupsTree
          }
        ]
      }
    ];
    this.field = { dataSource: this.hierarchicalData, id: 'treeId', parentID: 'pid', text: 'name', child: 'subChild' };
  }

  nodeClicked(args: NodeClickEventArgs) {
    const nodeData: Object = this.treeelement.getTreeData(args.node)[0];
    if(nodeData['subChild'] === undefined) {
      this.selectedNodeData = nodeData;
    }
  }
}
