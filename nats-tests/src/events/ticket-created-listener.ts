import { Message } from 'node-nats-streaming';
import Listener from './base-listener';
import { Subjects } from './subjects';
import { TickedCreatedEvent } from './ticket-created-event';

export class TicketCreatedListener extends Listener<TickedCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName: string = 'payments-service';
  onMessage(data: TickedCreatedEvent['data'], msg: Message): void {
    console.log('Event data!', data);
    msg.ack();
  }
}
