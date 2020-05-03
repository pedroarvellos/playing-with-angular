import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.scss']
})
export class ConfirmationMessageComponent {
  @Input("message") message: string;
}
