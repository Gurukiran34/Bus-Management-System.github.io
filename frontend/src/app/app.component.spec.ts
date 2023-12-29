import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-frontend app is running!');
  });
});

// describe('AppComponent', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [RouterTestingModule],
//     declarations: [AppComponent]
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'busmgmt'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('busmgmt');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('busmgmt app is running!');
//   });
// });
