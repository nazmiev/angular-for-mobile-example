import { TestBed } from '@angular/core/testing';
import { AppDesktopComponent } from './app-desktop.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDesktopComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppDesktopComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-for-mobile-example' title`, () => {
    const fixture = TestBed.createComponent(AppDesktopComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-for-mobile-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppDesktopComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-for-mobile-example');
  });
});
