import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent {
  pers : persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, 
    private router: Router) { }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.pers = data;
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.pers).subscribe(data => {
      this.router.navigate(['']);
      
    },err => {
      alert("Error al modificar perfil");
      this.router.navigate(['']);
    }
    )
  }

  /*uploadImage($event:any) {
    
  }*/

}




