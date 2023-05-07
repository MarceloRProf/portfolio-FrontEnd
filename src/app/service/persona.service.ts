import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient)  { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
  
  
  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'lista');
  }

  public listaPer(id:number): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + `persona/${1}/lista`);
  }

  public detail(id:number): Observable<persona>{
    return this.http.get<persona>(this.URL + `detail/${1}`);
  }

  /*public save(persona: persona): Observable<any>{
    return this.http.post<any>(this.URL + 'create', persona);
  }*/

  public update(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${1}`, persona);

  }

  public edit(persona: persona):Observable<any>{
    return this.http.put<any>(this.URL + 'update', persona);
    }

  /*public delete(id: number): Observable<any>{

    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}*/
}


