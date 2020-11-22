const multiaxe = document.querySelector('.multiaxe');
const paramoteur = document.querySelector('.paramoteur');

const boutonParamoteur = document.querySelector('#paramoteur');
boutonParamoteur.addEventListener("click", (even) => {
 multiaxe.style.display = 'none';
 paramoteur.style.display ='block';
});

const boutonMultiaxe = document.querySelector('#multiaxe');
boutonMultiaxe.addEventListener("click", (even) => {
 paramoteur.style.display = 'none';
 multiaxe.style.display ='block';
});

const all = document.querySelector('#all');
all.addEventListener("click", (even) => {
 paramoteur.style.display = 'block';
 multiaxe.style.display ='block';
});
