let languageContent = {
    "italy": {
       "logo": "INIZIA BOOTSTRAP",
       "active": "PORTFOLIO",
       "active2": "Di",
       "active3": "CONTATTO",
       "h1-landing": "INIZIA BOOTSTRAP",
       "p-landing": "Grafico - Web Designer - Illustratore",
       "h2-portfolio": "PORTFOLIO",
       "h2-about": "Di",
       "p-grid": "Freelancer è un tema bootstrap gratuito creato da<br> Start Bootstrap. Il download include<br> file sorgente completi tra cui HTML, CSS e<br> JavaScript nonché fogli di stile SASS opzionali<br> per una facile personalizzazione.",
       "p-grid2": "puoi creare il tuo avatar personalizzato per la<br> testata, modificare l'icona nei divisori e<br> aggiungere il tuo indirizzo email al modulo di contatto per<br> renderlo perfettamente funzionante!",
       "Download": "Scaricamento",
       "h2-contact": "CONTATTAMI",
    //    "input1": "Nome e cognome",
    //    "input2": "Indirizzo e-mail",
    //    "input3": "Numero di telefono",
    //    "input4": "Messaggio",
       "btn-contact": "Inviare",
       "h2-left-location": "Posizione",
       "address-footer": "2215 John Daniel Drive<br> Clark, MO 65243",
       "h2-center-section": "IN GIRO PER IL WEB",
       "h2-right-section": "INFORMAZIONI SUL LIBERO LIBERO",
       "p-right-section": "FreeLance è un tema Bootstrap gratuito, concesso in licenza dal MIT<br> Creato da Hussien Mohamed",
       "p-copyright": "Copyrighto Hussien Mohamed 2024",

    },
 }
 function swithcLang(lang) {
    for (let key in languageContent[lang]) {
       document.getElementById(key).innerHTML = languageContent[lang][key];
    }
 }




 



 