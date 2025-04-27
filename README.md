# AutoBot-Electron

AutoBot-Electron is a cross-platform desktop application that lets you automate virtually any GUI task by simply typing what you want done in plain English. Under the hood, it:

- Sends your high-level prompt to OpenAI GPT-4 to generate a step-by-step plan (mouse moves, clicks, typing, hotkeys, pauses).  
- Executes those steps using PyAutoGUI to control your keyboard and mouse.  
- Provides a clean, ChatGPT-style Electron+React interface with a prompt box, a **Run Task** button, and a live action log.

## Features

- **Natural-language tasking**: “Fill out my expense report,” “Post today’s deals on Twitter,” or “Organize my downloads folder.”  
- **Live logging**: Watch each GUI action fire in real time in the built-in console.  
- **One-click packaging**: Delivered as a single Windows installer via GitHub Actions.

> **Note:** Remember to set your `OPENAI_API_KEY` environment variable before running.
