let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
// Refresh and clear button functionality
function refreshAndClear() {
    // Clear the displayed sets
    if (saveEl) {
        saveEl.textContent = 'Last Set: ';
    }
    // Reset the count
    count = 0;
    if (countEl) {
        countEl.textContent = 0;
    }
    // Optionally clear localStorage/sessionStorage if used in future
    // localStorage.clear();
    // sessionStorage.clear();
    // Refresh the page
    location.reload();
}
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
