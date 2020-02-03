// ----- Alert Banner -------
const alertBanner = document.getElementById("alert");
// html for the banner

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p> <strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close"> &times; </p>
    </div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

// ---------------------------
// Changing Traffic Chart Data

function addData(chart, label, data) {
    chart.config.data.labels = label;
    chart.config.data.datasets[0].data = data;
    chart.update();
}

const trafficNav = document.querySelector('.tarffic-nav');
trafficNav.addEventListener('click', e => {
    if (e.target.tagName === "LI") {
        let button = e.target;
        if (button.textContent === 'Hourly') {
            addData(trafficChart, hourlyTrafficChartData.labels, hourlyTrafficChartData.datasets[0].data);
        } else if (button.textContent === 'Daily') {
            addData(trafficChart, dailyTrafficChartData.labels, dailyTrafficChartData.datasets[0].data);
        } else if (button.textContent === 'Weekly') {
            addData(trafficChart, weeklyTrafficChartData.labels, weeklyTrafficChartData.datasets[0].data);
        } else if (button.textContent === 'Monthly') {
            addData(trafficChart, monthlyTrafficChartData.labels, monthlyTrafficChartData.datasets[0].data);
        }
    }
});

// Applying active class to navigation

const navBtns = document.getElementsByClassName("nav-icons");

for (let i = 0; i<navBtns.length; i+=1) {
    navBtns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active-nav-icon");
        current[0].className = current[0].className.replace(" active-nav-icon", "");
        this.className += " active-nav-icon";
    });
}

// ------------------------------

// Applying active class to traffic nav links 
const btns = document.getElementsByClassName("traffic-nav-link");
const canvas_div = document.getElementsByClassName("widget-container-full");
const canvas = canvas_div.lastChild;

for (var i = 0; i < btns.length; i+=1) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active-traffic-nav-linc");
        current[0].className = current[0].className.replace(" active-traffic-nav-linc", "");
        this.className += " active-traffic-nav-linc";
    });
}

// -------------------------------------------
// --------- Messaging ----------

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if (user.value === '' && message.value === ''){
        alert('User and Message fields must be filled out');
    } else if (user.value === ''){
        alert('User field must be filled out');
    } else if (message.value === ''){
        alert('Message field must be filled out');
    } else {
        alert('Message successfully sent');
    }
});

// -------------------------------------------
// -------------- Autocomplete -----------------

var users = [
    { label: 'Victoria Chambers'},
    { label: 'Dale Byrd'},
    { label: 'Dawn Wood'},
    { label: 'Dan Oliver'}
];

var input = document.getElementById("userField");

autocomplete({
    input: input,
    fetch: function(text, update) {
        text = text.toLowerCase();
        var suggestions = users.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.label;
    },
    minLength: 1,
});

// -------------------------------------------
// ---------- Local Storage ------------------

const email_onoffswitch = document.querySelector('#email_onoffswitch');
const public_onoffswitch = document.querySelector('#public_onoffswitch');
const timezone = document.querySelector('#timezone');
const selectOptions = document.querySelectorAll("option");
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel');

// Test for local storage
function checkSwitch(switchButton) {
    if (localStorage.getItem(switchButton) && localStorage.getItem(switchButton) === 'false') {
        return false;
    } else {
        return true;
    }
}

// Add settings to local storage
function addSettings() {
    localStorage.setItem('emailSwitch', email_onoffswitch.checked);
    localStorage.setItem('publickSwitch', public_onoffswitch.checked);
    localStorage.setItem('timezone', timezone.value)
}

// Clear settings from local storage
function clearSettings() {
    localStorage.removeItem('emailSwitch');
    localStorage.removeItem('publickSwitch');
    localStorage.removeItem('timezone');
}

// Initialize
if (checkSwitch('emailSwitch')) {
    email_onoffswitch.checked = true;
} else {
    email_onoffswitch.checked = false;
}

if (checkSwitch('publickSwitch')) {
    public_onoffswitch.checked = true;
} else {
    public_onoffswitch.checked = false;
}

if (localStorage.getItem('timezone')) {
    for (let i=0; i<selectOptions.length; i++) {
        selectOptions[i].removeAttribute('selected');
        if (localStorage.getItem('timezone') === selectOptions[i].value) {
            selectOptions[i].setAttribute('selected', 'selected');
        }
    }
}

// Saves Settings to Local Storage
save.addEventListener("click", (e) => {
    addSettings();
  })
  
// Clear Settings from Local Storage
cancel.addEventListener("click", (e) => {
clearSettings();
})