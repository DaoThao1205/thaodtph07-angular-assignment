import { Injectable } from '@angular/core';
import { User } from '../app/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //chứa thông tin của đối tượng sau khi login
  userLogin: User=new User();
  isLogin=false;
 api= 'https://5e7cd292a917d70016683ea0.mockapi.io/user';

 constructor(
  private http: HttpClient
) { }

getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.api);
}
 getUser(id): Observable<User>{
   console.log(id);
  return this.http.get<User>(`${this.api}/${id}`);
  // return this.Users.find(User => User.id == id);
}
removeUser(id):Observable<User>{
  return this.http.delete<User>(`${this.api}/${id}`);
}
addUser(product){
  console.log(product)
  return this.http.post<User>(`${this.api}`, product);
  // const newUser = { id: 5, ...User};
  // this.Users.push(newUser);
  // console.log(this.Users)
}
updateUser(product){
   return this.http.put<User>(`${this.api}/${product.id}`, product);
}
}
