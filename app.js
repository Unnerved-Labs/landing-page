// Application data
const logMessages = [
    "Installing chaos.exe…",
    "Uploading memes to the cloud…",
    "Defragmenting brand guidelines…", 
    "Unskippable pre-roll buffering…",
    "Injecting serotonin into KPIs…",
    "Training interns on buzzword bingo…",
    "Optimizing synergies… forever.",
    "Calibrating engagement metrics…",
    "Downloading corporate speak…",
    "Patching reality.dll…",
    "Compiling excuses.exe…",
    "Loading unnecessary updates…",
    "Syncing with the void…",
    "Buffering your patience…",
    "Installing fake urgency…",
    "Updating terms nobody reads…",
    "Monetizing your wait time…",
    "Preprocessing procrastination…",
    "Debugging user expectations…",
    "Optimizing for disappointment…"
];

const patienceLines = [
    "Patience is the new performance metric.",
    "Loading… unlike your attention span.", 
    "Good things glitch to those who wait.",
    "Waiting is the strategy.",
    "Your time is our revenue model."
];

// Timing configuration
const timings = {
    logInterval: 1500,
    patienceInterval: 3000,
    progressDuration: 40000,
    completionDisplay: 6000
};

// Global state
let currentLogIndex = 0;
let currentPatienceIndex = 0;
let progressPercent = 0;
let isLooping = true;
let logInterval;
let patienceInterval;
let progressInterval;

// DOM elements
const logContent = document.getElementById('logContent');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const patienceLine = document.getElementById('patienceLine');
const cancelButton = document.getElementById('cancelButton');
const cancelMessage = document.getElementById('cancelMessage');
const completionPopup = document.getElementById('completionPopup');

// Initialize the application
function init() {
    console.log('System Update v2.1.337 - Initializing eternal loop...');
    startUpdateCycle();
    setupCancelButton();
    addKeyboardShortcuts();
}

// Start the main update cycle
function startUpdateCycle() {
    resetState();
    startLogScroll();
    startProgressBar();
    startPatienceLines();
}

// Reset all state for new cycle
function resetState() {
    currentLogIndex = 0;
    progressPercent = 0;
    logContent.innerHTML = '';
    progressText.textContent = '0%';
    patienceLine.textContent = '';
    patienceLine.classList.remove('show');
    cancelMessage.classList.remove('show');
    completionPopup.classList.add('hidden');
    completionPopup.classList.remove('show');
    
    // Clear any existing intervals
    clearInterval(logInterval);
    clearInterval(patienceInterval);
    clearInterval(progressInterval);
    
    // Reset progress bar animation
    const progressBarBefore = progressBar.querySelector('::before');
    progressBar.style.setProperty('--progress-width', '0%');
}

// Start scrolling log messages
function startLogScroll() {
    // Add first message immediately
    addLogMessage();
    
    logInterval = setInterval(() => {
        if (isLooping && progressPercent < 100) {
            addLogMessage();
        }
    }, timings.logInterval);
}

// Add a single log message
function addLogMessage() {
    const message = logMessages[currentLogIndex];
    const logLine = document.createElement('div');
    logLine.className = 'log-line';
    
    // Add random glitch effect
    if (Math.random() < 0.3) {
        logLine.classList.add('glitch');
    }
    
    logLine.textContent = `[${getCurrentTime()}] ${message}`;
    logContent.appendChild(logLine);
    
    // Scroll to bottom
    logContent.scrollTop = logContent.scrollHeight;
    
    // Update index (loop through messages)
    currentLogIndex = (currentLogIndex + 1) % logMessages.length;
}

// Get current timestamp for log entries
function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
}

// Start progress bar animation
function startProgressBar() {
    const startTime = Date.now();
    const duration = timings.progressDuration;
    
    progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 99, 99); // Cap at 99%
        
        progressPercent = progress;
        progressText.textContent = `${Math.floor(progress)}%`;
        
        // Check if we've reached completion
        if (progress >= 99) {
            setTimeout(() => {
                completeProgress();
            }, 1000); // Wait 1 second at 99%
            clearInterval(progressInterval);
        }
    }, 100);
}

