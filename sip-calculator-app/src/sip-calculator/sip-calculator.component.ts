import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sip-calculator',
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.scss'],
  imports: [
    CommonModule, // 👈 this enables built-in pipes like 'number'
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class SipCalculatorComponent {
  monthlyInvestment = 5000;
  annualReturnRate = 12;
  investmentPeriod = 10;

  investedAmount = 0;
  estimatedReturns = 0;
  totalValue = 0;

  calculateSip() {
    const n = this.investmentPeriod * 12;
    const r = this.annualReturnRate / (12 * 100);

    this.investedAmount = this.monthlyInvestment * n;
    this.totalValue = Math.round(
      this.monthlyInvestment * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r)
    );
    this.estimatedReturns = this.totalValue - this.investedAmount;
  }
}
