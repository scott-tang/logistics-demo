import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  private logger = new Logger();

  async saveUser(user: UserEntity): Promise<UserEntity> {
    this.logger.debug(`Saving internal user: ${JSON.stringify(user)}`);
    return await this.save(user);
  }
}
