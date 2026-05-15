import { Component } from '@angular/core';
import { SignupForm } from '../../components/signup-form/signup-form';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  standalone: true,
  imports: [SignupForm, CardModule]
})
export class SignupPageComponent {}