

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

  procurementData = [
    {
      date: '2025-11-01',
      prNumber: 'PR-1001',
      documentNumber: 'DOC-2001',
      vendor: 'Acme Corp',
      status: 'Open',
      approvalStatus: 'Pending',
      amount: 12000,
      poCreator: 'Alice',
      requester: 'Bob',
      buyer: 'Charlie',
      country: 'USA',
      department: 'IT',
      category: 'Hardware',
      budgetOwner: 'Diana'
    },
    {
      date: '2025-11-05',
      prNumber: 'PR-1002',
      documentNumber: 'DOC-2002',
      vendor: 'Globex',
      status: 'Closed',
      approvalStatus: 'Approved',
      amount: 8000,
      poCreator: 'Eve',
      requester: 'Frank',
      buyer: 'Grace',
      country: 'UK',
      department: 'Finance',
      category: 'Software',
      budgetOwner: 'Heidi'
    },
    {
      date: '2025-11-10',
      prNumber: 'PR-1003',
      documentNumber: 'DOC-2003',
      vendor: 'Initech',
      status: 'Open',
      approvalStatus: 'Rejected',
      amount: 5000,
      poCreator: 'Ivan',
      requester: 'Judy',
      buyer: 'Mallory',
      country: 'Germany',
      department: 'HR',
      category: 'Services',
      budgetOwner: 'Niaj'
    }
  ];

  ngAfterViewInit(): void {
    this.renderChart();
  }

  async renderChart() {
    // Dynamically import Chart.js
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
            backgroundColor: [
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 206, 86, 0.7)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)'
            ],
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
}
