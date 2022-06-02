import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//We set it explicitely global to allow accesing it in every module
//now you dont have to import it in every module
@Global()
@Module({
  providers: [PrismaService],
  //need to export explicitely
  exports: [PrismaService],
})
export class PrismaModule {}
