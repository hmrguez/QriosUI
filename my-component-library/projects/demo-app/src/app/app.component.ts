import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "../../../my-lib/src/lib/button/button.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardComponent} from "../../../my-lib/src/lib/card/card.component";
import {TextInputComponent} from "../../../my-lib/src/lib/text-input/text-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent, TextInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'demo-app';
  protected readonly console = console;
  username: any;
  isDisabled: any;
}
