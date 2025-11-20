

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('donutChartCanvas', { static: false }) donutChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('dotChartCanvas', { static: false }) dotChartCanvas!: ElementRef<HTMLCanvasElement>;

  procurementData = [
    { date: '2025-11-01', prNumber: 'PR-1001', documentNumber: 'DOC-2001', vendor: 'Acme Corp', status: 'Open', approvalStatus: 'Pending', amount: 12000, poCreator: 'Alice', requester: 'Bob', buyer: 'Charlie', country: 'USA', department: 'IT', category: 'Hardware', budgetOwner: 'Diana' },
    { date: '2025-11-05', prNumber: 'PR-1002', documentNumber: 'DOC-2002', vendor: 'Globex', status: 'Closed', approvalStatus: 'Approved', amount: 8000, poCreator: 'Eve', requester: 'Frank', buyer: 'Grace', country: 'UK', department: 'Finance', category: 'Software', budgetOwner: 'Heidi' },
    { date: '2025-11-10', prNumber: 'PR-1003', documentNumber: 'DOC-2003', vendor: 'Initech', status: 'Open', approvalStatus: 'Rejected', amount: 5000, poCreator: 'Ivan', requester: 'Judy', buyer: 'Mallory', country: 'Germany', department: 'HR', category: 'Services', budgetOwner: 'Niaj' },
    { date: '2025-11-12', prNumber: 'PR-1004', documentNumber: 'DOC-2004', vendor: 'Acme Corp', status: 'Closed', approvalStatus: 'Approved', amount: 15000, poCreator: 'Alice', requester: 'Bob', buyer: 'Charlie', country: 'USA', department: 'IT', category: 'Hardware', budgetOwner: 'Diana' },
    { date: '2025-11-13', prNumber: 'PR-1005', documentNumber: 'DOC-2005', vendor: 'Globex', status: 'Closed', approvalStatus: 'Approved', amount: 9500, poCreator: 'Eve', requester: 'Frank', buyer: 'Grace', country: 'UK', department: 'Finance', category: 'Software', budgetOwner: 'Heidi' },
    { date: '2025-11-14', prNumber: 'PR-1006', documentNumber: 'DOC-2006', vendor: 'Initech', status: 'Open', approvalStatus: 'Pending', amount: 7000, poCreator: 'Ivan', requester: 'Judy', buyer: 'Mallory', country: 'Germany', department: 'HR', category: 'Services', budgetOwner: 'Niaj' },
    { date: '2025-11-15', prNumber: 'PR-1007', documentNumber: 'DOC-2007', vendor: 'Acme Corp', status: 'Closed', approvalStatus: 'Approved', amount: 11000, poCreator: 'Alice', requester: 'Bob', buyer: 'Charlie', country: 'USA', department: 'IT', category: 'Hardware', budgetOwner: 'Diana' },
    { date: '2025-11-16', prNumber: 'PR-1008', documentNumber: 'DOC-2008', vendor: 'Globex', status: 'Open', approvalStatus: 'Pending', amount: 12000, poCreator: 'Eve', requester: 'Frank', buyer: 'Grace', country: 'UK', department: 'Finance', category: 'Software', budgetOwner: 'Heidi' },
    { date: '2025-11-17', prNumber: 'PR-1009', documentNumber: 'DOC-2009', vendor: 'Initech', status: 'Closed', approvalStatus: 'Approved', amount: 8000, poCreator: 'Ivan', requester: 'Judy', buyer: 'Mallory', country: 'Germany', department: 'HR', category: 'Services', budgetOwner: 'Niaj' },
    { date: '2025-11-18', prNumber: 'PR-1010', documentNumber: 'DOC-2010', vendor: 'Acme Corp', status: 'Closed', approvalStatus: 'Approved', amount: 13000, poCreator: 'Alice', requester: 'Bob', buyer: 'Charlie', country: 'USA', department: 'IT', category: 'Hardware', budgetOwner: 'Diana' },
    { date: '2025-11-19', prNumber: 'PR-1011', documentNumber: 'DOC-2011', vendor: 'Globex', status: 'Closed', approvalStatus: 'Approved', amount: 10500, poCreator: 'Eve', requester: 'Frank', buyer: 'Grace', country: 'UK', department: 'Finance', category: 'Software', budgetOwner: 'Heidi' },
    { date: '2025-11-20', prNumber: 'PR-1012', documentNumber: 'DOC-2012', vendor: 'Initech', status: 'Open', approvalStatus: 'Pending', amount: 9000, poCreator: 'Ivan', requester: 'Judy', buyer: 'Mallory', country: 'Germany', department: 'HR', category: 'Services', budgetOwner: 'Niaj' }
  ];

  ngAfterViewInit(): void {
    this.renderBarChart();
    this.renderDonutChart();
    this.renderDotChart();
  }

  get totalExpenses(): number {
    // Hardcoded for dashboard display as requested
    return 120_000_000;
  }

  get totalSavings(): number {
    // Hardcoded for dashboard display as requested
    return 26_000_000;
  }

  get savingsByBuyer(): { [buyer: string]: number } {
    const result: { [buyer: string]: number } = {};
    for (const row of this.procurementData) {
      if (row.status === 'Closed') {
        result[row.buyer] = (result[row.buyer] || 0) + row.amount * 0.1;
      }
    }
    return result;
  }

  buyerColors: { [buyer: string]: string } = {
    'Charlie': 'rgba(54, 162, 235, 0.7)',
    'Grace': 'rgba(255, 99, 132, 0.7)',
    'Mallory': 'rgba(255, 206, 86, 0.7)'
  };

  async renderBarChart() {
    const Chart = (await import('chart.js/auto')).default;
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.procurementData.map(d => d.vendor),
        datasets: [
          {
            label: 'Amount (USD)',
            data: this.procurementData.map(d => d.amount),
            backgroundColor: this.procurementData.map(d => this.buyerColors[d.buyer] || 'rgba(100,100,100,0.5)'),
            borderColor: this.procurementData.map(d => this.buyerColors[d.buyer]?.replace('0.7', '1') || 'rgba(100,100,100,1)'),
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Procurement Amount by Vendor' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  async renderDonutChart() {
    const Chart = (await import('chart.js/auto')).default;
    const ctx = this.donutChartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Savings', 'Expenses'],
        datasets: [
          {
            label: 'Savings vs Expenses',
            data: [this.totalSavings, this.totalExpenses - this.totalSavings],
            backgroundColor: ['#4caf50', '#e0e0e0'],
            borderColor: ['#388e3c', '#bdbdbd'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Savings vs Total Expenses' }
        }
      }
    });
  }

  async renderDotChart() {
    const Chart = (await import('chart.js/auto')).default;
    const ctx = this.dotChartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;
    const buyers = Object.keys(this.savingsByBuyer);
    const data = buyers.map(buyer => ({
      x: buyer,
      y: this.savingsByBuyer[buyer],
      backgroundColor: this.buyerColors[buyer] || 'rgba(100,100,100,0.5)'
    }));
    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Savings by Buyer',
            data: buyers.map(buyer => ({ x: buyers.indexOf(buyer), y: this.savingsByBuyer[buyer] })),
            backgroundColor: buyers.map(buyer => this.buyerColors[buyer] || 'rgba(100,100,100,0.5)'),
            pointRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Savings by Buyer (Dot Chart)' },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const buyer = buyers[context.dataIndex];
                return `${buyer}: $${context.parsed.y.toFixed(2)}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: 'category',
            labels: buyers,
            title: { display: true, text: 'Buyer' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Savings (USD)' }
          }
        }
      }
    });
  }
}
