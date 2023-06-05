import {UserEntity} from "../../entities/user.entity";

export function mapUserEntityToDTO(userEntity: UserEntity){
  return {
    userId: userEntity.userId,
    email: userEntity.email,
    phoneNumber: userEntity.phoneNumber,
    firstName: userEntity.firstName,
    lastName: userEntity.lastName
  };
}
