import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:3000/leave/";
  leavePost(data:any){
    return this.http.post<any>(this.baseUrl,data)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }

  getAllLeave(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }
  editLeave(id:number, row:any){
    return this.http.put<any>(this.baseUrl+id,row)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }
  deleteLeave(id:number){
    return this.http.delete<any>(this.baseUrl+id)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }
}
