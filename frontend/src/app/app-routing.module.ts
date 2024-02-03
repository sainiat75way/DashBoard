import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { WeatherComponent } from './weather/weather.component';
import { PricingComponent } from './pricing/pricing.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'account', component: AccountComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: AboutComponent },
  { path: 'price', component: PricingComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'events', component: EventsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
