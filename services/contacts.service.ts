import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { myContact } from '../models/myContact';
import { myGroup } from '../models/myGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl:string=`http://localhost:4000`;

  constructor(private http:HttpClient) { }
  //get All Contacts Data
  public getAllContacts(){
    let dataUrl:string = `${this.baseUrl}/contacts`;
    return this.http.get<myContact>(dataUrl).pipe(catchError(this.handleError))
  }
  //get single contacts
  public getContacts(contactId:string):Observable<myContact>{
    let dataUrl:string=`${this.baseUrl}/contacts/${contactId}`;
    return this.http.get<myContact>(dataUrl).pipe(catchError(this.handleError));
  }
  //create contacts
  public createContacts(contact:myContact):Observable<myContact>{
    let dataUrl:string = `${this.baseUrl}/contacts`;
    return this.http.post<myContact>(dataUrl,contact).pipe(catchError(this.handleError))
  }
  //update contacts
  public updateContacts(contact:myContact, contactId:string):Observable<myContact>{
    let dataUrl:string = `${this.baseUrl}/contacts/${contactId}`;
    return this.http.put<myContact>(dataUrl,contact).pipe(catchError(this.handleError))
  }
  //delete contacts
  public deleteContacts(contactId:string):Observable<myContact>{
    let dataUrl:string = `${this.baseUrl}/contacts/${contactId}`;
    return this.http.delete<myContact>(dataUrl).pipe(catchError(this.handleError))
  }
  //get all groups
  public getAllGroups() :Observable<myGroup>{
    let dataUrl:string = `${this.baseUrl}/groups`;
    return this.http.get<myGroup>(dataUrl).pipe(catchError(this.handleError))
  }
  //get single group
  public getGroup(contact:myContact):Observable<myGroup>{
    let dataUrl:string=`${this.baseUrl}/groups/${contact.groupId}`;
    return this.http.get<myGroup>(dataUrl).pipe(catchError(this.handleError));
  }
  //error solve
  public handleError(error:HttpErrorResponse){
    let errormessage:string=''
    if(error.error instanceof ErrorEvent){
      //client error
      errormessage=`Error:${error.error.message}`
    }
    else{
      //server side error
      errormessage=`status:${error.status} \n message:${error.message}`
    }
    return throwError(errormessage)
  }
}
