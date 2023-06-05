import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user', schema: 'public' })
@Index(['userId'], { unique: true })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'text' })
  userId: string;

  @Column({ name: 'email', type: 'text', nullable: true })
  email: string;

  @Column({ name: 'phone_number', type: 'text', nullable: true })
  phoneNumber: string;

  @Column({ name: 'first_name', type: 'text', nullable: true })
  firstName: string;

  @Column({ name: 'last_name', type: 'text', nullable: true })
  lastName: string;

  @Column({ name: 'gender', type: 'text', nullable: true })
  gender: string;

  @Column({ name: 'date_of_birth', type: 'text', nullable: true })
  dateOfBirth: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
