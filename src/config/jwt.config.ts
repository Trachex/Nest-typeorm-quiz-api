import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const jwtConfig: JwtModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
        secret: configService.get('APP_SECRET'),
        signOptions: { expiresIn: '1d' }
    }),
    inject: [ConfigService]
}