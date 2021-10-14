import { Component, OnInit } from '@angular/core';
import { CommandModel, CommandColumnService, EditSettingsModel, ToolbarItems, ContextMenuItem, ContextMenuService, PageService, EditService, ExcelExportService, GroupService, PdfExportService, SortService, ToolbarService, PageSettingsModel, ColumnChooserService, IEditCell, SaveEventArgs, DeleteEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
  providers: [ContextMenuService, PageService, SortService, GroupService, EditService, PdfExportService, ExcelExportService, ToolbarService, CommandColumnService, ColumnChooserService]
})
export class GridViewComponent implements OnInit {

  constructor() { }

  public data: object[];
  public editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  public toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'ColumnChooser', 'Search'];;
  public contextMenuItems: ContextMenuItem[] = ['SortAscending', 'SortDescending',
    'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
    'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
    'LastPage', 'NextPage', 'Group', 'Ungroup'];
  public commands: CommandModel[] = [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
  { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
  { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
  { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }];
  public initialPage: PageSettingsModel = { pageSizes: true, pageSize: 10 };
  public dpParams: IEditCell = { params: { format: 'dd.MM.yyyy' } };

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem("users"));
  }

  actionComplete(args: SaveEventArgs | DeleteEventArgs): void {
    if ((args.requestType === 'delete' || args.requestType === 'save')) {
      localStorage.setItem("users", JSON.stringify(this.data));
    }
  }
}
