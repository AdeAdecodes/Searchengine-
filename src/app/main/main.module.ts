import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../component/home/home.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserData } from '../@core/data/users';
import { BankingComponent } from '../component/banking/banking.component';
import { ExpensesComponent } from '../component/expenses/expenses.component';
import { SupplierComponent } from '../component/supplier/supplier.component';
import { SupplierinfoComponent } from '../component/supplierinfo/supplierinfo.component';
import { EmployeeComponent } from '../component/employee/employee.component';
import { ReportComponent } from '../component/report/report.component';
import { TaxComponent } from '../component/tax/tax.component';
import { AccountingComponent } from '../component/accounting/accounting.component';
import { CompanyService } from './../service/company.service';

import { AgGridModule } from 'ag-grid-angular';

import { MDBBootstrapModule, MdbTableDirective } from 'angular-bootstrap-md';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, BankingComponent, ExpensesComponent, SupplierComponent, SupplierinfoComponent, EmployeeComponent, ReportComponent, TaxComponent, AccountingComponent],
  imports: [
    
    MainRoutingModule,
    SharedModule,
    FormsModule,
    AgGridModule,
    MDBBootstrapModule.forRoot()
  ],
  providers:[CompanyService]
})
export class MainModule { }
