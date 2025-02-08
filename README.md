# TartanHacks Donation Tracker Proof-of-Concept

[https://lukeacampbell.github.io/tartanhacks/](https://lukeacampbell.github.io/tartanhacks/)

This project is a proof-of-concept donation tracking system built for TartanHacks. It uses the XRP Ledger to transparently display donation transactions for charities. In its final version, the system will show every transaction along with an explanation of what the money was spent on. Future implementations may also include functionality for paying for specific projects within the charity and voting for how your XRP is spent.

## Overview

The project demonstrates the following key features:
- **Dynamic Charity Data:**  
  Charity details (name, description, image, XRP address, donation link, and destination tag) are stored in an external JSON file (`charities.json`) and loaded dynamically into the web page.
  
- **Donation QR Code Generation:**  
  Donors can enter an XRP donation amount and an optional memo. A QR code is then generated using the charity’s mainnet XRP address (and its destination tag), enabling quick and secure donations.

- **Transaction History:**  
  The system fetches up to 10,000 transactions from the XRP mainnet for the charity’s wallet. It automatically filters these transactions to display only those that have the correct destination tag (ensuring that only relevant transactions are shown).

- **Sorting:**  
  The filtered transactions are sorted by timestamp (most recent first) so that the latest transactions appear at the top.

## Technologies Used

- **HTML, CSS, JavaScript:** Frontend technologies.
- **XRPL.js:** For interacting with the XRP Ledger.
- **QRCode.js:** For generating QR codes.
- **Fetch API:** To load charity data from `charities.json`.

## How to Run

1. **Clone the Repository** (if using version control) or place the files in a single directory:
