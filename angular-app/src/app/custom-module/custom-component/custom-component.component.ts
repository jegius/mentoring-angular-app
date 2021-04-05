import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CustomService} from '../services/custom-component-service.service';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit, OnDestroy {

  constructor(public readonly service: CustomService, @Inject('test') testData: string) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  changeValue(): void {
    this.service.setData(`testset ${Math.random()}`);
  }
}
