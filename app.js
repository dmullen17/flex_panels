let sayHi = function() {
    console.log('Hi');
}

let toggleOpen = function() {
    //console.log(this);
    this.classList.toggle('open');
}

let addOpenActive = function(event) {
    /*let classes = Array.from(this.classList);
    console.log(classes);
    if (classes.includes('open')) {
        this.classList.add('open-active');
    }*/
    console.log(event);
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

let panels = document.querySelectorAll('.panel');
//panels.forEach(panel => panel.addEventListener('click', sayHi));

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', addOpenActive))
               