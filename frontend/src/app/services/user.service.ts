import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  serverUrl= environment.serverUrl;

  //getting the userdb
  getUserdb() {
    return this.http.get(`${this.serverUrl}`);
  }

  // adding the user
  addUser(userData: any) {
    return this.http.post<any>(
      `${this.serverUrl}/userRegistraion`,
      userData
    );
  }
  //cheacking login credencials
  login(auth: any) {
    return this.http.post<any>(`${this.serverUrl}/userLogin`, auth);
  }
  //deleting the user
  deleteUser(email: any) {
    return this.http.delete(`${this.serverUrl}/deleteUser/` + email);
  }host:3000

  //updating the user
  updateUser(email: any, newUser: any) {
    return this.http.put<any>(
      `${this.serverUrl}/updateUser/${email}`,
      newUser
    );
  }

  // finding the user
  finduser(email: any) {
    return this.http.get<any>(`${this.serverUrl}/findUser/${email}`);
  }
}
