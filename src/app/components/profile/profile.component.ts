import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoanOfficerService } from '../../services/loan-officer.service';
import { LoanOfficer, Gender } from '../../models/types';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Profile</h2>
      
      <form (ngSubmit)="updateProfile()" class="max-w-lg">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input 
            type="text"
            [(ngModel)]="profile.firstName"
            name="firstName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input 
            type="text"
            [(ngModel)]="profile.lastName"
            name="lastName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            PAN Card Number
          </label>
          <input 
            type="text"
            [(ngModel)]="profile.pancardNumber"
            name="pancardNumber"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Contact Number
          </label>
          <input 
            type="tel"
            [(ngModel)]="profile.contactNumber"
            name="contactNumber"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input 
            type="date"
            [(ngModel)]="profile.dob"
            name="dob"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <select 
            [(ngModel)]="profile.gender"
            name="gender"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option [value]="Gender.MALE">Male</option>
            <option [value]="Gender.FEMALE">Female</option>
          </select>
        </div>

        <button 
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  `
})
export class ProfileComponent implements OnInit {
  profile: Partial<LoanOfficer> = {};
  Gender = Gender;
  officerId = 1; // This should come from authentication

  constructor(private loanOfficerService: LoanOfficerService) {}

  ngOnInit() {
    // Load profile data
  }

  updateProfile() {
    this.loanOfficerService.updateProfile(this.officerId, this.profile)
      .subscribe(updatedProfile => {
        // Handle success
        console.log('Profile updated:', updatedProfile);
      });
  }
}