import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillURL = 'http://localhost:8080/skill/' //Sale del controller hys

  constructor(private httpClient: HttpClient) {  }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillURL + 'lista');
  }

  public listaPer(id:number): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillURL + `persona/${id}/lista`);
  }

  public detail(id:number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.skillURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + `update/${id}`, skill);

  }

  public edit(skill: Skill):Observable<any>{
    return this.httpClient.put<any>(this.skillURL + 'update', skill);
    }

  public delete(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
}
