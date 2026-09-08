/* =========================================================
   ELEMENTOS GERAIS
========================================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

const calendarGrid = document.getElementById("calendarGrid");

const monthName = document.getElementById("monthName");
const yearNumber = document.getElementById("yearNumber");

const previousMonth = document.getElementById("previousMonth");
const nextMonth = document.getElementById("nextMonth");

const specialGrid = document.getElementById("specialGrid");

const dateModal = document.getElementById("dateModal");
const closeModal = document.getElementById("closeModal");

const modalIcon = document.getElementById("modalIcon");
const modalDate = document.getElementById("modalDate");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const heartsContainer = document.getElementById("hearts-container");


/* =========================================================
   MENU MOBILE
========================================================= */

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}


/* =========================================================
   CONTADOR DO NAMORO
========================================================= */

const relationshipStart =
    new Date(2026, 8, 6, 0, 0, 0);


function updateRelationshipCounter() {

    const daysElement =
        document.getElementById("days");

    if (!daysElement) {
        return;
    }


    const now = new Date();

    let difference =
        now - relationshipStart;


    if (difference < 0) {

        difference = 0;

    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;

}


updateRelationshipCounter();

setInterval(
    updateRelationshipCounter,
    1000
);


/* =========================================================
   DATAS ESPECIAIS
========================================================= */

/*

    MESES NO JAVASCRIPT:

    Janeiro = 0
    Fevereiro = 1
    Março = 2
    Abril = 3
    Maio = 4
    Junho = 5
    Julho = 6
    Agosto = 7
    Setembro = 8
    Outubro = 9
    Novembro = 10
    Dezembro = 11

*/

const recurringSpecialDates = [

    {
        month: 5,
        day: 12,
        type: "valentines"
    },

    {
        month: 8,
        day: 6,
        type: "relationship"
    },

    {
        month: 8,
        day: 8,
        type: "jyovaniaBirthday"
    },

    {
        month: 10,
        day: 1,
        type: "kayronBirthday"
    }

];


/* =========================================================
   INFORMAÇÕES DAS DATAS
========================================================= */

function getSpecialDateInfo(
    year,
    month,
    day
) {


    /* =====================================================
       12 DE JUNHO
       DIA DOS NAMORADOS
    ===================================================== */

    if (
        month === 5 &&
        day === 12 &&
        year >= 2026
    ) {

        return {

            title:
                "Feliz Dia dos Namorados ❤️",

            icon:
                "💕",

            text:
                "12 de junho — mais um Dia dos Namorados para celebrar a nossa história. ❤️"

        };

    }



    /* =====================================================
       06 DE SETEMBRO
       ANIVERSÁRIO DE NAMORO
    ===================================================== */

    if (
        month === 8 &&
        day === 6 &&
        year >= 2026
    ) {

        if (year === 2026) {

            return {

                title:
                    "Nosso primeiro dia de namoro",

                icon:
                    "❤️",

                text:
                    "06 de setembro de 2026 — o primeiro dia da nossa história como namorados. ❤️"

            };

        }


        /*
            2027 = 2 anos
            2028 = 3 anos
            2029 = 4 anos
        */

        const relationshipYears =
            year - 2025;


        return {

            title:
                `Feliz aniversário de ${relationshipYears} ANOS amor!! ❤️`,

            icon:
                "❤️",

            text:
                `06 de setembro de ${year} — feliz aniversário de ${relationshipYears} ANOS amor!! ❤️`

        };

    }



    /* =====================================================
       08 DE SETEMBRO
       ANIVERSÁRIO DA JYOVÂNIA
    ===================================================== */

    if (
        month === 8 &&
        day === 8 &&
        year >= 2026
    ) {

        const jyovaniaAge =
            17 + (year - 2026);


        return {

            title:
                "Feliz aniversário meu amor ❤️",

            icon:
                "🎂",

            text:
                `Feliz aniversário meu amor ❤️ Hoje você faz ${jyovaniaAge} anos!`

        };

    }



    /* =====================================================
       01 DE NOVEMBRO
       ANIVERSÁRIO DO KAYRON
    ===================================================== */

    if (
        month === 10 &&
        day === 1 &&
        year >= 2026
    ) {

        const kayronAge =
            16 + (year - 2026);


        return {

            title:
                "Aniversário do Kayron 🎂",

            icon:
                "🎂",

            text:
                `01 de novembro de ${year} — Kayron faz ${kayronAge} anos.`

        };

    }


    return null;

}


/* =========================================================
   MODAL
========================================================= */

function openDateModal(
    year,
    month,
    day
) {

    if (!dateModal) {
        return;
    }


    const information =
        getSpecialDateInfo(
            year,
            month,
            day
        );


    if (!information) {
        return;
    }


    modalIcon.textContent =
        information.icon;


    modalDate.textContent =
        `${String(day).padStart(2, "0")}/${String(month + 1).padStart(2, "0")}/${year}`;


    modalTitle.textContent =
        information.title;


    modalText.textContent =
        information.text;


    dateModal.classList.add("open");

}


function closeDateModal() {

    if (!dateModal) {
        return;
    }


    dateModal.classList.remove("open");

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeDateModal
    );

}


