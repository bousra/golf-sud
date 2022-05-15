import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
 })
export class HeaderService{
  constructor(){

  }
  public trueOrFalse: boolean = true;

  change(){
    this.trueOrFalse = !this.trueOrFalse;
  }
}
