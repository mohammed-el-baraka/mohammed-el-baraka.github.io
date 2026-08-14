# Predictive Analytics for Student Mental Health

**Author:** Mohammed EL BARAKA  
**Discipline:** Data Science, Machine Learning, NLP  
**Completion Date:** June 2024  
**Keywords:** `Machine Learning`, `NLP`, `Python`, `Scikit-learn`, `NLTK`, `Classification Models`, `Feature Engineering`

---

## 1. Executive Summary
This project develops end-to-end predictive machine learning models to detect and classify anxiety, depression, and stress levels among university students. By combining structured survey questionnaires with natural language processing (NLP) on open-ended student responses, the system delivers high accuracy early-warning indicators to support proactive psychological counseling and academic well-being initiatives.

---

## 2. Problem Statement & Objectives
- **Context:** Higher education environments present significant psychological pressures leading to elevated student stress, depression, and anxiety.
- **Challenge:** Traditional psychological screenings are infrequent and resource-intensive, often detecting mental health concerns only after severe academic or personal deterioration.
- **Objectives:**
  1. Build a multi-class predictive pipeline from both numerical questionnaire metrics and unstructured text feedback.
  2. Extract meaningful linguistic and sentiment features correlating with specific psychological distress states.
  3. Validate model interpretability to provide actionable insights for counselors.

---

## 3. Mathematical & Technical Methodology
- **Data Preprocessing & NLP Pipeline:**
  - Tokenization, stop-word elimination, lemmatization, and sentiment polarity extraction using `NLTK`.
  - TF-IDF vectorization and Word2Vec embeddings for semantic feature representation.
  - SMOTE (Synthetic Minority Over-sampling Technique) to address class imbalances in distress categories.
- **Machine Learning Algorithms:**
  - **Random Forest Classifier & XGBoost:** Evaluated for non-linear feature interactions and high predictive power on tabular survey dimensions.
  - **Logistic Regression & Linear Support Vector Classifiers (SVC):** Used as baseline and interpretable linear benchmarks.
  - **Hyperparameter Optimization:** 5-fold stratified cross-validation via `GridSearchCV`.

---

## 4. Key Results & Metrics
- **Model Accuracy:** Achieved **89.4% F1-score** on multi-class classification across anxiety and depression indicators.
- **Feature Importance:** Text sentiment polarity, sleep quality variance, and academic deadline density emerged as the top 3 predictive features.
- **Impact:** Automated screening reducing potential risk assessment triage time by over 60%.

---

## 5. Tools & Stack
- **Languages & Frameworks:** Python 3, Scikit-learn, NLTK, Pandas, NumPy, Matplotlib, Seaborn.
- **Deliverables:** Academic Research Report (LaTeX) and Presentation Slides.
