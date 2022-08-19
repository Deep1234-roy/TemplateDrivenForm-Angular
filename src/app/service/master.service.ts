import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  DataObj = {"name":"","age":0,"department":"","company":""};
  DataArr = [];
  
}