if (dateModal) {

    dateModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === dateModal
            ) {

                closeDateModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeDateModal();

        }

    }
);


/* =========================================================
   CARDS DAS DATAS ESPECIAIS
========================================================= */

function renderSpecialCards(year) {

    if (!specialGrid) {
        return;
    }


    specialGrid.innerHTML = "";


    recurringSpecialDates.forEach(
        (specialDate) => {


            const information =
                getSpecialDateInfo(
                    year,
                    specialDate.month,
                    specialDate.day
                );


            if (!information) {
                return;
            }


            const card =
                document.createElement("article");


            card.className =
                "special-card";


            const formattedDay =
                String(
                    specialDate.day
                ).padStart(2, "0");


            const formattedMonth =
                String(
                    specialDate.month + 1
                ).padStart(2, "0");


            card.innerHTML = `

                <div class="date">
                    ${formattedDay}/${formattedMonth}/${year}
                </div>

                <div class="icon">
                    ${information.icon}
                </div>

                <h3>
                    ${information.title}
                </h3>

                <p>
                    ${information.text}
                </p>

            `;


            /*
                Também deixa os cards clicáveis.
            */

            card.style.cursor =
                "pointer";


            card.addEventListener(
                "click",
                () => {

                    openDateModal(
                        year,
                        specialDate.month,
                        specialDate.day
                    );

                }
            );


            specialGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   CALENDÁRIO
========================================================= */

let currentDate =
    new Date();


const months = [

    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"

];


function renderCalendar() {

    if (!calendarGrid) {
        return;
    }


    const year =
        currentDate.getFullYear();


    const month =
        currentDate.getMonth();


    monthName.textContent =
        months[month];


    yearNumber.textContent =
        year;


    calendarGrid.innerHTML =
        "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const totalDays =
        new Date(
            year,
            month + 1,
            0
        ).getDate();



    /* =====================================================
       ESPAÇOS VAZIOS
    ===================================================== */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement("div");


        emptyDay.className =
            "calendar-day empty";


        calendarGrid.appendChild(
            emptyDay
        );

    }



    /* =====================================================
       DATA DE HOJE
    ===================================================== */

    const today =
        new Date();



    /* =====================================================
       CRIAR DIAS
    ===================================================== */

    for (
        let day = 1;
        day <= totalDays;
        day++
    ) {

        const cell =
            document.createElement("button");


        cell.type =
            "button";


        cell.className =
            "calendar-day";


        cell.textContent =
            day;



        /* HOJE */

        if (

            today.getFullYear() === year &&

            today.getMonth() === month &&

            today.getDate() === day

        ) {

            cell.classList.add(
                "today"
            );

        }



        /* DATA ESPECIAL */

        const information =
            getSpecialDateInfo(
                year,
                month,
                day
            );


        if (information) {

            cell.classList.add(
                "special"
            );


            cell.title =
                information.title;


            cell.addEventListener(
                "click",
                () => {

                    openDateModal(
                        year,
                        month,
                        day
                    );

                }
            );

        }


        calendarGrid.appendChild(
            cell
        );

    }



    /*
        Atualiza os cards quando você
        muda de ano no calendário.
    */

    renderSpecialCards(year);

}


/* =========================================================
   BOTÕES DO CALENDÁRIO
========================================================= */

if (
    previousMonth &&
    nextMonth
) {

    previousMonth.addEventListener(
        "click",
        () => {

            currentDate =
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1
                );


            renderCalendar();

        }
    );


    nextMonth.addEventListener(
        "click",
        () => {

            currentDate =
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1
                );


            renderCalendar();

        }
    );

}


/* =========================================================
   AGORA SIM INICIA O CALENDÁRIO

   IMPORTANTE:
   ESTA PARTE FICA DEPOIS DO MODAL E DAS OUTRAS FUNÇÕES.
========================================================= */

renderCalendar();


/* =========================================================
   CORAÇÕES FLUTUANTES
   MAIS QUANTIDADE, MESMA VELOCIDADE
========================================================= */

function createHeart() {

    if (!heartsContainer) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    const hearts = [
        "♥",
        "♡",
        "✦"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        10 +
        Math.random() * 18 +
        "px";


    /* MESMA VELOCIDADE DE ANTES */

    heart.style.animationDuration =
        7 +
        Math.random() * 7 +
        "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },

        15000
    );

}


/* MAIS CORAÇÕES, SEM PARAR */

setInterval(
    createHeart,
    500
);