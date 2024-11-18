import { Component, computed, inject } from '@angular/core';

import { InvestementService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestementService);

  results = computed(() => this.investmentService.resultData());
}
