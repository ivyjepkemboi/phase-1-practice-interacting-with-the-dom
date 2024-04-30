document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Timer
    const timerDisplay = document.getElementById('counter');
    let timerValue = 0;
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(() => {
            timerValue++;
            timerDisplay.textContent = timerValue;
        }, 1000);
    }

    // Start the timer when the page loads
    startTimer();

    // Step 2: Counter Buttons
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');

    function incrementCounter() {
        timerValue++;
        timerDisplay.textContent = timerValue;
    }

    function decrementCounter() {
        timerValue--;
        timerDisplay.textContent = timerValue;
    }

    plusButton.addEventListener('click', incrementCounter);
    minusButton.addEventListener('click', decrementCounter);

    // Step 3: Like Button
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    const likesCount = {};

    function likeNumber() {
        const currentNumber = timerDisplay.textContent;
        likesCount[currentNumber] = (likesCount[currentNumber] || 0) + 1;

        const likeItem = document.createElement('li');
        likeItem.textContent = `${currentNumber}: ${likesCount[currentNumber]} likes`;
        likesList.appendChild(likeItem);
    }

    likeButton.addEventListener('click', likeNumber);

    // Step 4: Pause/Resume Button
    const pauseResumeButton = document.getElementById('pause');
    let isPaused = false;

    function pauseResumeTimer() {
        if (isPaused) {
            startTimer();
            isPaused = false;
            pauseResumeButton.textContent = 'pause';
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
        } else {
            clearInterval(timerInterval);
            isPaused = true;
            pauseResumeButton.textContent = 'resume';
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
        }
    }

    pauseResumeButton.addEventListener('click', pauseResumeTimer);

    // Step 5: Comments
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('list');

    function addComment(event) {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentItem = document.createElement('div');
            commentItem.textContent = commentText;
            commentsList.appendChild(commentItem);
            commentInput.value = '';
        }
    }

    commentForm.addEventListener('submit', addComment);
});
