import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectAngular';

  constructor(public _registerService: RegisterService){}
}
