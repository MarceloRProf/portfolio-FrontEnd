import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  pers: persona = null;
  

  constructor(private personaService: PersonaService, private tokenService: TokenService) {}

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

  cargarPersona(): void {
    this.personaService.detail(1).subscribe(
      data => {this.pers = data;
      }
    )

  }

}



/*@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  pers: persona = null;
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) {}
  
  
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaService.detail(1).subscribe(data => {this.pers = data});
      }
      
  


}

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  pers: persona = new persona("","","","","");
  isLogged = false;

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.pers = data})
  }



}*/
