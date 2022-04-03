import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortcardsService {
private baseurl="https://localhost:5001/SortCardsController";
  constructor(private httpClient: HttpClient) { }

  sortCards(cardsList: string[]): Observable<string[]>
  {
    console.log(cardsList);
    return this.httpClient.post<string[]>(this.baseurl+'', cardsList);
  }
}
