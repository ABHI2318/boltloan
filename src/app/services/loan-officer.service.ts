import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../models/api.config';
import { 
  LoanRequest, 
  PageResponse, 
  RejectionRemark,
  Enquiry,
  LoanOfficer 
} from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class LoanOfficerService {
  private baseUrl = `${API_CONFIG.baseUrl}/loanapp`;

  constructor(private http: HttpClient) {}

  viewLoanRequests(officerId: number, pageNumber: number, pageSize: number): Observable<PageResponse<LoanRequest>> {
    return this.http.get<PageResponse<LoanRequest>>(
      `${this.baseUrl}/${officerId}/loanrequests?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  approveLoan(loanId: number, officerId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/approveloan`, { loanId, officerId });
  }

  rejectLoan(message: string, loanId: number, officerId: number): Observable<RejectionRemark> {
    return this.http.post<RejectionRemark>(`${this.baseUrl}/rejectloan`, {
      message,
      loanId,
      officerId
    });
  }

  replyToEnquiry(enquiryId: number, response: string): Observable<Enquiry> {
    return this.http.post<Enquiry>(`${this.baseUrl}/replyenquiry`, {
      enquiryId,
      response
    });
  }

  updateProfile(officerId: number, profileData: Partial<LoanOfficer>): Observable<LoanOfficer> {
    return this.http.put<LoanOfficer>(`${this.baseUrl}/${officerId}/profile`, profileData);
  }
}