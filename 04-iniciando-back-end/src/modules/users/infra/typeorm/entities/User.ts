import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Exclude, Expose } from 'class-transformer';
import uploadConfig from '@config/upload';

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return '';
      case 's3':
        return `https://${uploadConfig.aws.bucket}.s3.amazonaws.com/${this.avatar}`;

      default:
        return null;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;
