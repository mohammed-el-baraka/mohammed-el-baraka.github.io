# Optimization of Red Fruit Production in Greenhouses

**Author:** Mohammed EL BARAKA  
**Discipline:** Industrial Management, Operations Research, Mathematical Optimization  
**Completion Date:** January 2024  
**Keywords:** `Linear Programming`, `Python`, `PuLP`, `Optimization Modeling`, `Resource Allocation`, `Operations Research`

---

## 1. Executive Summary
This project focuses on the mathematical modeling and optimization of agricultural red fruit production (strawberries, raspberries, blueberries) within multi-compartment smart greenhouse environments. Using Linear Programming (LP) and sensitivity analysis, the model optimizes land allocation, irrigation scheduling, labor shifts, and fertilization regimes to maximize total seasonal profit while adhering to strict resource and market demand constraints.

---

## 2. Problem Formulation & Constraints
- **Objective Function:**
  Maximize overall gross margin:
  $$\max Z = \sum_{i \in \text{Crops}} \sum_{t \in \text{Periods}} \left( P_{i,t} \cdot Y_{i,t} - C_{i,t} \cdot A_{i,t} - W_{t} \cdot L_{i,t} \right)$$
  Where $P_{i,t}$ is market price, $Y_{i,t}$ is yield, $C_{i,t}$ is cultivation cost, $A_{i,t}$ is land area allocated, $W_t$ is wage rate, and $L_{i,t}$ is labor hours required.

- **Constraints Modeled:**
  1. **Land & Compartment Capacity:** Total area used per greenhouse compartment cannot exceed physical footprint.
  2. **Water & Irrigation Limits:** Daily cubic meter water limits based on local reservoir and drip system capabilities.
  3. **Labor & Harvest Availability:** Harvest hours bounded by available seasonal workforce.
  4. **Crop Rotation & Soil Chemistry:** Agronomic minimum cycle constraints for preventing soil fatigue.
  5. **Market Contract Minimums:** Fulfilling committed quotas for export agreements.

---

## 3. Implementation & Algorithms
- **Modeling Framework:** Formulated and solved using Python with the `PuLP` optimization library and CBC/GLPK solvers.
- **Sensitivity & Shadow Price Analysis:** Evaluated dual variables (shadow prices) to determine the marginal economic value of expanding greenhouse surface versus securing extra water quotas during peak temperature periods.

---

## 4. Key Results & Tangible Impact
- **Profit Improvement:** The LP model demonstrated a **14.8% increase in net profit** compared to historical intuitive baseline allocation strategies.
- **Resource Efficiency:** Reduced peak water consumption waste by **9.2%** via optimized harvest staggering.
- **Scenario Simulation:** Delivered interactive scenario simulation capabilities for decision-makers under volatile market prices.

---

## 5. Technologies Used
- **Stack:** Python, PuLP, Pandas, NumPy, Matplotlib, LaTeX/Overleaf.
