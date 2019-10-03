import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { BankingComponent } from '../component/banking/banking.component';
import { ExpensesComponent } from '../component/expenses/expenses.component';
import { SupplierComponent } from '../component/supplier/supplier.component';
import { SupplierinfoComponent } from '../component/supplierinfo/supplierinfo.component';
import { EmployeeComponent } from '../component/employee/employee.component';
import { ReportComponent } from '../component/report/report.component';
import { TaxComponent } from '../component/tax/tax.component';
import { AccountingComponent } from '../component/accounting/accounting.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'banking', component: BankingComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'suppliers', component: SupplierComponent },
      { path: 'suppliersinfo', component:SupplierinfoComponent },
      { path: 'employees', component:EmployeeComponent },
      { path: 'reports', component:ReportComponent },
      { path: 'taxes', component: TaxComponent },
      { path: 'accounting', component: AccountingComponent },
      

      

    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