// Complete progress and show final message
function completeProgress() {
    progressPercent = 100;
    progressText.textContent = '100%';
    
    // Stop all intervals
    clearInterval(logInterval);
    clearInterval(patienceInterval);
    isLooping = false;
    
    // Show completion popup
    setTimeout(() => {
        showCompletionPopup();
    }, 500);
}

// Show the completion popup
function showCompletionPopup() {
    completionPopup.classList.remove('hidden');
    
    setTimeout(() => {
        completionPopup.classList.add('show');
    }, 100);
    
    // Hide popup and restart after delay
    setTimeout(() => {
        hideCompletionPopup();
    }, timings.completionDisplay);
}

// Hide completion popup and restart
function hideCompletionPopup() {
    completionPopup.classList.remove('show');
    
    setTimeout(() => {
        completionPopup.classList.add('hidden');
        isLooping = true;
        startUpdateCycle();
    }, 500);
}

// Start patience lines
function startPatienceLines() {
    // Show first patience line after initial delay
    setTimeout(() => {
        showPatienceLine();
    }, timings.patienceInterval);
    
    patienceInterval = setInterval(() => {
        if (isLooping && progressPercent < 100) {
            showPatienceLine();
        }
    }, timings.patienceInterval);
}

// Show a patience line
function showPatienceLine() {
    const message = patienceLines[currentPatienceIndex];
    patienceLine.textContent = message;
    patienceLine.classList.add('show');
    
    // Hide after 2 seconds
    setTimeout(() => {
        patienceLine.classList.remove('show');
    }, 2000);
    
    // Update index
    currentPatienceIndex = (currentPatienceIndex + 1) % patienceLines.length;
}

// Setup cancel button functionality
function setupCancelButton() {
    cancelButton.addEventListener('click', () => {
        // Shake button violently
        cancelButton.classList.add('shake');
        
        // Show mocking message
        cancelMessage.textContent = "Thanks! Cancelling only boosts engagement.";
        cancelMessage.classList.add('show');
        
        // Remove shake effect after animation
        setTimeout(() => {
            cancelButton.classList.remove('shake');
        }, 800);
        
        // Hide message after 3 seconds
        setTimeout(() => {
            cancelMessage.classList.remove('show');
        }, 3000);
        
        // Add extra glitch effects
        addScreenGlitch();
    });
}

// Add screen glitch effect
function addScreenGlitch() {
    document.body.style.animation = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.animation = 'screenFlicker 0.1s 3';
    
    setTimeout(() => {
        document.body.style.animation = 'screenFlicker 8s infinite';
    }, 300);
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                // Pause/resume (secret feature)
                if (isLooping) {
                    pauseUpdate();
                } else if (progressPercent < 100) {
                    resumeUpdate();
                }
                break;
            case 'KeyR':
                // Restart cycle (secret feature)
                if (e.ctrlKey) {
                    e.preventDefault();
                    restartCycle();
                }
                break;
            case 'Escape':
                // Fake "cancel" - same as button
                e.preventDefault();
                cancelButton.click();
                break;
        }
    });
}

// Pause update (secret feature)
function pauseUpdate() {
    if (progressPercent >= 100) return;
    
    isLooping = false;
    clearInterval(logInterval);
    clearInterval(patienceInterval);
    clearInterval(progressInterval);
    
    // Add pause indicator
    const pauseLine = document.createElement('div');
    pauseLine.className = 'log-line glitch';
    pauseLine.textContent = `[${getCurrentTime()}] SYSTEM PAUSED - Press Space to resume`;
    pauseLine.style.color = '#FF0033';
    logContent.appendChild(pauseLine);
    logContent.scrollTop = logContent.scrollHeight;
}

