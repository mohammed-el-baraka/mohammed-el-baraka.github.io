# Oxygen Diffusion Modeling in the Pulmonary Acinus

**Author:** Mohammed EL BARAKA  
**Discipline:** Biomedical Engineering, Numerical Methods, Fluid Mechanics  
**Completion Date:** January 2023  
**Keywords:** `Mathematical Modeling`, `Numerical Methods`, `Partial Differential Equations`, `Finite Difference`, `Python`, `SciPy`

---

## 1. Executive Summary
This biomedical engineering project models the microscopic transport and spatial-temporal diffusion of respiratory oxygen gas within the alveolar sacs of the human pulmonary acinus. By formulating and numerically resolving the 2D time-dependent diffusion-convection partial differential equations (PDEs), the simulation investigates how pathological alveolar wall thickening (e.g., in pulmonary fibrosis or ARDS) impedes capillary blood oxygen saturation.

---

## 2. Mathematical Formulation
- **Governing Equation (Fick's Second Law with Convective Term):**
  $$\frac{\partial C(x,y,t)}{\partial t} = D \left( \frac{\partial^2 C}{\partial x^2} + \frac{\partial^2 C}{\partial y^2} \right) - \mathbf{v} \cdot \nabla C - k_{\text{uptake}} C$$
  Where:
  - $C(x,y,t)$: Oxygen concentration at spatial coordinates $(x,y)$ and time $t$.
  - $D$: Oxygen gas diffusion coefficient in alveolar air and tissue membrane ($m^2/s$).
  - $\mathbf{v}$: Convective velocity vector from tidal breathing airflow.
  - $k_{\text{uptake}}$: Rate constant for hemoglobin binding across the capillary wall.

- **Boundary Conditions:**
  - Inflow boundary: Ambient respiratory oxygen fraction ($F_{i}O_2$).
  - Alveolar membrane boundary: Robin/Cauchy boundary condition modeling diffusion resistance across the blood-air barrier.

---

## 3. Numerical Discretization & Simulation
- **Numerical Scheme:** 2D Crank-Nicolson & ADI (Alternating Direction Implicit) finite difference methods implemented in Python for unconditional numerical stability.
- **Grid Mesh:** Non-uniform spatial mesh refining near the alveolar capillary interface.
- **Visualization:** Dynamic time-step 2D contour animations rendered using `Matplotlib` and `SciPy`.

---

## 4. Findings & Clinical Insights
- Demonstrated non-linear drops in capillary oxygen saturation as alveolar membrane thickness increases beyond threshold physiological limits.
- Evaluated optimal tidal breathing frequencies that maximize alveolar partial pressure under constrained lung compliance.

---

## 5. Tools & Stack
- **Stack:** Python 3, NumPy, SciPy, Matplotlib, LaTeX.
