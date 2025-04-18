import { TestBed } from '@angular/core/testing';
import { AppBaseDirective } from './app-base.directive';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBaseDirective],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppBaseDirective);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-for-mobile-example' title`, () => {
    const fixture = TestBed.createComponent(AppBaseDirective);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-for-mobile-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppBaseDirective);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-for-mobile-example');
  });
});
