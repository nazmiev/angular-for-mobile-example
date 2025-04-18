import { SvgIconComponent } from '../svg-component/svg-icon.component';
import { AppBaseDirective } from '../app-base/app-base.directive';
import { Component } from '@angular/core';

@Component({
  imports: [SvgIconComponent],
  templateUrl: './app-desktop.component.html',
  styleUrl: './app-desktop.component.scss'
})

export class AppDesktopComponent extends AppBaseDirective {}
