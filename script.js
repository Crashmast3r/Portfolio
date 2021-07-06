function switchCard(btn, crd) {
    var rmv = document.getElementsByClassName('selected');
    var losecard = document.getElementsByClassName('shown');
    
    // Hide card and style button not selected.
    rmv[0].classList.remove('selected');
    losecard[0].classList.remove('shown');

    // Style selected button and show corresponding info card.
    document.getElementById(btn).classList.add('selected');
    document.getElementById(crd).classList.add('shown');
};