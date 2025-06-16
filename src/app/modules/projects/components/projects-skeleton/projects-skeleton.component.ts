import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'projects-skeleton',
  templateUrl: './projects-skeleton.component.html',
  imports: [SkeletonModule],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ProjectsSkeleton {
  skeletonsArray = Array.from({ length: 10 }, (_, i) => i);
}
