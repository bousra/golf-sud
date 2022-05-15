import { Component, OnInit } from '@angular/core';
import { navigations } from '../navigation/navigation.inside';
@Component({
  selector: 'app-orientations-perspectives',
  templateUrl: './orientations-perspectives.component.html',
  styleUrls: ['./orientations-perspectives.component.css']
})
export class OrientationsPerspectivesComponent implements OnInit {
  orientationPerspectives = navigations.presentation;
  constructor() { }

  ngOnInit(): void {
  }


}
