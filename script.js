document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Redirect to the profile page
    window.location.href = 'profile.html';
});

// Handle profile form submission
document.getElementById('profileForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Redirect to the main page
    window.location.href = 'main.html';
});

// Handle the button click to go to the main page
document.getElementById('goToMain')?.addEventListener('click', function() {
    window.location.href = 'main.html';
});

// Function to toggle sections on the main page
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.toggle-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Function to call emergency contact (simulated)
function callEmergencyContact() {
    alert("Calling your emergency contact...");
}

// Handle medication form submission
document.getElementById('medicationForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const medicationName = document.getElementById('medicationName').value;
    const dosage = document.getElementById('dosage').value;
    const date = document.getElementById('date').value;

    // Display the medication history
    const medicationHistory = document.getElementById('medicationHistory');
    medicationHistory.innerHTML += `<p>${date}: ${medicationName} - ${dosage}</p>`;

    // Clear the form
    document.getElementById('medicationForm').reset();
});

// Chatbot functionality
function toggleChatbot() {
    const chatbotBody = document.getElementById('chatbotBody');
    chatbotBody.style.display = chatbotBody.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value;
    const chatOutput = document.getElementById('chatOutput');

    if (message) {
        // Display the user's message
        chatOutput.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        input.value = ''; // Clear the input field

        // Simple chatbot response
        const response = getChatbotResponse(message);
        chatOutput.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;
    }
}

// Simple chatbot response logic
function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('medication')) {
        return 'I can help you with medication reminders and history!';
    } else if (lowerMessage.includes('emergency')) {
        return 'Make sure to have your emergency contacts ready!';
    } else if (lowerMessage.includes('yoga')) {
        return 'Yoga is great for relaxation and flexibility. Try some gentle poses!';
    } else if (lowerMessage.includes('exercise')) {
        return 'Regular exercise is important for your health. Keep moving!';
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else {
        return 'I am here to help! Please ask me anything.';
    }
}

// Function to toggle video section
function toggleVideoSection() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = videoContainer.style.display === 'block' ? 'none' : 'block';
}