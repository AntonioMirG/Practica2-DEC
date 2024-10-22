function countLikns() {

    const enlaces = document.getElementsByTagName("a").length;
    console.log(enlaces);
}

countLikns()

function seeLinks() {

    const enlaces = document.getElementById("enlace3")

    const enlace = enlaces.href;

    console.log(enlace);
}

seeLinks()


function countLikns2() {

    const enlaces = document.getElementById("parrafo1")

    const enlaces2 = enlaces.getElementsByTagName("a").length;

    console.log(enlaces2);

}

countLikns2()


