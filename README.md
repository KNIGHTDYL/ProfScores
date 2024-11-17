# ProfScores Chrome Extension

<img src="https://github.com/user-attachments/assets/daae769b-1c7a-4e60-a638-5a7438aa84a3" width="300" />

A Chrome extension that lets you quickly look up professor ratings from RateMyProfessor.com. Simply enter a professor's name and university to see their ratings, difficulty scores, and more.

---

## Prerequisites

- Python 3.x
- Google Chrome Browser
- pip (Python package installer)

---

## Installation

1. **Clone or download this repository**

2. **Set up Python environment and dependencies**
   
   Run using a virtual environment:
   ```bash
   source virtualenv/bin/activate
   ```
   Or install required Python packages locally:
   ```bash
   pip install flask flask-cors RateMyProfessorAPI
   ```

3. **Load the Chrome Extension**
   - Open Google Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the directory containing the extension files

---

## Usage

1. **Start the local server**
   ```bash
   python rmp.py
   ```
   Keep this running while using the extension.

2. **Use the Extension**
   - Click the ProfScores extension icon in Chrome
   - Enter the professor's first name
   - Enter the professor's last name
   - Enter the university name
   - Click "Search Professor"

---

## Demo

Watch the demo video to see ProfScores in action:

https://github.com/user-attachments/assets/d8095bb0-1c0a-47be-8c6c-f6c14565a5ea

---

## Project Structure

```
profscores/
├── default.html      # Extension popup interface
├── manifest.json     # Extension manifest file
├── popup.js          # Frontend JavaScript
└── rmp.py            # Backend Flask server
```

---

## Troubleshooting

- **No Results Showing**: Make sure the Flask server (`rmp.py`) is running.
- **Connection Error**: Verify that the server is running on port 5000.
- **Professor Not Found**: Double-check the spelling of both the professor's name and university.
- **Extension Not Loading**: Ensure all files are in the correct directory and the extension is loaded in Chrome.
- **Package Not Found**: If you get import errors, ensure you've installed the correct package using:
  ```bash
  pip install RateMyProfessorAPI
  ```

---

## Note

This is a Minimum Viable Product (MVP) created for educational purposes. The extension requires a local server running to function. It uses the unofficial RateMyProfessorAPI package to fetch data.

---

## Credits

- [RateMyProfessorAPI](https://pypi.org/project/RateMyProfessorAPI/) - Python package for accessing RateMyProfessor data

---

## Contributing

Feel free to fork this repository and submit pull requests with any improvements!

---

## License

This project is for educational purposes only. All data is sourced from RateMyProfessor.com.
