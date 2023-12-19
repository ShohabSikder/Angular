import { Component, OnInit } from '@angular/core';

import { AllLeavesService } from '../../../service/all-leaves.service';
import { LeaveService } from '../../../service/leave.service';

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrl: './all-leaves.component.css'
})
export class AllLeavesComponent implements OnInit {
  leaveData:any;
  searchText:any;
  
  
  fromDate: string = ''; // Initialize as string
  toDate: string = ''; // Initialize as string
constructor(private allLeaves:AllLeavesService,private leave:LeaveService){}

ngOnInit():void{
  
  this.getAll();
  
}
getAll(){
  this.leave.getAllLeave()
  .subscribe(res => {
    this.leaveData=res;     
    
  })
}

filterDataByDateRange() {
  if (this.fromDate && this.toDate) {
    const fromDate = new Date(this.fromDate); // Convert to Date object
    const toDate = new Date(this.toDate); // Convert to Date object

    const filteredData = this.leaveData.filter((record: any) => {
      const leaveDate = new Date(record.leaveDate); // Assuming record.leaveDate is a string 'YYYY-MM-DD'
      return (
        fromDate <= leaveDate &&
        leaveDate <= toDate
      );
    });
    return filteredData;
  }
  return this.leaveData;
}
}


