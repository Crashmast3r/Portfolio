function switchCard(btn, crd) {
    var rmv = document.getElementsByClassName('selected');
    rmv[0].classList.remove("selected");
    
    document.getElementById(btn).classList.add('selected');

    document.getElementById('intro').style.display = 'none';
    document.getElementById('info').style.display = 'none';
    document.getElementById('practice').style.display = 'none';
    document.getElementById('rl-projects').style.display = 'none';
    document.getElementById(crd).style.display = 'block';
};