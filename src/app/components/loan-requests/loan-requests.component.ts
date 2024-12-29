import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanOfficerService } from '../../services/loan-officer.service';
import { LoanRequest, PageResponse } from '../../models/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Loan Requests</h2>
      
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2">Loan ID</th>
              <th class="px-4 py-2">Amount</th>
              <th class="px-4 py-2">Duration</th>
              <th class="px-4 py-2">Status</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let loan of loans?.contents" class="border-b">
              <td class="px-4 py-2">{{loan.loanid}}</td>
              <td class="px-4 py-2">{{loan.loanamount | currency}}</td>
              <td class="px-4 py-2">{{loan.time}} months</td>
              <td class="px-4 py-2">
                <span [class]="getStatusClass(loan.loanstatus)">
                  {{loan.loanstatus}}
                </span>
              </td>
              <td class="px-4 py-2">
                <button 
                  *ngIf="loan.loanstatus === 'PENDING'"
                  (click)="approveLoan(loan.loanid)"
                  class="bg-green-500 text-white px-3 py-1 rounded mr-2">
                  Approve
                </button>
                <button 
                  *ngIf="loan.loanstatus === 'PENDING'"
                  (click)="showRejectDialog(loan.loanid)"
                  class="bg-red-500 text-white px-3 py-1 rounded">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="mt-4 flex justify-between items-center">
        <div>
          Page {{currentPage + 1}} of {{loans?.totalPages}}
        </div>
        <div>
          <button 
            [disabled]="currentPage === 0"
            (click)="changePage(currentPage - 1)"
            class="px-3 py-1 bg-blue-500 text-white rounded mr-2">
            Previous
          </button>
          <button 
            [disabled]="loans?.isLastPage"
            (click)="changePage(currentPage + 1)"
            class="px-3 py-1 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>
      </div>

      <!-- Rejection Dialog -->
      <div *ngIf="showRejectionDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Reject Loan</h3>
          <textarea 
            [(ngModel)]="rejectionMessage"
            class="w-full p-2 border rounded mb-2"
            placeholder="Enter rejection reason">
          </textarea>
          <div class="flex justify-end">
            <button 
              (click)="cancelReject()"
              class="px-3 py-1 bg-gray-500 text-white rounded mr-2">
              Cancel
            </button>
            <button 
              (click)="rejectLoan()"
              class="px-3 py-1 bg-red-500 text-white rounded">
              Confirm Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoanRequestsComponent implements OnInit {
  loans: PageResponse<LoanRequest> | null = null;
  currentPage = 0;
  pageSize = 10;
  officerId = 1; // This should come from authentication
  showRejectionDialog = false;
  rejectionMessage = '';
  selectedLoanId: number | null = null;

  constructor(private loanOfficerService: LoanOfficerService) {}

  ngOnInit() {
    this.loadLoanRequests();
  }

  loadLoanRequests() {
    this.loanOfficerService.viewLoanRequests(this.officerId, this.currentPage, this.pageSize)
      .subscribe(response => {
        this.loans = response;
      });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadLoanRequests();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'APPROVED': return 'text-green-600';
      case 'REJECTED': return 'text-red-600';
      case 'PENDING': return 'text-yellow-600';
      default: return '';
    }
  }

  approveLoan(loanId: number) {
    this.loanOfficerService.approveLoan(loanId, this.officerId)
      .subscribe(() => {
        this.loadLoanRequests();
      });
  }

  showRejectDialog(loanId: number) {
    this.selectedLoanId = loanId;
    this.showRejectionDialog = true;
  }

  cancelReject() {
    this.showRejectionDialog = false;
    this.rejectionMessage = '';
    this.selectedLoanId = null;
  }

  rejectLoan() {
    if (this.selectedLoanId && this.rejectionMessage) {
      this.loanOfficerService.rejectLoan(this.rejectionMessage, this.selectedLoanId, this.officerId)
        .subscribe(() => {
          this.cancelReject();
          this.loadLoanRequests();
        });
    }
  }
}