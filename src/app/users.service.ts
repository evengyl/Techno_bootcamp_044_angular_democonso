import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    baseUrl : string = "http://localhost:3000"

    constructor(private httpC : HttpClient) {}

    getAllUsers() : Observable<any[]> {

        return this.httpC.get<any[]>(`${this.baseUrl}/users`, {})
    }


    createNewUser(newUserName : string, userName : string, userId : string) : Observable<any>
    {
        return this.httpC.post<any[]>(`${this.baseUrl}/users`, {
            "name" : newUserName,
            "userName": userName,
            "userId": userId
        })
    }
}