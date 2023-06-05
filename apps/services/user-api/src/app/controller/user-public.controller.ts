import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UserPublicController {
  constructor(private readonly logger: Logger) {}

  @Get('/health')
  @ApiResponse({
    status: 200,
    description: 'Health check successful',
  })
  @ApiTags('User Service Public API')
  @Unauthenticated()
  getHealthCheck(): string {
    return 'UP';
  }
}
