# Procurement KPI Dashboard Application Specification

## Overview
A multi-tenant, customizable procurement KPI dashboard built with Angular, supporting multiple companies with their own KPIs, visualizations, and configurations. The app should be modular, component-based, and capable of dynamic rendering based on tenant-specific schemas.

## Core Requirements

### 1. Architecture
- Use Angular framework (latest version preferred)
- Modular, component-based design
- Dynamic widget rendering based on tenant configuration
- Support for multi-tenancy (each company has its own dashboard schema and data sources)
- Role-based access control (admin, manager, user)

### 2. Features
- **Tenant Management**
  - Multiple companies (tenants) with separated schemas/configurations
  - Tenant-specific KPI data sources and layout
- **Dashboard Layout**
  - Drag-and-drop or configurable grid layout for widgets (optional for advanced stage)
  - Save and load dashboard layouts for each tenant
- **KPI Widgets**
  - Reusable widget components (charts, gauges, tables, numbers)
  - Configurable per tenant (via JSON or a form UI for admins)
  - Data fetching from backend APIs or formulas
- **Custom KPI Creation**
  - UI for admins to create new KPIs (define data source, formula, visualization)
  - Support for uploading custom KPI JSON schemas
  - Future agent-based KPI suggestions (stage 2)
- **Visualization Types**
  - Line charts, bar charts, gauges, tables, KPI cards
  - Use Angular-compatible libraries (e.g., Chart.js, D3, ng2-charts)
- **Authentication & Authorization**
  - Role-based access
  - Tenant separation (via subdomains or URL params)
- **Responsive UI**
  - Mobile-friendly layout

### 3. Technical Details
- Use Angular CLI for project setup
- Use state management (RxJS, NgRx, or similar) for shared data
- Use environment-based API endpoints for multi-tenant data
- Support lazy loading for modules for performance
- Use a JSON schema for dashboard configurations (UI to edit/add KPIs)

### 4. Data & API
- REST API endpoints to serve dashboard config and KPI data
- Support for custom formulas/calculations
- Future support for agents or AI-based KPI suggestions

### 5. Additional considerations
- Version control with Git
- Good code documentation
- Clear separation of concerns
- Extensible design for future features (agent integration, advanced customization)

## Example Component Diagram
- **DashboardContainerComponent**
  - Loads dashboard schema
  - Renders dashboard layout
- **KpiWidgetComponent**
  - Renders individual KPIs based on type and config
- **ConfigEditorComponent** (admin-only)
  - UI for creating/updating KPI schemas
- **TenantService**
  - Manages tenant info and configurations
- **ApiService**
  - Fetches KPI data and schemas

---

**Deliverables**
- Angular project setup with core modules
- Example dashboard with dummy KPIs
- Configurable layout/dashboard schema structure
- Placeholder API integrations for data

---

*Note:* Future iterations can add agents for auto-generating KPI configs or natural language KPI descriptions.

---

Feel free to customize this document further before sharing it with Copilot or your dev team!
