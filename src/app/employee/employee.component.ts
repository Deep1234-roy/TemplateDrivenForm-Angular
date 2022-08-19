import { Component, OnInit } from '@angular/core';

interface User {
  id?: number;
  name: string;
  age: number;
  department: string;
  company: string;
}

const USERS: User[] = [
  {
    name: 'Deep Roy',
    age: 23,
    department: 'Engineering',
    company: 'Citiustech'
  },
  {
    name: 'Abhishek Kolkur',
    age: 26,
    department: 'Admin',
    company: 'TCS'
  },
  {
    name: 'Sriparna Basu',
    age: 30,
    department: 'HR',
    company: 'Citiustech'
  },
  {
    name: 'Aditi Patil',
    age: 32,
    department: 'Engineering',
    company: 'Wipro'
  },
  {
    name: 'Raktim Dutta',
    age: 25,
    department: 'Admin',
    company: 'TCS'
  }
]
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() {
    this.refreshUsers();
   }

  page = 1;
  pageSize = 4;
  collectionSize = USERS.length;
  users:User[]=[];

  ngOnInit(): void {
  }

  refreshUsers() {
    this.users = USERS
      .map((user, i) => ({id: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
