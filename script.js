// Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;
let isPaused = false;
let lapCount = 0;

// Get elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

// Start/Stop function
function startStop() {
    if (!isRunning) {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
        isPaused = false;
        
        // Update buttons
        startBtn.textContent = 'Stop';
        startBtn.className = 'reset-btn';
        pauseBtn.disabled = false;
        lapBtn.disabled = false;
    } else {
        // Stop the stopwatch
        clearInterval(timerInterval);
        isRunning = false;
        
        // Update buttons
        startBtn.textContent = 'Start';
        startBtn.className = 'start-btn';
        pauseBtn.disabled = true;
        lapBtn.disabled = true;
    }
}

// Pause function
function pause() {
    if (isRunning && !isPaused) {
        clearInterval(timerInterval);
        isPaused = true;
        pauseBtn.textContent = 'Resume';
        pauseBtn.className = 'start-btn';
    } else if (isPaused) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        isPaused = false;
        pauseBtn.textContent = 'Pause';
        pauseBtn.className = 'pause-btn';
    }
}

// Reset function
function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = false;
    elapsedTime = 0;
    lapCount = 0;
    
    // Reset display
    display.textContent = '00:00:00';
    
    // Reset buttons
    startBtn.textContent = 'Start';
    startBtn.className = 'start-btn';
    pauseBtn.textContent = 'Pause';
    pauseBtn.className = 'pause-btn';
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
    
    // Clear lap times
    lapList.innerHTML = '';
}

// Record lap time
function recordLap() {
    if (isRunning) {
        lapCount++;
        const lapTime = formatTime(elapsedTime);
        const lapDiv = document.createElement('div');
        lapDiv.className = 'lap-time';
        lapDiv.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapDiv);
        
        // Scroll to bottom
        lapList.scrollTop = lapList.scrollHeight;
    }
}

// Update display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

// Format time
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
}