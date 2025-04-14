# grade-calculator
#HOSTED LINK
https://grade-calculator-three.vercel.app/
# 🎓 Student Mark Predictor

The **Student Mark Predictor** is a simple, responsive web application built using HTML, CSS, JavaScript, and Chart.js. It helps students calculate the required **external exam mark** they need to achieve their desired grade based on their internal assessment marks.

## 🔍 Features

- 🌟 Grade goal selection with predefined grade thresholds.
- 🧠 Auto-calculates the minimum required external mark to meet the goal.
- 📊 Interactive bar chart visualization using Chart.js.
- 📈 Grade scale table for easy reference.
- 🎨 Dark-themed, user-friendly interface.

## 🚀 How to Use

1. **Open the app in a browser** by launching `index.html`.
2. **Enter your internal marks** (out of 50).
3. **Select your goal grade** from the dropdown.
4. Click **"Calculate"**.
5. The app will display:
   - Required external marks.
   - Predicted total and resulting grade.
   - A visual chart of internal, external, and total scores.

If the required external mark exceeds 100, it shows that the target grade is not possible with the current internal mark.

## 📏 Grade Scale (Out of 150)

| Grade | Minimum Total Score |
|-------|---------------------|
| S     | 135+                |
| A+    | 127.5               |
| A     | 120                 |
| B+    | 112.5               |
| B     | 105                 |
| C+    | 97.5                |
| C     | 90                  |
| D     | 82.5                |
| P     | 75                  |
| Fail  | < 75                |

📌 **Note:** The minimum pass mark in the external exam is 40, and at least 35 internal marks are needed. If internal is below 35, extra external marks are required to compensate.

## 🛠️ Technologies Used

- **HTML5** – For structuring the content.
- **CSS3** – For dark-themed styling and layout.
- **JavaScript (Vanilla)** – To perform calculations and update the UI.
- **Chart.js** – To render the performance bar chart.

## 📂 File Structure
-index.html
-script.js

