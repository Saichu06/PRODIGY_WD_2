# ⏱️ Simple Stopwatch Web Application

A clean, responsive, and easy-to-use stopwatch web application built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Start/Stop Timer** - Begin and end timing with a single button
- **Pause/Resume** - Pause the timer and resume from where you left off
- **Reset Function** - Clear the timer and start fresh
- **Lap Recording** - Record multiple lap times during timing
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Clean Interface** - Modern, user-friendly design with smooth animations

## 📁 Project Structure

```
stopwatch/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. **Download or clone** the project files
2. **Ensure all files** are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
3. **Open `index.html`** in your web browser

### Usage
1. Click **"Start"** to begin the stopwatch
2. Click **"Pause"** to pause (button changes to "Resume")
3. Click **"Lap"** while running to record lap times
4. Click **"Reset"** to clear everything and start over
5. Click **"Stop"** to end the current timing session

## 🎨 Design Features

- **Gradient Background** - Modern purple gradient design
- **Card Layout** - Clean white card with shadow effects
- **Color-coded Buttons** - Different colors for different actions
- **Monospace Display** - Easy-to-read time format (MM:SS:MS)
- **Scrollable Lap List** - View all recorded lap times
- **Hover Effects** - Interactive button animations

## 💻 Technical Details

### HTML Structure
- Semantic HTML5 elements
- Accessible button controls
- Responsive meta viewport tag

### CSS Styling
- Flexbox layout for centering
- CSS Grid for button arrangement
- Media queries for mobile responsiveness
- Smooth transitions and hover effects

### JavaScript Features
- **Timer Logic** - Accurate millisecond timing using `Date.now()`
- **Event Handling** - Click events for all buttons
- **DOM Manipulation** - Dynamic lap time creation
- **State Management** - Tracks running, paused, and stopped states

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
.start-btn { background: #4CAF50; }    /* Green */
.pause-btn { background: #ff9800; }    /* Orange */
.reset-btn { background: #f44336; }    /* Red */
.lap-btn { background: #2196F3; }      /* Blue */
```

### Modify Time Format
Edit the `formatTime()` function in `script.js`:
```javascript
// Current format: MM:SS:MS
// Change to HH:MM:SS by modifying the return statement
```

### Adjust Update Frequency
Change the interval in `script.js`:
```javascript
timerInterval = setInterval(updateDisplay, 10); // 10ms = centiseconds
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🐛 Known Issues

- Timer accuracy depends on browser performance
- May have slight delays on very slow devices
- Lap times are cleared when reset is clicked

## 🔮 Future Enhancements

- [ ] Save lap times to local storage
- [ ] Export lap times to CSV
- [ ] Dark mode toggle
- [ ] Sound notifications
- [ ] Keyboard shortcuts
- [ ] Multiple timer sessions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Contact

For questions or support, please open an issue in the project repository.

---

**Made with ❤️ using vanilla HTML, CSS, and JavaScript**
