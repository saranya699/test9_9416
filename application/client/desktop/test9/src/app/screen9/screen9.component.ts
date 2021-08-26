import { Component, OnInit } from '@angular/core';
import { Screen9Service } from './screen9.service';

@Component({
  selector: 'app-screen9',
  templateUrl: './screen9.component.html',
  styleUrls: ['./screen9.component.scss'],
})

export class Screen9Component implements OnInit {

    constructor (
        private screen9Service: Screen9Service,
    ) { }

    ngOnInit() {
    }
}