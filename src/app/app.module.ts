import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { SidebarModule, TreeViewModule, TabModule} from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { GridTreeComponent } from './view/grid-tree/grid-tree.component';
import { GridViewComponent } from './view/grid-view/grid-view.component';
import { TreeViewComponent } from './view/tree-view/tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GridTreeComponent,
    GridViewComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TreeViewModule,
    TabModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
