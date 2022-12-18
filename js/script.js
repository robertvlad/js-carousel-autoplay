//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';
let itemsThumbnails = ""

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`

    itemsThumbnails += `<div class="thumb"><img src="./img/${imagesArray[i]}"></div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const thumbnailsPrev = document.querySelector(".thumbnails")
thumbnailsPrev.innerHTML += itemsThumbnails

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const thumbnails = document.getElementsByClassName("thumb")
thumbnails[itemActive].classList.add("active")

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    
    // 1 - SE l'immagine non è l'ultima da mostare:
        // 1.1 - Togliere la classe active all'imagine attuale e metterla al successivo
        // 1.2 - Togliere la classe active al pallino della bar di scorrimento, e metterla al successivo
        // 1.3 - Incremento
    // --- ALTRIMENTI non eseguo nessun cambiamento

    if(itemActive < items.length - 1){

        // Togliere la classe active all'imagine e del pallino attuale
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        // Incremento
        itemActive++;

        // Aggiungere la classe active all'elemento successivo

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active")
        thumbnails[itemActive].classList.add("active")

    }else{
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        itemActive = 0;

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active") 
        thumbnails[itemActive].classList.add("active")
    }
});

prev.addEventListener('click', function(){
    
    // 1 - SE l'immagine non è la prima da mostare:
        // 1.1 - Togliere la classe active all'imagine attuale e metterla al precedente
        // 1.2 - Togliere la classe active al pallino della bar di scorrimento, e metterla al precedente
        // 1.3 - Decremento
    // --- ALTRIMENTI non eseguo nessun cambiamento

    if(itemActive > 0){

        // Togliere la classe active all'imagine e del pallino attuale
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        // Decremento
        itemActive--;

        // Aggiungere la classe active all'elemento precedente

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active")
        thumbnails[itemActive].classList.add("active")

    }else{
        items[itemActive].classList.remove("active");
        circles[itemActive].classList.remove("active");
        thumbnails[itemActive].classList.remove("active")

        itemActive = items.length - 1;

        items[itemActive].classList.add("active")
        circles[itemActive].classList.add("active") 
        thumbnails[itemActive].classList.add("active")
    }
})


