const folgas = [
    "quinta-Feira",
    "Sexta-feira",
    "sábado",
    "Domingo",
    "segunda",
    "quarta",
    "Quarta-feira",
];

capitalizeFolgas = (dias) => {
    return dias.map(dia => { 
        return dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();
     });
   }
   console.log(capitalizeFolgas(folgas));

//map recebe uma função e a ca