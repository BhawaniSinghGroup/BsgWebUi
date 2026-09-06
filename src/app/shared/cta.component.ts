import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ selector: 'bsg-cta', standalone: true, imports: [RouterLink], template: `<section class="cta-band"><div><p class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2><p>{{ copy }}</p></div><a class="button button-light" routerLink="/contact">Start a conversation <span>↗</span></a></section>` })
export class CtaComponent { @Input() eyebrow = 'Let’s build what matters'; @Input() title = 'Have a problem worth solving?'; @Input() copy = 'Tell us what you are trying to build, improve or solve. Let’s explore what technology can do for your business.'; }
