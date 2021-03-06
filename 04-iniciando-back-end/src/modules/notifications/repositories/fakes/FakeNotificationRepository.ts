import { ObjectID } from 'mongodb';

import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

class FakeNotificationRepository {
  private notifications: Notification[] = [];

  async create({
    recipient_id,
    content,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), recipient_id, content });

    this.notifications.push(notification);

    return notification;
  }
}

export default FakeNotificationRepository;
