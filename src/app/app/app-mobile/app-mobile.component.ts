import { SvgIconComponent } from '../svg-component/svg-icon.component';
import { AppBaseDirective } from '../app-base/app-base.directive';
import { Component } from '@angular/core';

@Component({
  imports: [SvgIconComponent],
  templateUrl: './app-mobile.component.html',
  styleUrl: './app-mobile.component.scss'
})

export class AppMobileComponent extends AppBaseDirective { }
