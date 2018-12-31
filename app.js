function sayHi() {
    console.log('Hi');
}

function toggleOpen() {
    //console.log(this);
    this.classList.toggle('open');
}

function addOpenActive(event) {
    /*let classes = Array.from(this.classList);
    console.log(classes);
    if (classes.includes('open')) {
        this.classList.add('open-active');
    }*/
    console.log(event);
    console.log(event.propertyName); //font-size flex-grow and transform are all transitioning. - we will specify only flex
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

let panels = document.querySelectorAll('.panel');
//panels.forEach(panel => panel.addEventListener('click', sayHi));

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', addOpenActive));
               