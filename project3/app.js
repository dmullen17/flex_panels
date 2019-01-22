const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', function() {
    //console.log('hi');
    this.classList.toggle('panel-grow');
}));



