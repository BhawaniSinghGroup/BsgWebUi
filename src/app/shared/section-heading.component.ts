import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({ selector: 'bsg-section-heading', standalone: true, imports: [CommonModule], template: `<div class="section-heading"><p class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2><p class="heading-copy" *ngIf="copy">{{ copy }}</p></div>` })
export class SectionHeadingComponent { @Input() eyebrow = ''; @Input() title = ''; @Input() copy = ''; }
