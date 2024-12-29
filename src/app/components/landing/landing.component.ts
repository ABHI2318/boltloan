import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <!-- Hero Section -->
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Loan Management Portal
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Efficiently manage loan requests and streamline approvals
          </p>
          <a 
            routerLink="/loan-requests" 
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Loan Requests
          </a>
        </div>
      </div>

      <!-- Features Section -->
      <div class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 text-2xl mb-4">📋</div>
            <h3 class="text-xl font-semibold mb-2">Loan Request Management</h3>
            <p class="text-gray-600">
              View and process loan applications efficiently with our streamlined interface
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 text-2xl mb-4">✅</div>
            <h3 class="text-xl font-semibold mb-2">Quick Approvals</h3>
            <p class="text-gray-600">
              Approve or reject loan requests with detailed remarks and instant updates
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 text-2xl mb-4">👤</div>
            <h3 class="text-xl font-semibold mb-2">Profile Management</h3>
            <p class="text-gray-600">
              Manage your loan officer profile and keep your information up to date
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-blue-600 text-white py-16">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold mb-2">500+</div>
              <div class="text-blue-100">Loans Processed</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">98%</div>
              <div class="text-blue-100">Response Rate</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">24/7</div>
              <div class="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LandingComponent {}