// Resume update (secret feature)
function resumeUpdate() {
    if (progressPercent >= 100) return;
    
    isLooping = true;
    
    // Add resume indicator
    const resumeLine = document.createElement('div');
    resumeLine.className = 'log-line';
    resumeLine.textContent = `[${getCurrentTime()}] SYSTEM RESUMED - Back to eternal waiting...`;
    resumeLine.style.color = '#00FF33';
    logContent.appendChild(resumeLine);
    logContent.scrollTop = logContent.scrollHeight;
    
    // Restart intervals
    startLogScroll();
    startPatienceLines();
    
    // Continue progress from where we left off
    const remainingProgress = 99 - progressPercent;
    const remainingTime = (remainingProgress / 99) * timings.progressDuration;
    const startTime = Date.now() - ((progressPercent / 99) * timings.progressDuration);
    
    progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / timings.progressDuration) * 99, 99);
        
        progressPercent = progress;
        progressText.textContent = `${Math.floor(progress)}%`;
        
        if (progress >= 99) {
            setTimeout(() => {
                completeProgress();
            }, 1000);
            clearInterval(progressInterval);
        }
    }, 100);
}

// Restart entire cycle (secret feature)
function restartCycle() {
    const restartLine = document.createElement('div');
    restartLine.className = 'log-line glitch';
    restartLine.textContent = `[${getCurrentTime()}] MANUAL RESTART INITIATED - Hope is futile`;
    restartLine.style.color = '#FF0033';
    logContent.appendChild(restartLine);
    logContent.scrollTop = logContent.scrollHeight;
    
    setTimeout(() => {
        isLooping = true;
        startUpdateCycle();
    }, 1000);
}

// Add random glitch effects to existing text
function addRandomGlitch() {
    const logLines = document.querySelectorAll('.log-line');
    if (logLines.length > 0 && Math.random() < 0.2) {
        const randomLine = logLines[Math.floor(Math.random() * logLines.length)];
        randomLine.classList.add('glitch-text');
        setTimeout(() => {
            randomLine.classList.remove('glitch-text');
        }, 300);
    }
}

// Add periodic random glitches
setInterval(addRandomGlitch, 3000);

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Add some console easter eggs
console.log('%c🚫 SYSTEM UPDATE IN PROGRESS 🚫', 'color: #FF0033; font-size: 20px; font-weight: bold;');
console.log('%cCancelling will not help. Refreshing will not help. Only patience.', 'color: #FFFFFF; font-size: 14px;');
console.log('%cSecret shortcuts: Space (pause/resume), Ctrl+R (restart), Escape (cancel)', 'color: #666666; font-size: 12px;');

// Prevent right-click context menu for full immersion
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    // Add a cheeky log message
    setTimeout(() => {
        const logLine = document.createElement('div');
        logLine.className = 'log-line glitch';
        logLine.textContent = `[${getCurrentTime()}] Right-click detected... Adding extra wait time.`;
        logLine.style.color = '#FF0033';
        logContent.appendChild(logLine);
        logContent.scrollTop = logContent.scrollHeight;
    }, 500);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page hidden - add suspicious log entry
        setTimeout(() => {
            if (isLooping) {
                const logLine = document.createElement('div');
                logLine.className = 'log-line';
                logLine.textContent = `[${getCurrentTime()}] User attention diverted... Slowing down process.`;
                logLine.style.color = '#FF0033';
                logContent.appendChild(logLine);
                logContent.scrollTop = logContent.scrollHeight;
            }
        }, 1000);
    }
});

// Prevent page refresh/close for full commitment to the bit
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to cancel this very important system update?';
});

// Handle page focus for extra immersion
window.addEventListener('focus', () => {
    if (isLooping && Math.random() < 0.3) {
        setTimeout(() => {
            const logLine = document.createElement('div');
            logLine.className = 'log-line';
            logLine.textContent = `[${getCurrentTime()}] Welcome back... Progress has mysteriously slowed.`;
            logContent.appendChild(logLine);
            logContent.scrollTop = logContent.scrollHeight;
        }, 2000);
    }
});