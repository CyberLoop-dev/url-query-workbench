<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:f59e0b&height=180&section=header&text=url-query-workbench&fontSize=42&fontColor=ffffff&animation=fadeIn" alt="URL Query Workbench banner" width="100%"/>

<a href="https://github.com/CyberLoop-dev/url-query-workbench">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1100&color=f59e0b&center=true&vCenter=true&width=720&lines=URL%20Query%20Workbench;Small+tools.+Clear+feedback.+Local+first." alt="Typing title"/>
</a>

<p><strong>Edit URL query parameters locally while preserving repeated keys and empty values.</strong></p>

[![License](https://img.shields.io/github/license/CyberLoop-dev/url-query-workbench)](LICENSE)
[![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/url-query-workbench)](https://github.com/CyberLoop-dev/url-query-workbench)
[![Stars](https://img.shields.io/github/stars/CyberLoop-dev/url-query-workbench?style=flat)](https://github.com/CyberLoop-dev/url-query-workbench/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/url-query-workbench)](https://github.com/CyberLoop-dev/url-query-workbench/commits/main)

<img src="assets/overview.svg" alt="URL Query Workbench project illustration" width="100%"/>

</div>

## ✨ Overview

Edit URL query parameters locally while preserving repeated keys and empty values. **URL Query Workbench** is a small, focused Node.js and browser JavaScript project. It runs locally, keeps user data in the browser, and is designed to be easy to inspect and extend.

## 🚀 Features

- ✨ 🔎 Parse an absolute URL into editable query rows.
- ✨ ➕ Add, remove, and rebuild query parameters.
- ✨ 🔁 Preserve repeated keys and empty values.
- ✨ 📋 Copy the rebuilt URL when browser clipboard access is available.

## 🖥️ Demo

Run `npm start`, open `http://127.0.0.1:4173`, and use the controls in the page. The sample URL includes repeated `tag` parameters and an empty value; edit the rows and build it again.

## ⚡ Quick Start

```bash
npm start
```

No third-party npm packages are required.

## 🧰 Tech Stack

- **Runtime:** Node.js (built-in HTTP server)
- **Frontend:** HTML, CSS, browser JavaScript
- **Dependencies:** None

## 📁 Folder Structure

```text
url-query-workbench/
├── assets/overview.svg
├── public/index.html
├── server.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🗺️ Roadmap

- [ ] Add drag-and-drop parameter ordering.
- [ ] Add percent-encoding inspection for individual values.

## 🤝 Contributing

Issues and pull requests are welcome. Keep changes focused, explain behavior changes, and include reproducible steps for reported bugs.

## 📄 License

Released under the [MIT License](LICENSE).

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:f59e0b,100:0f172a&height=110&section=footer" alt="Animated wave footer" width="100%"/>
</div>
