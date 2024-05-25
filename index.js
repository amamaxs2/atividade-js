
function createHeader() {
    const h1 = document.createElement('h1')
    const ul = document.createElement('ul')
    h1.textContent = `Squirtle`
    liArray = [`Informações sobre Squirtle`,
        `Características`,
        `Curiosidades`,
        `Artigo sobre Squirtle`,
        `Recursos Adicionais`,
        `Evolução`
    ]
    const nav = document.querySelector('nav')
    nav.appendChild(ul)
    for (let cont = 0; cont < liArray.length; cont++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = liArray[cont];
        li.appendChild(a)
        ul.appendChild(li)
    }

    const header = document.querySelector('header')
    header.appendChild(h1)
}


function createFooter() {
    const p = document.createElement('p')

    footerContent = [{textContent: `© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.`},
                    {textContent: "Voltar para o topo",href:":header"},
                    {textContent: "Contato via e-mail",href:"mailto:contato@squirtlepage.com"},
                    {textContent: "Telefone: (55) 5555-5555",href:"tel:+5555555555"}]
    
    const footer = document.querySelector('footer')
    for (let cont = 0; cont < footerContent.length; cont++) {
        const p = document.createElement('p')
        footer.appendChild(p)
        
        if (cont > 1) {
            const a = document.createElement('a')
            a.href = footerContent[cont].href;
            a.textContent = footerContent[cont].textContent;
            p.appendChild(a)
        } else {
            p.textContent = footerContent[cont].textContent;
        }
    }
}

function createMain() {
    createInformations()
    createCaracteristicas()
    createCuriosidades()
    createArticle()
    createRecursosAdicionais()
    createEvolução()
}

function createInformations() {
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.id = 'info-squirtle-label'
    h2.textContent = `Informações sobre Squirtle`

    const section = document.createElement('section')
    section.id = 'info-squirtle'
    section.appendChild(h2)
    
    main.appendChild(section)
    const div = document.createElement('div')
    section.appendChild(div)
    const img1 = document.createElement('img')
    img1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    img1.alt = 'Squirtle 1'
    div.appendChild(img1)
    const img2 = document.createElement('img')
    img2.src = "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
    img2.alt = 'Squirtle 2'
    div.appendChild(img2)

    const p = document.createElement('p')
    p.textContent = "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle."
    section.appendChild(p)
}

function createCaracteristicas() {
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.id = 'caracteristicas-label'
    h2.textContent = `Características`

    const section = document.createElement('section')
    section.id = 'caracteristicas'
    section.appendChild(h2)
    
    const p = document.createElement('p')
    p.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump."
    section.appendChild(p)
    main.appendChild(section)
}

function createCuriosidades() {
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.id = 'curiosidades-label'
    h2.textContent = `Curiosidades`

    const section = document.createElement('section')
    section.id = 'curiosidades'
    section.appendChild(h2)
    
    main.appendChild(section)
    const ul = document.createElement('ul')
    liArray = [`Squirtle é um dos Pokémon mais populares e adoráveis.`,
        `Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).`,
        `Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.`
    ]

    section.appendChild(ul)
    for (let cont = 0; cont < liArray.length; cont++) {
        const li = document.createElement('li')
        li.textContent = liArray[cont];
        ul.appendChild(li)
    }
}

function createArticle() {
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    h2.id = 'artigo-squirtle-label'
    h2.textContent = `Squirtle: O Amigo Aquático`

    const article = document.createElement('article')
    article.id = 'artigo-squirtle'
    article.appendChild(h2)
    
    pArray = [  `Squirtle, com sua aparência simpática e sua habilidade em controlar a
                água, conquistou o coração de treinadores Pokémon ao redor do mundo.
                Sendo o inicial de água na região de Kanto, Squirtle é uma escolha
                popular para aqueles que buscam equilíbrio e versatilidade em suas
                equipes.`,
                `Sua concha nas costas não apenas oferece proteção, mas também é um
                símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
                para Blastoise, Squirtle se transforma em uma força formidável,
                dominando ataques aquáticos que podem surpreender adversários em
                batalhas.`,
                `Além de suas habilidades de batalha, Squirtle é conhecido por seu
                carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle
                como uma amizade profunda, tornando-o não apenas um companheiro de
                lutas, mas um amigo leal ao longo de suas jornadas.`
    ]
    for (let cont = 0; cont < liArray.length; cont++) {
        const p = document.createElement('p')
        p.textContent = pArray[cont];
        article.appendChild(p)
    }
    main.appendChild(article)
}

function createRecursosAdicionais() {
    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.id = 'recursos'
    main.appendChild(section)
    
    const h2 = document.createElement('h2')
    h2.id = `recursos-label`
    h2.textContent = `Recursos Adicionais`
    section.appendChild(h2)

    const ul = document.createElement('ul')
    section.appendChild(ul)
    liArray =  [{textContent: `Pokédex - Squirtle`, href: "https://www.pokemon.com/br/pokedex/squirtle", target: "_blank"},
                {textContent: `Bulbapedia - Squirtle`, href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)", target: "_blank"},
    ]

    for (let cont = 0; cont < liArray.length; cont++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = liArray[cont].textContent;
        a.href = liArray[cont].href;
        a.target = liArray[cont].target;
        li.appendChild(a)
        ul.appendChild(li)
    }
}

function createEvolução() {
    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.id = 'evolucao'
    main.appendChild(section)
    
    const h2 = document.createElement('h2')
    h2.id = `evolucao-label`
    h2.textContent = `Evoluções`
    section.appendChild(h2)

    const ul = document.createElement('ul')
    section.appendChild(ul)
    liArray =  [{href: "./pages/pokemon/index.html?name=squirtle", src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", alt: "Squirtle", figcaption: "1. Squirtle"},
                {href: "./pages/pokemon/index.html?name=wartortle", src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png", alt: "Wartortle", figcaption: "2. Wartortle"},
                {href: "./pages/pokemon/index.html?name=blastoise", src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png", alt: "Blastoise", figcaption: "3. Blastoise"},
    ]

    for (let cont = 0; cont < liArray.length; cont++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const figcaption = document.createElement('figcaption')
        a.href = liArray[cont].href;
        img.src = liArray[cont].src;
        img.alt = liArray[cont].alt;
        figcaption.textContent = liArray[cont].figcaption;
        figure.appendChild(img)
        a.appendChild(figure)
        a.appendChild(figcaption)
        li.appendChild(a)
        ul.appendChild(li)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createHeader();
    createMain();
    createFooter();
})