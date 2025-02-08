# TartanHacks Donation Tracker - Proof of Concept

🔗 **Live Demo:** [TartanHacks Donation Tracker](https://lukeacampbell.github.io/tartanhacks/)

This project is a **proof-of-concept donation tracking system** built for **TartanHacks**. It leverages the **XRP Ledger** to transparently display donation transactions for charities. In its final form, the system will provide **full transparency** by showing **every donation transaction** and explaining **how the funds are used**.

Future enhancements may include:
- Allowing donors to **fund specific projects** within a charity.
- Implementing a **voting mechanism** so donors can influence how their XRP is spent.

## 🔹 Key Features

### 🔹 Transparent Donation Tracking
- The system **fetches up to 10,000 transactions** from the **XRP Ledger Mainnet**.
- It **filters** transactions based on **destination tags** to ensure only relevant donations are displayed.
- Donations are **sorted chronologically** (most recent first) for clarity.

### 🔹 QR Code-Based Donations
- Donors can **enter an amount** and an **optional memo**.
- A **QR code** is generated dynamically using the charity's **mainnet XRP address** and **destination tag**, making donations quick and secure.

### 🔹 Dynamic Charity Data
- Charity details (name, description, image, **XRP address**, **donation link**, and **destination tag**) are stored in an **external JSON file** (`charities.json`).
- The website dynamically loads and displays charity information.

## 🚀 Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Blockchain Integration:** XRPL.js (XRP Ledger API)
- **QR Code Generation:** QRCode.js
- **Data Fetching:** Fetch API (loads charity data from `charities.json`)

## 📧 Contact
For questions or contributions, feel free to reach out or submit an issue on GitHub! 🎉
