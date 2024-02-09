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

  constructor(private usersServe : UsersService) {
      
    this.usersServe.getAllUsers().subscribe((datas :any) => {
        this.listUsers = datas
    })

  }


  saveNewUser()
  {
    this.usersServe.createNewUser(this.newNameUser).subscribe((datas :any) => {

      if(datas.message == "success")
        this.usersServe.getAllUsers().subscribe((datas :any) =>  {
            this.listUsers = datas
            this.newNameUser = ""
        })
    })
  }

}
