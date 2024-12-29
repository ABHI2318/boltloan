// Enums
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum LoanStatus {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING'
}

// Interfaces
export interface LoanOfficer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  pancardNumber: string;
  dob: Date;
  contactNumber: number;
  gender: Gender;
  deleted: boolean;
}

export interface LoanRequest {
  loanid: number;
  user_id: number;
  loanscheme_id: number;
  loanOfficeId: number;
  totalRepayAmount: number;
  loanamount: number;
  time: number;
  loanstatus: LoanStatus;
  closed: boolean;
  simpleInterest: number;
  monthlyRepayment: number;
}

export interface PageResponse<T> {
  totalElements: number;
  totalPages: number;
  pageSize: number;
  contents: T[];
  isLastPage: boolean;
}

export interface RejectionRemark {
  rejectionId: number;
  message: string;
  loanId: number;
  officerId: number;
}

export interface Enquiry {
  enquiryId: number;
  question: string;
  response: string;
  status: string;
}