import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
})
export class JWTInterceptor implements HttpInterceptor{
    
    
    constructor(private authServe : AuthService){

    }


    intercept(req: HttpRequest<any>, next: HttpHandler)
    {
        const jwt_token = this.authServe.jwt_token

        const authReq = req.clone({
            headers : req.headers.set("Authorization", "Bearer " + jwt_token)
        })


        return next.handle(authReq)

    }

    
}