import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { CustomerService } from '../Services/customer.service';
import { Customer } from '../models/Customer';



@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Array<Customer> | undefined;

  constructor(private data: CustomerService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.data.getAllCustomer().subscribe(data => {
      this.customers = data;
    });

  }

  rowClicked(e,id)
  {
    this.router.navigate(["/customer", id])
  }

}
