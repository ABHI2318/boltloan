import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { Routes, provideRouter, RouterModule } from '@angular/router';
import { LoanRequestsComponent } from './app/components/loan-requests/loan-requests.component';
import { ProfileComponent } from './app/components/profile/profile.component';
import { LandingComponent } from './app/components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'loan-requests', component: LoanRequestsComponent },
  { path: 'profile', component: ProfileComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <nav class="bg-white shadow-lg">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <a routerLink="/" class="text-xl font-bold text-blue-600">
              LoanManager
            </a>
            <div class="space-x-4">
              <a routerLink="/loan-requests" class="px-4 py-2 hover:text-blue-600 transition-colors">
                Loan Requests
              </a>
              <a routerLink="/profile" class="px-4 py-2 hover:text-blue-600 transition-colors">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});