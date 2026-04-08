import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  form: FormGroup;
  driverData: any = null;
  loading = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService
  ) {
    // ✅ create form
    this.form = this.fb.group({
      invoiceId: ['', Validators.required]
    });
  }

  search() {

    if (this.form.invalid) {
      this.errorMsg = 'Invoice ID is required';
      return;
    }

    const invoiceId = this.form.value.invoiceId;

    this.loading = true;
    this.errorMsg = '';
    this.driverData = null;

    this.invoiceService.getDriverFromInvoice(invoiceId)
      .subscribe({
        next: (data) => {
          this.driverData = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = 'Failed to fetch driver details';
          this.loading = false;
        }
      });
  }
}
