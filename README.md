# Payoo MFS

> A lightweight, modern Mobile Financial Service (MFS) demo application — showcasing transaction flows, balance management, contacts, and bill payments.

---

## Live Demo

* Live Website: [https://arman685913.github.io/Payoo-MFS/](https://arman685913.github.io/Payoo-MFS/)
* GitHub Repository: [https://github.com/arman685913/Payoo-MFS.git](https://github.com/arman685913/Payoo-MFS.git)

---

## Project Overview

Payoo MFS is a frontend-only prototype designed to simulate the user interface and experience of a mobile financial service application. It demonstrates essential features like login, balance overview, transaction history, contacts, and bill payments — all built using HTML, CSS (Tailwind), and JavaScript.

* Purpose: To showcase MFS UI/UX patterns and interactions.
* Target Audience: Developers, students, and fintech enthusiasts.
* State Management: Utilizes `localStorage` for session persistence.

---

## Key Features

* Secure Login: Simulated 4-digit PIN authentication.
* Balance Overview: Displays current balance and recent transactions.
* Contacts: Manage and view contact list.
* Bill Payments: Simulate utility and service bill payments.
* Modern UI: Clean and user-friendly interface using TailwindCSS.

---

## Technologies Used

* HTML5 — Semantic and accessible markup.
* TailwindCSS — Utility-first CSS framework for rapid styling.
* JavaScript (Vanilla) — For interactivity and DOM manipulation.
* localStorage — For session management and data persistence.

---

## File Structure

```
/Payoo-MFS/
├── index.html             # Main entry point
├── main.html              # Dashboard and transaction views
├── main.js                # JavaScript logic
├── tailwind.config.js     # TailwindCSS configuration
├── README.md              # Project documentation
└── LICENSE                # Project license
```

---

## Installation (Run Locally)

1. Clone the repository:

```bash
git clone https://github.com/arman685913/Payoo-MFS.git
cd Payoo-MFS
```

2. Open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000
# Visit: http://localhost:8000
```

---

## Example Code Snippet

Simulate login with a 4-digit PIN:

```html
<input type="password" id="pin" maxlength="4" placeholder="Enter PIN">
<button onclick="validatePin()">Login</button>

<script>
  function validatePin() {
    const pin = document.getElementById('pin').value;
    if (pin === '1234') {
      alert('Login successful');
      // Redirect to dashboard
    } else {
      alert('Invalid PIN');
    }
  }
</script>
```

---

## How to Deploy to GitHub Pages

1. Push your changes to the `main` branch.
2. Go to Settings → Pages in your GitHub repository.
3. Under Build and Deployment, select:

   * Source: `main` branch
   * Folder: `/ (root)`
4. Save the settings and wait for the deployment to complete.
5. Access your live site at: [https://arman685913.github.io/Payoo-MFS/](https://arman685913.github.io/Payoo-MFS/)

---

## Contribution

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

---

## License

This project is free source

---

## Author

Created by: Arman
GitHub: [@arman685913](https://github.com/arman685913)
