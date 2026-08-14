# Bank Statement Integration & Financial Intelligence with Power BI

**Author:** Mohammed EL BARAKA  
**Discipline:** Business Intelligence, Data Engineering, Financial Analytics  
**Completion Date:** November 2023  
**Keywords:** `Power BI`, `Excel`, `DAX`, `Power Query`, `VBA`, `Financial Modeling`, `ETL Pipelines`

---

## 1. Executive Summary
Designed and deployed an automated enterprise business intelligence pipeline and interactive Power BI executive dashboard. The solution consolidates raw multi-bank statement feeds, supplier delivery notes, and internal invoice logs into a unified, real-time financial tracking platform, replacing error-prone manual spreadsheets with automated reconciliation and KPI visualizations.

---

## 2. Business Challenge
- **Disconnected Data Sources:** Financial transactions were dispersed across disparate bank export formats (.csv, .xlsx, .pdf), procurement receipts, and manual accounting entries.
- **Delayed Cash-Flow Visibility:** Manual reconciliation created a 2-to-3 week lag in executive financial reporting.
- **Reconciliation Discrepancies:** Unmatched entries between bank deposits and delivery note invoices led to audit friction.

---

## 3. Architecture & Technical Implementation
- **ETL & Data Pipeline (Power Query & VBA):**
  - Built robust Power Query M-scripts and VBA macros to automatically clean, unpivot, and standardize heterogeneous bank feeds.
  - Automated currency conversion and transaction categorization (operating expenses, capital expenses, revenues, supplier dues).
- **Data Modeling & Star Schema:**
  - Designed a high-performance star schema connecting Transaction Fact tables with Date, Vendor, Account, and Category Dimension tables.
- **Advanced DAX Metrics:**
  - Formulated complex DAX measures: Rolling 30-Day Liquidity, Year-Over-Year Cash Flow Variance, Working Capital Cycles, and Automated Unreconciled Discrepancy Flags.

---

## 4. Key Results & Deliverables
- **Real-Time Visibility:** Executive dashboard updated daily with automated cash runway forecasts.
- **Reconciliation Speed:** Cut monthly financial closing and reconciliation cycle time by **75%**.
- **Audit Accuracy:** Zero unresolved discrepancies across 10,000+ line-item transactions.

---

## 5. Technologies Used
- **Stack:** Microsoft Power BI, Power Query (M Language), DAX, Microsoft Excel, VBA Macros.
