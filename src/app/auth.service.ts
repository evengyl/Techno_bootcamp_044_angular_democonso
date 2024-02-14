import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    
    jwt_token : string = ""

    constructor(private httpC : HttpClient){}

    auth(userName : string, password : string)
    {
        return this.httpC.post("http://localhost:3000/auth", {
            userName, password
        }).subscribe((datas : any) => {
            alert("OK connecté !!!")
            this.jwt_token = datas.token
        })
    }
}