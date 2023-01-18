import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  // dataSource!: MatTableDataSource<any>;
     dataSource:any;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.userService.getUserdb()
    .subscribe(data => this.dataSource = data)
    //  this.dataSource = new MatTableDataSource<any>();
  }
  displayedColumns: string[] = [
    'first name',
    'last name',
    'age',
    'contact',
    'email',
    'Actions',
  ];

  editRow(email: any) {
    this.route.navigate(['/signup'], {
      queryParams: { email: email, edit: true },
    });
  }
  deleteRow(element: any) {
    this.userService.deleteUser(element).subscribe((res)=>{
       if(res){
        this.userService.getUserdb()
        .subscribe(data => this.dataSource = data)
       }
    })

  }
  logout() {
    this.route.navigateByUrl('/login');
  }
}
