import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
	imports: [QuizModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync), UserModule, AuthModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
