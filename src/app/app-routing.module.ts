import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'work-list', loadChildren: './pages/work-list/work-list.module#WorkListPageModule' },
  { path: 'work-detail-view/:id', loadChildren: './pages/work-detail-view/work-detail-view.module#WorkDetailViewPageModule' },
  { path: 'work-detail-edit', loadChildren: './pages/work-detail-edit/work-detail-edit.module#WorkDetailEditPageModule' },
  { path: 'work-detail-new', loadChildren: './pages/work-detail-new/work-detail-new.module#WorkDetailNewPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
