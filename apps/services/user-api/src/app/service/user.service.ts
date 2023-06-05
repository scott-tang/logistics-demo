import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../repository/users.repository';
import {mapUserEntityToDTO} from "../mappers/user.mapper";

@Injectable()
export class UserService {
  constructor(
    private readonly logger: Logger,
    private readonly userRepository: UserRepository,
  ) {}

  /**
   * Create Internal User and its initial data
   * @param authHeader to pass to internal services with
   * @param requestDto additional data to create the internal user with
   */
  async createInternalUser(
    authHeader: string,
    requestDto: UserDTO
  ): Promise<UserDTO> {
    try{
      const user = await this.userRepository.saveUser({
        requestDto
      });
      return mapUserEntityToDTO(user);
    }catch(e){
      throw new CommonException(HttpStatus.CONFLICT, [
        { message: 'Failed to create user.' },
      ]);
    }
  }

}
