import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }

  get inputClasses() {
    let baseClasses = 'w-full px-4 py-2 rounded border';
    let disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    return `${baseClasses} ${disabledClasses}`;
  }
}
