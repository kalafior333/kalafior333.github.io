document.addEventListener('click', function(event) {
    if (event.target.classList.contains('zdj_mini')) {
        const id = event.target.id;
        pokazObrazek(id);
    }
});
function pokazObrazek(id) {
    document.getElementById('duze_zdj').src = id + '.jpg';
    document.getElementById('duza_galeria').classList.remove('none');
    document.getElementById('duza_galeria').classList.add('flex');
    let opis = id.toUpperCase();
    document.getElementById('opis').innerText = opis;
}
document.addEventListener('click', function(event) {
    if (event.target.id === 'duza_galeria') {
        schowajObrazek();
    }
});
function schowajObrazek() {
    document.getElementById('duza_galeria').classList.remove('flex');
    document.getElementById('duza_galeria').classList.add('none');
}