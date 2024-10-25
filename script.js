const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})

function generateQuestions() {
    const topic = document.getElementById('topicInput').value;
    const questions = [
        `Explain the main concepts of ${topic}.`,
        `What are the benefits and challenges of ${topic}?`,
        `How does ${topic} impact society?`
    ];
    document.getElementById('questionsDisplay').innerHTML = questions.map(q => `<p>${q}</p>`).join('');
}

// Page 5: Study Resources
function showResources() {
    const resources = [
        "Past Paper 1",
        "Study Guide 2",
        "Lecture Notes 3"
    ];
    document.getElementById('resourceDisplay').innerHTML = resources.map(res => `<p>${res}</p>`).join('');
}

// Page 6: Progress Tracker
function addMilestone() {
    const milestone = document.getElementById('milestoneInput').value;
    if (milestone) {
        const li = document.createElement("li");
        li.textContent = milestone;
        document.getElementById('progressList').appendChild(li);
        document.getElementById('milestoneInput').value = '';
    }
}

// Page 7: Motivation Page
function getQuote() {
    const quotes = [
        "Believe in yourself!",
        "Every accomplishment starts with the decision to try.",
        "Stay focused, stay determined."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = randomQuote;
}

// Page 8: Discussion Forum
function addComment() {
    const comment = document.getElementById('commentInput').value;
    if (comment) {
        const li = document.createElement("li");
        li.textContent = comment;
        document.getElementById('commentsSection').appendChild(li);
        document.getElementById('commentInput').value = '';
    }
}

// Page 9: Profile Page
function viewProfile() {
    const profile = "Achievements: 5 Badges Earned\nGoals: Complete 10 Practice Sets";
    document.getElementById('profileDisplay').textContent = profile;
}

// Page 10: Prep Schedule Management
function addTask() {
    const task = document.getElementById('taskInput').value;
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        document.getElementById('taskList').appendChild(li);
        document.getElementById('taskInput').value = '';
    }
}

// Page 11: Analytics
function showAnalytics() {
    const analytics = {
        questionsAttempted: 120,
        studyHours: 50
    };
    document.getElementById('analyticsDisplay').innerHTML = `
        <p>Questions Attempted: ${analytics.questionsAttempted}</p>
        <p>Hours Studied: ${analytics.studyHours}</p>
    `;
}