import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MENU: NbMenuItem[] = [
    {
      title: 'DashBoard',
      icon: 'map',
      link: '/',
      home: true,
    },
    // {
    //   title: 'Banking',
    //   icon: 'briefcase-outline',
    //   link: '/banking',
    // },
    // {
    //   title: 'Expenses',
    //  icon: 'credit-card-outline',
    //   link: '/expenses',
    // },

    // {
    //   title: 'Supplier',
    //   icon: 'car-outline',
    //   link: '/suppliers',
    // },
    // {
    //   title: 'Employee',
    //   icon: 'checkmark-square-2-outline',
    //   link: '/employees',
    // },
    // {
    //   title: 'Reports',
    //   icon: 'book-open-outline',
    //   link: '/reports',
    // },

    // {
    //   title: 'Taxes',
    //   icon: 'file-text-outline',
    //   link: '/taxes',
    // },

    // {
    //   title: 'Accounting',
    //   icon: 'car-outline',
    //   link: '/accounting',
    // },


  
   
  
  
  
   
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
