(function(){
  const quotes = [
    {
      quote:
      "A violência resolve tudo",
      author: "Katarina"
    },
    {
      quote:
      "As vezes um coração frio só precisa de um sorriso quente",
      author: "Braum"
    },
    {
      quote:
      "O Verdadeiro Mestre é um eterno aprendiz",
      author: "Master Yi"
    },
    {
      quote:
      "Ficar parada é mais perigoso que seguir em frente",
      author: "Talyah"
    },
    {
      quote:
      "A dor é temporária, mas a vitória é eterna",
      author: "Aatrox"
    },
      {
        quote:
        "Medo é o primeiro de muitos inimigos",
        author: "Garen"
      },
      {
        quote:
        "Prefiro errar do que não fazer nada",
        author: "Ekko"
      }
    ];

    const btn = document.getElementById("generate-btn");

    btn.addEventListener("click",function(){
      let random = Math.floor(Math.random()*quotes.length);
      console.log(random);

      document.getElementById("quote").textContent = quote[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;

    });
  })();
