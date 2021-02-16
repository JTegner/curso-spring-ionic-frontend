import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { SorteiosDTO } from '../models/sorteios.dto';

@Injectable()
export class SorteiosService {

    constructor (public http: HttpClient) {    
    }

    findAll() : Observable<SorteiosDTO>{
        return this.http.get<SorteiosDTO>(`${API_CONFIG.baseUrl}/sorteios`);
    }

}