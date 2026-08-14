# Attacks Against Shared Module RSA Cryptosystems

**Author:** Mohammed EL BARAKA  
**Discipline:** Cybersecurity, Applied Cryptography, Computational Number Theory  
**Completion Date:** May 2023  
**Keywords:** `Cryptography`, `RSA Algorithm`, `Cryptanalysis`, `Number Theory`, `SageMath`, `Modular Arithmetic`, `Python`

---

## 1. Executive Summary
An in-depth cryptanalytic investigation and algorithmic simulation evaluating critical vulnerabilities arising from improper parameter selection in RSA public-key cryptosystems—specifically focusing on Common Modulus Attacks (where multiple parties share the same modulus $N$ with coprime public exponents $e_1, e_2$). The project implemented mathematical exploit algorithms to recover plaintexts without factoring $N$.

---

## 2. Mathematical Vulnerability Analysis
- **The Common Modulus Vulnerability Scenario:**
  Suppose a central authority provisions RSA keys for two entities using a shared modulus $N = p \cdot q$, but distinct public exponents $e_1$ and $e_2$ such that $\gcd(e_1, e_2) = 1$.
- If an eavesdropper intercepts two ciphertext messages:
  $$c_1 \equiv m^{e_1} \pmod N, \quad c_2 \equiv m^{e_2} \pmod N$$
- **Bézout's Identity & Extended Euclidean Algorithm:**
  Since $\gcd(e_1, e_2) = 1$, integers $u, v \in \mathbb{Z}$ exist such that:
  $$u \cdot e_1 + v \cdot e_2 = 1$$
- By computing modular inverse for any negative coefficient and combining ciphertexts:
  $$c_1^u \cdot c_2^v \equiv (m^{e_1})^u \cdot (m^{e_2})^v \equiv m^{u \cdot e_1 + v \cdot e_2} \equiv m^1 \equiv m \pmod N$$
  The original plaintext $m$ is completely decrypted in polynomial time $\mathcal{O}(\log^3 N)$ without factoring $N$.

---

## 3. Computational Implementation
- **SageMath & Python Scripts:**
  - Implemented high-precision modular exponentiation and Extended Euclidean decomposition.
  - Simulated key generation, ciphertext interception, and automated recovery pipelines.
  - Explored related attacks: Wiener's Low Private Exponent Attack and Hastad's Broadcast Attack.

---

## 4. Key Takeaways & Defensive Engineering
- Proved that sharing cryptographic moduli catastrophically undermines asymmetric encryption integrity.
- Formulated secure key provisioning guidelines for modern cryptographic deployments (independent moduli, ephemeral key pairs, recommended padding schemes like OAEP).

---

## 5. Tools & Technologies
- **Stack:** SageMath, Python 3, Cryptography primitives, LaTeX.
