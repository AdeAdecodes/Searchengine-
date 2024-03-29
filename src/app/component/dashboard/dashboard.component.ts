import { MdbTableDirective, MdbTablePaginationComponent, } from 'angular-bootstrap-md';
import { CompanyService } from './../../service/company.service';
import {Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { map, tap, shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit{
  // names: string[] = [];
  // customer=[];
  // private frameworkComponents;
  // private context;
  // columnDefs;\
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements = []  ;
  headElements = ['ORGANIZATION NAME', 'GROUP', 'Day'];

  searchText: string = '';
  previous: string;
  //   this.columnDefs = [
  constructor(private CompService:CompanyService,private cdRef: ChangeDetectorRef) {
  //   this.columnDefs = [
  //     {headerName: 'Date', field: 'COL 1' },
  //     {headerName: 'Document No', field: 'COL 2' },
     
  //     {headerName: 'Site', field: 'COL 3',},
  //     {headerName: 'Type', field: 'COL 4',},
  //     {headerName: 'Journal', field: 'COL 5',},
  //     {headerName: 'Line Description', field: 'COL 6',},
  //     {headerName: 'Ledger Debit', field: 'COL 7',},
  //     {headerName: 'Ledger Credit', field: 'COL 8',}, 
  // ];
//   this.elements = [
//     { id: this.rowData, first: 'COL 2', last: 'COL 3'}
// ];
  }
  @HostListener('input') oninput() {
    this.searchItems();
  }
  ngOnInit() {

    this.CompService.getCompany()
    .pipe(
      map((res:any)=>res.data)
    )
  .subscribe((res)=>{
   console.log(res);
   this.elements=res;
   console.log(this.elements)
   this.mdbTable.setDataSource(this.elements);
   this.elements = this.mdbTable.getDataSource();
   this.previous = this.mdbTable.getDataSource();
    })


  
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}

  // function currencyFormatter(params) {
  //   return "₦" + formatNumber(params.value);
  // }
  // function formatNumber(number) {
  //   return Math.floor(number)
  //     .toString()
  //     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }
