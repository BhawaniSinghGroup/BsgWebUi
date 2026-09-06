import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import {
    getServiceBySlug,
    ServiceDetail
} from '../data/service-details';

import { SectionHeadingComponent } from '../shared/section-heading.component';
import { CtaComponent } from '../shared/cta.component';

@Component({
    selector: 'bsg-service-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        SectionHeadingComponent,
        CtaComponent
    ],
    template: `
    <main *ngIf="service as s">

      <!-- Hero -->
      <section class="page-hero service-hero">
        <div class="container">
          <p class="eyebrow">Services</p>

          <h1>{{ s.title }}</h1>

          <p class="hero-copy">
            {{ s.value }}
          </p>

          <p class="hero-copy">
            {{ s.description }}
          </p>

          <div class="hero-actions">
            <a class="button" routerLink="/contact">
              Start a conversation
              <span>→</span>
            </a>

            <a class="text-link" routerLink="/services">
              View all services
            </a>
          </div>
        </div>
      </section>

      <!-- Problems -->
      <section class="content-section">
        <div class="container">
          <bsg-section-heading
            eyebrow="The challenge"
            title="Problems worth solving">
          </bsg-section-heading>

          <div class="service-list">
            <div
              class="service-list-item"
              *ngFor="let problem of s.problems; let i = index">

              <span class="service-number">
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>

              <div>
                <p>{{ problem }}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- What we deliver -->
      <section class="content-section">
        <div class="container">
          <bsg-section-heading
            eyebrow="What we deliver"
            title="Practical technology built around your needs"
            copy="We focus on outcomes, maintainability and solutions that can evolve with your business.">
          </bsg-section-heading>

          <div class="service-grid">
            <article
              class="service-card"
              *ngFor="let item of s.whatWeDeliver">

              <h3>{{ item }}</h3>

            </article>
          </div>
        </div>
      </section>

      <!-- Capabilities -->
      <section class="content-section">
        <div class="container">
          <bsg-section-heading
            eyebrow="Capabilities"
            title="From strategy to implementation"
            copy="Our approach combines engineering discipline with a clear understanding of the business problem.">
          </bsg-section-heading>

          <div class="service-grid">
            <article
              class="service-card"
              *ngFor="let capability of s.capabilities; let i = index">

              <span class="service-number">
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>

              <h3>{{ capability }}</h3>

            </article>
          </div>
        </div>
      </section>

      <!-- Engagement approach -->
      <section class="content-section">
        <div class="container">
          <bsg-section-heading
            eyebrow="How we work"
            title="A focused, collaborative engagement"
            copy="We adapt the engagement to the complexity of the problem, the existing technology landscape and your business goals.">
          </bsg-section-heading>

          <div class="service-list">
            <div
              class="service-list-item"
              *ngFor="let step of s.engagementApproach; let i = index">

              <span class="service-number">
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>

              <div>
                <p>{{ step }}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Technology -->
      <section class="content-section">
        <div class="container">
          <bsg-section-heading
            eyebrow="Technology"
            title="Modern technology, chosen for the problem"
            copy="We use technologies that fit the product, environment and long-term requirements rather than forcing a one-size-fits-all stack.">
          </bsg-section-heading>

          <div class="technology-list">
            <span
              class="technology-tag"
              *ngFor="let technology of s.technologies">

              {{ technology }}

            </span>
          </div>
        </div>
      </section>

      <!-- Related services -->
      <section class="content-section" *ngIf="relatedServices.length">
        <div class="container">
          <bsg-section-heading
            eyebrow="Explore more"
            title="Related services">
          </bsg-section-heading>

          <div class="service-grid">
            <a
              class="service-card service-card-link"
              *ngFor="let related of relatedServices"
              [routerLink]="['/services', related.slug]">

              <h3>{{ related.title }}</h3>

              <p>{{ related.description }}</p>

              <span class="text-link">
                Explore service →
              </span>

            </a>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <bsg-cta
        eyebrow="Let's build what matters"
        title="Have a problem worth solving?"
        copy="Tell us what you are trying to build, improve or solve. Let's explore what technology can do for your business.">
      </bsg-cta>

    </main>

    <!-- Invalid service -->
    <main *ngIf="!service" class="content-section">
      <div class="container">

        <bsg-section-heading
          eyebrow="Service not found"
          title="We couldn't find that service"
          copy="The service you're looking for may have moved or may no longer be available.">
        </bsg-section-heading>

        <a class="button" routerLink="/services">
          View services
        </a>

      </div>
    </main>
  `
})
export class ServicePageComponent implements OnInit {

    service: ServiceDetail | undefined;

    relatedServices: ServiceDetail[] = [];

    constructor(
        private route: ActivatedRoute,
        private title: Title,
        private meta: Meta
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');

            this.service = slug
                ? getServiceBySlug(slug)
                : undefined;

            this.updateSeo();
            this.updateRelatedServices();
        });
    }

    private updateSeo(): void {
        if (!this.service) {
            this.title.setTitle(
                'Service Not Found | Bhawani Singh Group'
            );

            return;
        }

        const service = this.service;

        this.title.setTitle(
            `${service.title} | Bhawani Singh Group`
        );

        this.meta.updateTag({
            name: 'description',
            content: service.metaDescription
        });

        this.meta.updateTag({
            property: 'og:title',
            content: `${service.title} | Bhawani Singh Group`
        });

        this.meta.updateTag({
            property: 'og:description',
            content: service.metaDescription
        });

        this.meta.updateTag({
            property: 'og:url',
            content:
                `https://bhawanisinghgroup.com/services/${service.slug}`
        });
    }

    private updateRelatedServices(): void {
        if (!this.service) {
            this.relatedServices = [];
            return;
        }

        const allServices: ServiceDetail[] = [
            getServiceBySlug('software-development'),
            getServiceBySlug('web-development'),
            getServiceBySlug('mobile-development'),
            getServiceBySlug('api-integration'),
            getServiceBySlug('software-modernization'),
            getServiceBySlug('cloud-devops'),
            getServiceBySlug('automation'),
            getServiceBySlug('technology-consulting')
        ].filter(
            (service): service is ServiceDetail => !!service
        );

        this.relatedServices = allServices
            .filter(
                service => service.slug !== this.service?.slug
            )
            .slice(0, 3);
    }
}