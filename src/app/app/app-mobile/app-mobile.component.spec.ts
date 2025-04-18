import { AppMobileComponent } from './app-mobile.component';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMobileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppMobileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-for-mobile-example' title`, () => {
    const fixture = TestBed.createComponent(AppMobileComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-for-mobile-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppMobileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-for-mobile-example');
  });
});
