import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Vamos a crear variables:
  user: string;
  password: string;

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  //Vamos a crear un método:
  login(){
    if (this.user == 'admin' && this.password == 'admin') {
      this.router.navigate(['/home']);
    }else{
      this.toastError();
    }
  }

  async toastError() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos',
      duration: 3000
    });
    toast.present();
  }
}
