# Autonomous Robotic Manipulator with Computer Vision & Object Tracking

**Author:** Mohammed EL BARAKA  
**Discipline:** Robotics, Mechanical Design, Computer Vision, Embedded Systems  
**Completion Date:** June 2022  
**Keywords:** `Robotics`, `Python`, `Image Detection`, `OpenCV`, `SolidWorks`, `Inverse Kinematics`, `PID Control`

---

## 1. Executive Summary
An end-to-end multi-axis robotic manipulator engineering project combining mechanical CAD modeling, physical kinematic assembly, embedded motor actuators, and real-time computer vision object detection and tracking. The system detects colored target objects in dynamic camera feeds, computes 3D Cartesian coordinates, solves inverse kinematics equations, and guides the robotic end-effector to grasp and sort targets autonomously.

---

## 2. Mechanical Design & Kinematics (SolidWorks)
- **CAD Assembly:** Modeled all linkages, motor mounts, gears, and end-effector grippers in SolidWorks with stress analysis (FEA) to ensure structural rigidity.
- **Kinematic Modeling:**
  - Forward Kinematics formulated using Denavit-Hartenberg (D-H) parameter matrices.
  - Analytical and geometric Inverse Kinematics (IK) algorithms implemented to translate $(X, Y, Z)$ spatial coordinates into precise servo joint angles $(\theta_1, \theta_2, \theta_3, \theta_4)$.

---

## 3. Computer Vision Pipeline (OpenCV & Python)
- **Camera Calibration:** Intrinsic matrix estimation and distortion correction.
- **Real-Time Detection:**
  - Color space conversion (RGB to HSV) with adaptive thresholding.
  - Morphological transformations (erosion and dilation) for noise filtering.
  - Contour extraction, centroid detection $(c_x, c_y)$, and bounding box localization.
- **Visual Servoing:** Closed-loop feedback comparing end-effector position with object coordinates using PID control loops to achieve sub-millimeter precision.

---

## 4. Key Performance Metrics
- **Object Detection Latency:** Real-time processing at **30+ FPS** on standard HD video feed.
- **Grasp Success Rate:** **94.5%** autonomous pick-and-place success rate across varying lighting conditions and object orientations.

---

## 5. Tools & Technologies
- **Stack:** Python 3, OpenCV, SolidWorks (CAD), Arduino/Microcontroller C/C++, Serial Communication, PID Algorithms.
