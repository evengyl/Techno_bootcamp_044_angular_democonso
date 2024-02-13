import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    
    jwt_token : string = ""

    constructor(private httpC : HttpClient){}

    auth(userName : string, userId : string)
    {
        return this.httpC.post("http://localhost:3000/auth", {
            userName, userId
        }).subscribe((datas : any) => {
            this.jwt_token = datas.token
        })
    }
}