import { AppDesktopComponent } from './app-desktop/app-desktop.component';
import { AppMobileComponent } from './app-mobile/app-mobile.component';
import { NgComponentOutlet } from '@angular/common';
import { DeviceService } from '../device.service';
import { Component } from '@angular/core';

@Component({
  imports: [NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./page-styles.scss'],
  selector: 'app-root'
})

export class AppComponent {
	private _currentComponentType: typeof AppMobileComponent | typeof AppDesktopComponent;

	constructor(private deviceService: DeviceService) {
		this._currentComponentType = this.deviceService.isAppInMobileMode
			? AppMobileComponent
			: AppDesktopComponent;
	}

	protected get currentComponentType(): typeof AppMobileComponent | typeof AppDesktopComponent {
		return this._currentComponentType;
	}
}
