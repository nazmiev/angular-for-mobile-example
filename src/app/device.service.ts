import { Injectable } from '@angular/core';

const MOBILE_USER_AGENT_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

@Injectable({
	providedIn: 'root',
})
export class DeviceService {
	private _isMobileDevice: boolean;

	constructor() {
		this._isMobileDevice = MOBILE_USER_AGENT_REGEX.test(navigator.userAgent);
	}

	get isAppInMobileMode(): boolean {
		return this._isMobileDevice;
	}
}
