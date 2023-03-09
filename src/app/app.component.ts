import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe((users: any) => {
      console.log(users);
    });

    this.usuariosService.createPost().subscribe( (post: any) => {
      console.log(post);
    });
  }


}
