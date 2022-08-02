export enum PaymentType {
  Card = 'CARD',
  Cash = 'CASH',
  Pix = 'PIX',
}

export enum PaymentStatus {
  Waiting = 'WAITING',
  Paid = 'PAID',
  Delayed = 'DELAYED',
}

export interface PaymentsDto {
  status: PaymentStatus;
  type: PaymentType;
}
