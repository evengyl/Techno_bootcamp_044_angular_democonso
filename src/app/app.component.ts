import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listUsers : any[] = []
  newNameUser: string =""

  userName : string = ""
  userId : string = ""

  constructor(private usersServe : UsersService) {
      
    this.usersServe.getAllUsers().subscribe((datas :any) => {
        this.listUsers = datas
    })

  }


  saveNewUser()
  {
    this.usersServe.createNewUser(this.newNameUser, this.userName, this.userId).subscribe({
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
