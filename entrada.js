const question =
    document.getElementById("question");

const description =
    document.getElementById("description");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const heartEffects =
    document.getElementById("heartEffects");

const questionCard =
    document.getElementById("questionCard");

const topHeart =
    document.getElementById("topHeart");


let questionLevel = 0;


/* =========================
   EFEITOS CONTÍNUOS
========================= */

let effectInterval = 700;


function createFloatingHeart() {

    const effect =
        document.createElement("div");

    effect.className =
        "floating-effect";


    const effects = [

        "♥",
        "♡",
        "❤",
        "💕",
        "✦",
        "❥"

    ];


    effect.textContent =
        effects[
            Math.floor(
                Math.random() *
                effects.length
            )
        ];


    effect.style.left =
        Math.random() * 100 + "vw";


    effect.style.fontSize =
        12 +
        Math.random() * 24 +
        "px";


    effect.style.animationDuration =
        7 +
        Math.random() * 6 +
        "s";


    heartEffects.appendChild(
        effect
    );


    setTimeout(
        () => {

            effect.remove();

        },

        14000
    );

}


/* quantidade inicial */

setInterval(
    createFloatingHeart,
    700
);


/* =========================
   EXPLOSÃO DE CORAÇÕES
========================= */

function heartBurst(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "burst-heart";


        const symbols = [
            "♥",
            "♡",
            "❤",
            "💕",
            "✦"
        ];


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const x =
            Math.random() * 700 - 350;

        const y =
            Math.random() * 600 - 300;

        const rotation =
            Math.random() * 720 - 360;


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        heart.style.setProperty(
            "--r",
            rotation + "deg"
        );


        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },

            2000
        );

    }

}


/* =========================
   MAIS EFEITOS
========================= */

function increaseHearts(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 70
        );

    }

}


/* =========================
   BOTÃO SIM
========================= */

yesButton.addEventListener(
    "click",
    () => {


        /* PRIMEIRO SIM */

        if (questionLevel === 0) {

            questionLevel = 1;


            question.textContent =
                "Tem certeza?";


            description.textContent =
                "Certeza mesmo? ❤️";


            topHeart.textContent =
                "♥";


            heartBurst(20);

            increaseHearts(15);

            questionCard.classList.add(
                "stronger"
            );


            return;

        }


        /* SEGUNDO SIM */

        if (questionLevel === 1) {

            questionLevel = 2;


            question.textContent =
                "Absoluta??";


            description.textContent =
                "Essa é sua resposta final? 👀💕";


            yesButton.textContent =
                "SIM!! ❤️";


            heartBurst(35);

            increaseHearts(30);


            return;

        }


        /* TERCEIRO SIM */

        if (questionLevel === 2) {

            heartBurst(70);

            increaseHearts(60);


            question.textContent =
                "EU SABIAAA ❤️";


            description.textContent =
                "Então ainda tenho mais uma surpresa...";


            yesButton.style.display =
                "none";


            noButton.style.display =
                "none";


            setTimeout(
                () => {

                    window.location.href =
                        "aniversario.html";

                },

                1800
            );

        }

    }
);


/* =========================
   BOTÃO NÃO
========================= */

noButton.addEventListener(
    "click",
    () => {

        /*
        Navegadores normalmente não permitem
        fechar uma aba que foi aberta manualmente.
        Então primeiro tentamos fechar.
        */

        window.close();


        /*
        Caso o navegador impeça,
        a página fica encerrada visualmente.
        */

        setTimeout(
            () => {

                document.body.innerHTML = `
                
                    <div
                        style="
                            min-height:100vh;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            background:#17050b;
                            color:white;
                            font-family:Montserrat,sans-serif;
                            text-align:center;
                            padding:30px;
                        "
                    >

                        <div>

                            <div
                                style="
                                    font-size:55px;
                                    margin-bottom:20px;
                                "
                            >
                                💔
                            </div>

                            <h1
                                style="
                                    font-family:'Cormorant Garamond',serif;
                                    font-size:55px;
                                "
                            >
                                Página encerrada
                            </h1>

                        </div>

                    </div>
                
                `;

            },

            100
        );

    }
);