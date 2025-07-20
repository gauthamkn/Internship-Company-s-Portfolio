
# 🌐 Internship Company Portfolio Website with Chatbot

A responsive, modern web portfolio for an internship/company featuring a built-in AI chatbot powered by **Ollama**, designed to engage visitors with real-time interactions.

---

## ✨ Features

- 📄 Company overview, services, team, and contact sections
- 🤖 Integrated **AI Chatbot** using Ollama (runs locally)
- 🌈 Stylish UI/UX with responsive design
- ⚡ Fast, clean frontend powered by modern web tech

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend (optional):** Node.js / Express
- **Chatbot:** Ollama (for LLM-based local chatbot)
- **Hosting:** Vercel, Netlify, or localhost

---

## 📁 File Structure

```
📦 Internship-Company-s-Portfolio
├── 📂 public
├── 📂 src
│   ├── 📂 components
│   ├── 📂 pages
│   └── 📂 chatbot
│       ├── ChatbotUI.jsx
│       └── ollama-config.js
├── 📄 package.json
├── 📄 index.html
└── 📄 README.md
```

---

## 🧠 Ollama Chatbot Setup

1. Install [Ollama](https://ollama.com) locally.
2. Choose a compatible LLM (e.g., llama2, mistral).
3. Update `ollama-config.js` with your model settings.
4. The chatbot will respond based on pre-defined or dynamic prompts.

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/gauthamkn/Internship-Company-s-Portfolio.git
cd Internship-Company-s-Portfolio

# Install dependencies
npm install

# Run the project
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio and interact with the chatbot.


---

## 🧩 Future Enhancements

- Add a backend (Node.js or Flask) for contact form submission
- Improve chatbot with memory/context awareness
- Integrate external data sources or company documents
- Add dark mode and animations

---

## 🙌 Contribute

Pull requests and issues are welcome. If you’d like to contribute, please fork the repo and submit your changes.

---

> ⚠️ **Note:** Ollama chatbot will only function on systems where Ollama is installed and configured properly.
