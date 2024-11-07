document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated",    {
        speed:200,
        loop: false,
        afterComplete: function (instance) {
            instance.destroy();
          }
    })

    .type('Olá!! sou o R3, estou aqui para tirar suas duvidas sobre reciclagem, entao fique a vontade para me perguntar', { delay: 1000 })
    .delete(150) 
   
    
    .go()

    
})

