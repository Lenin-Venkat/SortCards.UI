import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SortcardsService {
// private baseurl="https://localhost:5001/SortCardsController";
private baseurl="https://sortcardswebapp.azurewebsites.net/";
//  baseurl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  sortCards(cardsList: string[]): Observable<string[]>
  {
    console.log(cardsList);
    return this.httpClient.post<string[]>(this.baseurl+'SortCardsController', cardsList);
  }
}
