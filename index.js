let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeTitle = document.querySelectorAll(".team h3")[0]
let guestTitle = document.querySelectorAll(".team h3")[1]

function add1Home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function add2Home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function add3Home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function add1Guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function add2Guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function add3Guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    highlightLeader()
}

function highlightLeader() {
    homeTitle.classList.remove("leader")
    guestTitle.classList.remove("leader")

    if (homeScore > guestScore){
        homeTitle.classList.add("leader")
    }
    else if (guestScore > homeScore) {
        guestTitle.classList.add("leader")
    }
}