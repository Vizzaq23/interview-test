# interview-test
# Sentari Coding Challenge – Interview Test

## Overview

This project is a solution to the Sentari internship coding challenge. The goal was to implement a function, `processEntries()`, that analyzes diary-like voice entries and detects whether they express **goals**, **desires**, or **intentions**.

The solution is written in **TypeScript** and includes unit tests to validate behavior.

---

## Functionality

### `processEntries(entries: VoiceEntry[]): VoiceEntry[]`

This function takes in an array of diary entries and returns a modified version where entries are tagged (in the `tags_user` field) if they express:

- A **goal** (e.g., “I want to finish my degree”)
- A **desire** (e.g., “I wish I could travel more”)
- An **intention** (e.g., “I'm going to start running tomorrow”)

Keywords and phrasing patterns are used to detect these statements.

---

## Tech Stack

- TypeScript
- Node.js
- `ts-node` for running TypeScript directly
- Basic file I/O for loading mock data
- Manual keyword-based tagging logic

---

## How to Run Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Vizzaq23/interview-test.git
   cd interview-test
