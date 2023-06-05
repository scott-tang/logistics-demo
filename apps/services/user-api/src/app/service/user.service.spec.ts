import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../repository/users.repository';
import { UserService } from './user.service';

const defaultInitialUser = {
  id: '34f402e9-f593-4db8-a9ba-3ba769ea6ccv',
  userId: 'example@test.com',
  email: 'test.user@testemail.com',
  phoneNumber: '+6411111111111',
  firstName: 'First',
  lastName: 'Last',
  createdAt: '2023-02-07T13:29:21.035Z',
  updatedAt: '2023-02-07T13:29:21.035Z',
};

describe('UserService', () => {
  let logger: Logger;
  let service: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: UserRepository,
          useValue: {
            save: jest.fn(),
          },
        },
        UserService,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should create initial user status', async () => {
    jest.spyOn(UserRepository, 'saveUser').mockReturn({'savedUserEntity...'});
    const result = await service.createInternalUser('sampleAuth', {
      email: 'testemail@test.com',
      firstName: 'test',
      lastName: 'user',
      phoneNumber: '111111111',
      phoneNumberCountryCode: '+1',
      emailDomain: 'test',
    });

    expect(result).toEqual({
      userId: 'testUserId',
      email: 'testemail@test.com',
      phoneNumber: '+1111111111',
      firstName: 'test',
      lastName: 'user',
    });
  });
});
