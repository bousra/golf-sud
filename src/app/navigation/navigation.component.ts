import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
 import { navigations } from './navigation.inside';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  navigations = navigations;

  isTrue(){
    return this.headerService.trueOrFalse;
  }

}
