// card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type CardAccent = 'success' | 'info' | 'secondary' | 'danger' | 'warning' | 'neutral';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="rounded-lg p-4 transition-all duration-200 relative overflow-hidden"
      [ngClass]="[
        baseClasses,
        accentClasses[accent],
        shadowClasses[accent]
      ]"
    >
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 opacity-50"
        [ngClass]="gradientClasses[accent]"
      ></div>

      <!-- Card content with relative positioning to appear above gradient -->
      <div class="relative z-10">
        <div class="flex items-start justify-between mb-4">
          <div>
            <ng-content select="[cardTitle]"></ng-content>
            <ng-content select="[cardSubtitle]"></ng-content>
          </div>
          <ng-content select="[cardActions]"></ng-content>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CardComponent {
  @Input() accent: CardAccent = 'neutral';

  // Base classes applied to all cards
  readonly baseClasses = 'border border-opacity-10';

  // Background colors for different accents (more subtle base colors)
  readonly accentClasses: Record<CardAccent, string> = {
    success: 'bg-[rgb(245,255,250)] border-green-200',
    info: 'bg-[rgb(245,248,255)] border-blue-200',
    secondary: 'bg-[rgb(255,245,255)] border-purple-200',
    danger: 'bg-[rgb(255,245,245)] border-red-200',
    warning: 'bg-[rgb(255,250,235)] border-yellow-200',
    neutral: 'bg-white border-gray-100'
  };

  // Gradient overlays for different accents
  readonly gradientClasses: Record<CardAccent, string> = {
    success: 'bg-gradient-to-br from-[rgba(207,255,228,0.5)] to-transparent',
    info: 'bg-gradient-to-br from-[rgba(207,221,255,0.5)] to-transparent',
    secondary: 'bg-gradient-to-br from-[rgba(255,207,234,0.5)] to-transparent',
    danger: 'bg-gradient-to-br from-[rgba(255,207,207,0.5)] to-transparent',
    warning: 'bg-gradient-to-br from-[rgba(255,237,207,0.5)] to-transparent',
    neutral: 'bg-gradient-to-br from-gray-50 to-transparent'
  };

  // Shadow variations for different accents
  readonly shadowClasses: Record<CardAccent, string> = {
    success: 'hover:shadow-lg hover:shadow-green-50',
    info: 'hover:shadow-lg hover:shadow-blue-50',
    secondary: 'hover:shadow-lg hover:shadow-purple-50',
    danger: 'hover:shadow-lg hover:shadow-red-50',
    warning: 'hover:shadow-lg hover:shadow-yellow-50',
    neutral: 'hover:shadow-lg hover:shadow-gray-50'
  };
}
