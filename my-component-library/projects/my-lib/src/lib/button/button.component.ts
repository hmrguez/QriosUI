import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() accent: 'success' | 'info' | 'danger' | 'warning' | 'secondary' | 'neutral' = 'neutral';

  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit();
    }
  }

  get buttonClasses() {
    let baseClasses = 'inline-flex items-center px-4 py-2 rounded';
    let accentClasses = '';
    switch (this.accent) {
      case 'success':
        accentClasses = 'bg-green-200 text-green-800 hover:bg-green-300';
        break;
      case 'info':
        accentClasses = 'bg-blue-200 text-blue-800 hover:bg-blue-300';
        break;
      case 'danger':
        accentClasses = 'bg-red-200 text-red-800 hover:bg-red-300';
        break;
      case 'warning':
        accentClasses = 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300';
        break;
      case 'secondary':
        accentClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
        break;
      case 'neutral':
      default:
        accentClasses = 'bg-white text-gray-800 hover:bg-gray-100';
        break;
    }
    let disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    return `${baseClasses} ${accentClasses} ${disabledClasses}`;
  }
}
