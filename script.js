/* =====================================================
   PARDIS WORLD
   Website interactions
===================================================== */


/* ---------- MAIN ELEMENTS ---------- */

const welcomeScreen = document.getElementById("welcomeScreen");
const mainWorld = document.getElementById("mainWorld");

const enterButton = document.getElementById("enterButton");
const leaveButton = document.getElementById("leaveButton");
const backToWelcome = document.getElementById("backToWelcome");


/* ---------- GATEWAY BUTTONS ---------- */

const friendshipButton =
    document.getElementById("friendshipButton");

const letterButton =
    document.getElementById("letterButton");

const musicButton =
    document.getElementById("musicButton");

const surpriseButton =
    document.getElementById("surpriseButton");


/* ---------- INNER PAGES ---------- */

const friendshipGarden =
    document.getElementById("friendshipGarden");

const secretLetter =
    document.getElementById("secretLetter");

const musicRoom =
    document.getElementById("musicRoom");

const surpriseRoom =
    document.getElementById("surpriseRoom");


/* ---------- BACK BUTTONS ---------- */

const backFromGarden =
    document.getElementById("backFromGarden");

const backFromLetter =
    document.getElementById("backFromLetter");

const backFromMusic =
    document.getElementById("backFromMusic");

const backFromSurprise =
    document.getElementById("backFromSurprise");


/* ---------- MUSIC ---------- */

const playMusic =
    document.getElementById("playMusic");

const magicAudio =
    document.getElementById("magicAudio");


/* ---------- SURPRISE ---------- */

const giftBox =
    document.getElementById("giftBox");

const surpriseMessage =
    document.getElementById("surpriseMessage");


/* =====================================================
   ENTER MAGIC
===================================================== */

enterButton.addEventListener("click", function () {

    welcomeScreen.classList.add("fade-out");

    setTimeout(function () {

        welcomeScreen.classList.add("hidden");

        mainWorld.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }, 700);

});


/* =====================================================
   LEAVE MAGIC
===================================================== */

leaveButton.addEventListener("click", function () {

    window.location.href = "about:blank";

});


/* =====================================================
   INNER PAGE CONTROL
===================================================== */

function hideAllInnerPages() {

    friendshipGarden.classList.add("hidden");
    secretLetter.classList.add("hidden");
    musicRoom.classList.add("hidden");
    surpriseRoom.classList.add("hidden");

}


/* ---------- OPEN INNER PAGE ---------- */

function openInnerPage(page) {

    mainWorld.classList.add("hidden");

    hideAllInnerPages();

    page.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =====================================================
   OPEN GARDEN
===================================================== */

friendshipButton.addEventListener("click", function () {

    openInnerPage(friendshipGarden);

});


/* =====================================================
   OPEN LETTER
===================================================== */

letterButton.addEventListener("click", function () {

    openInnerPage(secretLetter);

});


/* =====================================================
   OPEN MUSIC
===================================================== */

musicButton.addEventListener("click", function () {

    openInnerPage(musicRoom);

});


/* =====================================================
   OPEN SURPRISE
===================================================== */

surpriseButton.addEventListener("click", function () {

    openInnerPage(surpriseRoom);

});


/* =====================================================
   BACK TO DREAMLAND
===================================================== */

function backToDreamland() {

    hideAllInnerPages();

    mainWorld.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* ---------- GARDEN ---------- */

backFromGarden.addEventListener(
    "click",
    backToDreamland
);


/* ---------- LETTER ---------- */

backFromLetter.addEventListener(
    "click",
    backToDreamland
);


/* ---------- MUSIC ---------- */

backFromMusic.addEventListener(
    "click",
    function () {

        magicAudio.pause();

        magicAudio.currentTime = 0;

        playMusic.textContent = "? Play";

        backToDreamland();

    }
);


/* ---------- SURPRISE ---------- */

backFromSurprise.addEventListener(
    "click",
    backToDreamland
);


/* =====================================================
   BACK TO WELCOME
===================================================== */

backToWelcome.addEventListener("click", function () {

    hideAllInnerPages();

    mainWorld.classList.add("hidden");

    welcomeScreen.classList.remove("hidden");

    welcomeScreen.classList.remove("fade-out");

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

});


/* =====================================================
   MUSIC PLAYER
===================================================== */

playMusic.addEventListener("click", function () {

    if (magicAudio.paused) {

        magicAudio.play();

        playMusic.textContent = "? Pause";

    } else {

        magicAudio.pause();

        playMusic.textContent = "? Play";

    }

});


/* ---------- MUSIC ENDED ---------- */

magicAudio.addEventListener("ended", function () {

    playMusic.textContent = "? Play";

    magicAudio.currentTime = 0;

});


/* =====================================================
   SURPRISE GIFT
===================================================== */

giftBox.addEventListener("click", function () {

    giftBox.classList.add("opened");

    surpriseMessage.classList.remove("hidden");

    giftBox.textContent = "??";

});