import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listUsers : any[] = []
  newNameUser: string =""
  newUserPassword : string =""

  userName : string = "evengyl"
  password : string = "test1234"

  constructor(private usersServe : UsersService, private authServe : AuthService) {
      
    this.usersServe.getAllUsers().subscribe((datas :any) => {
        this.listUsers = datas
    })

  }

  authenticate(){
    this.authServe.auth(this.userName, this.password)
  }


  saveNewUser()
  {
    this.usersServe.createNewUser(this.newNameUser, this.newUserPassword).subscribe({
      next : (datas : any) => {
        if(datas.message == "success")
        this.usersServe.getAllUsers().subscribe((datas :any) =>  {
            this.listUsers = datas
            this.newNameUser = ""
        })
      },
      error : (err) => {
        alert(err.error.message)
      },
    })
      
  }

}
