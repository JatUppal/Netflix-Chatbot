<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# NETFLIX-CHATBOT

<em>Transform Conversations Into Seamless Entertainment Discovery</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/JatUppal/Netflix-Chatbot?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/JatUppal/Netflix-Chatbot?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/JatUppal/Netflix-Chatbot?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
<br>
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/LangChain-1C3C3C.svg?style=flat&logo=LangChain&logoColor=white" alt="LangChain">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)

---

## Overview



---

## Project Structure

```sh
└── Netflix-Chatbot/
    ├── README.md
    ├── ingest.js
    ├── netflix-info.txt
    ├── netflix_titles.csv
    ├── package-lock.json
    ├── package.json
    ├── scrimba-info.txt
    ├── scripts
    │   └── build-netflix-knowledge.mjs
    └── server.js
```

---

### Project Index

<details open>
	<summary><b><code>NETFLIX-CHATBOT/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/ingest.js'>ingest.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates the ingestion and indexing of textual data into a vector database for efficient retrieval<br>- It processes a text file, splits it into manageable chunks, generates embeddings using OpenAI models, and stores them in a Supabase-backed vector store<br>- This setup enables semantic search and retrieval within the larger application architecture, supporting intelligent querying and data access.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the core entry point and operational scripts for the Scrimba LangChain project, orchestrating the integration of language models, data ingestion, and server setup<br>- It manages dependencies and workflows essential for building a scalable, AI-powered application that leverages language processing, data sources, and web services within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the Netflix-Chatbot project, outlining its core functionality to facilitate user interactions with Netflix content<br>- It highlights how the chatbot integrates with the overall architecture to deliver seamless conversational experiences, enabling users to search, browse, and manage their viewing preferences efficiently within the platform.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/netflix-info.txt'>netflix-info.txt</a></b></td>
					<td style='padding: 8px;'>- The code file serves as a core component within a media cataloging system, responsible for managing and organizing detailed information about various entertainment titles<br>- It facilitates the structured storage and retrieval of metadata such as titles, types, release years, genres, countries, cast, and descriptions, thereby enabling efficient access and presentation of media content across the application<br>- This component underpins the overall architecture by ensuring consistent data handling for diverse media formats, supporting features like search, filtering, and display within the broader media management platform.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/scrimba-info.txt'>scrimba-info.txt</a></b></td>
					<td style='padding: 8px;'>- This code file serves as a comprehensive FAQ resource that clarifies the platforms core offerings and learning approach<br>- It highlights the platforms focus on project-based, real-world learning through interactive scrims, covering pathways in Frontend Development and AI Engineering<br>- The FAQ emphasizes the self-paced, on-demand course structure complemented by community support via Discord, positioning the platform as an accessible and engaging environment for learners to acquire practical skills across modern web and AI technologies.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/server.js'>server.js</a></b></td>
					<td style='padding: 8px;'>- Implements a server that facilitates a conversational Netflix catalog assistant by integrating language models, vector retrieval, and prompt engineering<br>- It processes user questions, retrieves relevant dataset snippets, and generates accurate, context-aware responses, ensuring helpful and concise interactions<br>- The setup supports seamless API communication and static content delivery within the overall application architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- scripts Submodule -->
	<details>
		<summary><b>scripts</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ scripts</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/JatUppal/Netflix-Chatbot/blob/master/scripts/build-netflix-knowledge.mjs'>build-netflix-knowledge.mjs</a></b></td>
					<td style='padding: 8px;'>- Transforms raw Netflix titles data from CSV into a human-readable, structured text format for easier review and analysis<br>- Facilitates data presentation by extracting key attributes such as title, genre, release year, and description, consolidating information into a comprehensive text file<br>- Supports data exploration and documentation within the broader data processing and content cataloging architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build Netflix-Chatbot from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/JatUppal/Netflix-Chatbot
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Netflix-Chatbot
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Netflix-chatbot uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
