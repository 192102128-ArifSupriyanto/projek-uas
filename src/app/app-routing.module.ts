import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { EditdataComponent } from './editdata/editdata.component';
import { HapusdataComponent } from './hapusdata/hapusdata.component';
import { TambahdataComponent } from './tambahdata/tambahdata.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"tambah",component:TambahdataComponent},
  {path:"edit",component:EditdataComponent},
  {path:"hapus",component:HapusdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
