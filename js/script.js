/* traccia
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Le caratteristiche minime richieste sono:
Immagine grande visibile quando attiva
Lista di Thumbnails in basso
Anche nelle thumbnails dobbiamo avere una classe active corrispondente all'immagine attiva in quel momento (lo stile è a vostra discrezione)
Al click sulle freccette l'immagine principale deve cambiare (e la thumbnail corrispondente deve avere la classe active con conseguente effetto visivo)
Implementare il ciclo infinito: se sono sulla prima immagine e clicco prev, devo ricominciare dall'ultima. Se sono sull'ultima e clicco next, devo ripartire dalla prima.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (questo richiederà qualcosa che non abbiamo visto)
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce (questo richiederà degli eventi che non abbiamo visto)
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
- oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili per svolgere l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati.
*/


console.log('vue ok', Vue)

const app = new Vue({
    el: '#root',
    data: {

    },
    computed: {

    },
    methods: {

    }
})