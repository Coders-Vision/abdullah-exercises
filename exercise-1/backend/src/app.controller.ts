import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('*') // Wildcard route
  serveReactApp(@Res() res: Response) {
    res.sendFile(join(__dirname, '../../', 'frontend', 'dist', 'index.html')); // Adjust path if using Vite
  }
}