// Preheader Background Color 
document.getElementById('customPreheaderContainer').style.backgroundColor = '#0C0224'
// Logo 
document.getElementById('logoImg').src = 'https://kotsovolos.blob.core.windows.net/promos/2022/preheader-assets/24HR-TV-OFFER/logoImageBig.png'
// Descriptive Image
document.getElementById('descImgDesktop').src = 'https://assets.kotsovolos.gr/preheader-custom-assets/tv-offers-mar2023/offer_desktop.png'
document.getElementById('descImgMobile').src = 'https://assets.kotsovolos.gr/preheader-custom-assets/tv-offers-mar2023/offer_mobile.png'
// Counter Text Color 
document.getElementById('countdownCont').style.color = '#FFF'
// CTA Text & Color
document.getElementById('ctaText').innerText = 'Πρόλαβέ το'
document.getElementById('ctaText').style.color = '#FFF';
// CTA Link
document.getElementById('ctaBtn').href = '#'

/* ******* SET WHAT COUNTER TO DISPLAY (true/false) ******* */
let displayDays = false
let displayHours = true
let displayMinutes = true
let displaySeconds = true

/* 24 HOUR COUNTDOWN THAT RESETS AUTOMATICALLY */
let autoReset = true;

/* ******* SET EVENT DATE ******* */
// example format: Sep 7, 2022 20:00:00
// if autoReset is TRUE this is ignored
let date = "Mar 23, 2023 20:00:00"

// show more than 24hr when end date is further away
let exceed24hr = false

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

// Countdown Functionality
let populateUI = (days, hours, minutes, seconds) => {
    if (days <= 9) {
        days = "0" + days
    }

    if (hours <= 9) {
        hours = "0" + hours
    }
    
    if (minutes <= 9) {
        minutes = "0" + minutes
    }
    
    if (seconds <= 9) {
        seconds = "0" + seconds
    }

    if (displayDays == true) {
        document.getElementById("daysNo").innerHTML = days
    } else {
            document.getElementById("daysNo").classList.add('hide')
            document.getElementById("daysDivider").classList.add('hide')
            document.getElementById("daysText").classList.add('hide')
    }

    if (displayHours == true) {
        document.getElementById("hoursNo").innerHTML = hours
    } else {
        document.getElementById("hoursNo").classList.add('hide')
        document.getElementById("hoursDivider").classList.add('hide')
        document.getElementById("daysDivider").classList.add('hide')
        document.getElementById("hoursText").classList.add('hide')
    }
    
    if (displayMinutes == true) {
        document.getElementById("minutesNo").innerHTML = minutes
    } else {
        document.getElementById("minutesNo").classList.add('hide')
        document.getElementById("minutesDivider").classList.add('hide')
        document.getElementById("hoursDivider").classList.add('hide')
        document.getElementById("minutesText").classList.add('hide')
    }
    if (displaySeconds == true) {
        document.getElementById("secondsNo").innerHTML = seconds
    } else {
        document.getElementById("secondsNo").classList.add('hide')
        document.getElementById("minutesDivider").classList.add('hide')
        document.getElementById("secondsText").classList.add('hide')
    }
}

if (autoReset == true) {
    displayDays = false

    setInterval(time = () => {
        let day = new Date()
        let days = 0
        let hours = 23 - day.getHours()
        let minutes = 59 - day.getMinutes()
        let seconds = 60 - day.getSeconds()

        populateUI(days, hours, minutes, seconds)

    }, 1000)
} else {
    let countdownToDate = new Date(date).getTime()

    let countdownFunc = setInterval( () => {
        let now = new Date().getTime();

        let timeleft = countdownToDate - now;
            
        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
        if (exceed24hr == true) {
            let hours = Math.floor(timeleft / (1000 * 60 * 60))
        } else {
            let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        }
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            clearInterval(countdownFunc)
        } else {
            populateUI(days, hours, minutes, seconds)
        }
    }, 1000)
}

// Dropdown Functionality
document.getElementById('dropdownBtn').onclick = () => { 
    document.querySelector('.preheader-max-container').classList.toggle('opened')
}