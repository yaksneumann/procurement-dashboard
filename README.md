

# Procurement Frontend App – Copilot Rules

That's a great initiative! Explaining procurement KPIs to a diverse audience, especially developers who appreciate clear data, requires focusing on what the numbers mean for the business.

Here's a breakdown of the KPIs, focusing on definition, calculation, and business impact.

💰 Core Spend & Savings Metrics
These metrics are the foundation of your procurement performance story.

KPI	Definition	Calculation	Business Impact
Total Spend	The aggregate amount of money the organization spent on all external goods and services within a specific period.	Sum of all payments to external suppliers.	Shows the total budget procurement influences. A high spend indicates a large opportunity for savings and efficiency.
Total Savings	The quantifiable reduction in expenditures achieved through procurement activities (negotiations, strategic sourcing, process improvements, etc.).	Sum of all Cost Reduction + Cost Avoidance efforts.	Direct measure of procurement's contribution to the company's bottom line (profit).
📈 Spend Control & Management
These metrics highlight how well procurement is controlling the spend.

Managed vs. Non-Managed Spend
Managed Spend is the total value of purchases where the Procurement team was directly involved, utilizing contracts, preferred suppliers, and sourcing best practices. Non-Managed Spend (often called "Maverick Spend") is all purchasing that occurs outside of established procurement processes (e.g., direct employee purchases without a purchase order or preferred vendor).

Calculation:

$Managed\ Spend = Total\ Purchases\ using\ P.O.s\ and\ contracts$

$Non-Managed\ Spend = Total\ Spend - Managed\ Spend$

Business Impact:

High Managed Spend indicates control, visibility, and compliance. It ensures the company gets the best negotiated prices and minimizes risk.

High Non-Managed Spend means the company is losing out on savings (paying list price instead of negotiated price) and increasing its supply chain risk.

🎯 Efficiency & Effectiveness Ratios
These ratios show how effective your savings efforts are relative to your overall budget.

% Saving Out of Total Spend
Definition: The proportion of total savings relative to the organization's entire external spending. This is the most conservative and comprehensive view of savings performance.

Calculation:

$$\frac{Total\ Savings}{Total\ Spend} \times 100$$
Business Impact: This is a clear measure of procurement's overall efficiency across the entire organization's wallet. It answers the question: "How much better are we doing at buying everything?"

% Saving Out of Managed Spend
Definition: The proportion of total savings relative only to the purchases where the Procurement team was directly involved.

Calculation:

$$\frac{Total\ Savings}{Managed\ Spend} \times 100$$
Business Impact: This is the measure of procurement's strategic effectiveness. It answers the question: "Given the areas we could control, how successful were we at generating savings?" A high percentage here validates the effectiveness of sourcing strategies and negotiation skills.

🔄 Savings By Type
It's crucial to show that not all savings directly reduce the current year's budget; some prevent higher costs in the future.

Savings Type	Definition	Example	Impact on Financial Results
Cost Reduction	A reduction in the actual unit price or cost of goods/services compared to a historical baseline (usually the previous year's price).	Negotiating a supplier's widget price from $10 to $9.	Directly reduces the Cost of Goods Sold (COGS) or Operating Expenses (OpEx), immediately increasing Net Income (Profit).
Cost Avoidance	Avoiding an anticipated or projected increase in cost. The actual spend may remain the same, but it's lower than what was expected.	A supplier announces a 5% price hike, but procurement negotiates to keep the price flat.	Protects the profit margin and operating budget from negative shocks. (Developers can think of this as preventing a regression bug).
Cost Savings	Often used as the umbrella term for all savings, but sometimes used specifically for efficiencies like process improvements that lower internal costs.	Reducing delivery costs by consolidating shipments, or automating a paper process.	Improves operational efficiency and working capital use.
🏦 Impact on Financial Results
This is how you translate procurement activities into language that leadership (and financially savvy developers) understand.

Financial Metric Impacted	Procurement Activity	Why it Matters
Net Income (Profit)	Cost Reduction efforts.	Every dollar saved through Cost Reduction flows directly to the bottom line (profit). This is the primary measure of ROI for the procurement function.
EBITDA	All Savings.	Higher EBITDA means the company is more profitable from its core operations, which is crucial for valuation (especially for investors).
Cash Flow / Working Capital	Negotiating better Payment Terms (e.g., changing from Net 30 to Net 60).	Delays when the company has to pay its bills, keeping cash in the bank longer. This is a critical measure of financial health.
Risk Management	Managed Spend and ensuring supplier contracts are in place.	Reduces exposure to supply chain disruption, legal issues, and poor quality, protecting the company's revenue stream and reputation.
Would you like me to help you define the specific formulas you can use to calculate and display the return on investment (ROI) of the procurement department itself?

## Workflow Logic

- List all contracts, highlighting those expiring or auto-renewing in the next 3 months.
- For expiring contracts, trigger renewal notifications and reminder modals with all relevant contract data.
- Allow users to take action (update, archive, email, etc) directly from the UI.
- Log all actions and status changes for traceability.

## Best Practices

- Use Typescript and Angular CLI standards.
- Apply proper accessibility (`aria-`) attributes and responsive design.
- Code should be clear, documented, and modular, leveraging Angular’s new features for maintainability and performance.

---

End of rules file.
