import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponentComponent} from './custom-component/custom-component.component';
import {CustomComponentTwoComponent} from './custom-component-two/custom-component-two.component';
import {CustomDirectiveDirective} from './custom-directive/custom-directive.directive';
import {
  CustomComponentServiceService,
  CustomService
} from './services/custom-component-service.service';
import {CustomDataPipe} from './custom-pipe/custom-data.pipe';


@NgModule({
  declarations: [
    CustomComponentComponent,
    CustomComponentTwoComponent,
    CustomDirectiveDirective,
    CustomDataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomComponentComponent
  ],
  providers: [
    {provide: CustomService, useClass: CustomComponentServiceService},
    {provide: 'test', useValue: 'test'}
  ]
})
export class CustomModuleModule {
}
