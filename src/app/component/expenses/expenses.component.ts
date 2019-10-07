import { Component, OnInit } from '@angular/core';
import { SmartTableData } from 'src/app/@core/data/smart-table';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Company: {
        title: 'Company/Supplier',
        type: 'number',
      },
      Phone_Number: {
        title: 'Phone_Number',
        type: 'string',
      },
      Email: {
        title: 'Email',
        type: 'string',
      },
      Open: {
        title: 'Open Balance',
        type: 'string',
      },
     
     
    },
  };

  constructor(private service: SmartTableData){ 

  }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
