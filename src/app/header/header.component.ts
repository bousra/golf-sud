import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject,} from 'rxjs';
import { navigations } from '../navigation/navigation.inside';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigations = navigations;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  handleClick(){
    this.headerService.change();
  }

}
