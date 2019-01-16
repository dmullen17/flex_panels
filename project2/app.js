let panels = document.querySelectorAll('.panel');

function togglePanel(e) {
    //console.log(this);
    this.classList.toggle('flex-grow');
    // console.log(e); mouse click event
}

function addOpenActive(e) {
    console.log(e);
    if (e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));
panels.forEach(panel => panel.addEventListener('transitionend', addOpenActive));