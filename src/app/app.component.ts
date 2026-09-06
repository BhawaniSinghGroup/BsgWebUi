import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';

@Component({ selector: 'bsg-root', standalone: true, imports: [RouterOutlet, HeaderComponent, FooterComponent], template: `<bsg-header /><main><router-outlet /></main><bsg-footer />` })
export class AppComponent {}
