let dados = [
  {
    "categoria": "Doces",
    "produtos": [
      {
        "imagem": "doces1.jpg",
        "titulo": "Doces por encomenda"
      },
      {
        "imagem": "doces2.jpg",
        "titulo": "Doces por encomenda"
      },
      {
        "imagem": "doces3.jpg",
        "titulo": "Doces por encomenda"
      }
    ]
  },
  {
    "categoria": "Salgados",
    "produtos": [
      {
        "imagem": "salgados1.jpg",
        "titulo": "Salgados por encomenda"
      },
      {
        "imagem": "salgados2.jpg",
        "titulo": "Salgados por encomenda"
      },
      {
        "imagem": "salgados3.jpg",
        "titulo": "Salgados por encomenda"
      }
    ]
  },
  {
    "categoria": "Bolos",
    "produtos": [
      {
        "imagem": "bolos1.jpg",
        "titulo": "Bolos por encomenda"
      },
      {
        "imagem": "bolos2.jpg",
        "titulo": "Bolos por encomenda"
      },
      {
        "imagem": "bolos3.jpg",
        "titulo": "Bolos por encomenda"
      }
    ]
  },
  {
    "categoria": "Outros",
    "produtos": [
      {
        "imagem": "outro.png",
        "titulo": "Outros produtos por encomenda"
      }
    ]
  }
]

function criarCard(produto) {
  return `
    <div class="swiper-slide card">
      <img src="../img/${produto.imagem}" alt="${produto.titulo}">
      <h4>${produto.titulo}</h4>
      <a href="../contato/contato.html">COMPRAR/CONTATOS</a>
    </div>
  `;
}

function renderizarCarrossel() {
  const container = document.getElementById('produtos-container');
  container.innerHTML = '';

  dados.forEach(secao => {
    const categoriaId = secao.categoria.toLowerCase();

    const swiperHTML = `
      <div class="categoria">
        <h3 class="titulo-secao">${secao.categoria.toUpperCase()}</h3>
        <div class="swiper ${categoriaId}-swiper">
          <div class="swiper-wrapper" id="${categoriaId}-wrapper">
            ${secao.produtos.map(criarCard).join('')}
          </div>
          <div class="swiper-button-prev ${categoriaId}-prev"></div>
          <div class="swiper-button-next ${categoriaId}-next"></div>
        </div>
      </div>
    `;

    container.innerHTML += swiperHTML;
  });

  // Inicializa todos os carrosséis
  dados.forEach(secao => {
    new Swiper(`.${secao.categoria.toLowerCase()}-swiper`, {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1440:{slidesPerView:6}
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', renderizarCarrossel);
