import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:8080/api";

  constructor(private _httpClient: HttpClient) {  }

  getVagas(): Observable<Vaga[]>{
<<<<<<< HEAD
    return this._httpClient.get<Vaga[]>(this.url + "/vagas");
  }

  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url + "/cadastrar",vaga);
=======
    return this._httpClient.get<Vaga[]>(this.url+"/vagas");
  }

  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url+"/cadastrar",vaga);
>>>>>>> 2652c1cfee656427716727c992bb3383e50d70c3
  }

  atualizarVaga(id:any ,vaga: Vaga):Observable<Vaga[]>{
    const urlAtualizar = `${this.url}/editar/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar,vaga);
  }

  removerVaga(id:any):Observable<Vaga[]>{
    const urlDeletar = `${this.url}/vagas/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar);
  }
}
