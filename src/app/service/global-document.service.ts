import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalDocument } from "../model/globalDocument";

@Injectable({
  providedIn: 'root'
})
export class GlobalDocumentService {
 
  private _jsonURL = 'assets/document.json';

  constructor(private http: HttpClient) {    
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
