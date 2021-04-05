import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {CustomService} from '../services/custom-component-service.service';

import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-custom-component-two',
  templateUrl: './custom-component-two.component.html',
  styleUrls: ['./custom-component-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomComponentTwoComponent implements OnInit, OnDestroy {

  @Input()
  public data: Observable<string | null> | null;

  constructor(private readonly customService: CustomService) {
      this.data = null;
  }

  ngOnInit(): void {
    this.data = this.customService.provideData();
  }

  ngOnDestroy(): void {
  }

  toCebabCase(data: string | null): string {
    return data ? data.replace(/\s/gi, '-') : '';
  }
}
