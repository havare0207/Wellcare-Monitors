/*Lager et array kalt orderHistory*/

let orderHistory = [];

function sendMelding() {

    //Henter verdiene av variablene fra htmlfilen

    //lager et objekt med informasjonen:

    const billett = {
        phoneNumber : $("#phoneNumber").val(),
        email : $("#email").val(),
        tilbakemelding: $("#tilbakemelding").val(),
        terms : document.getElementById("terms").checked
    };

    //enten med jquery

    //eller med document.getElementById

    //const lastName = document.getElementById("lastName").value;
    const phoneNumber = $("#phoneNumber").val();
    //const phoneNumber = document.getElementById("phoneNumber").value;
    const email = $("#email").val();
    //const email = document.getElementById("email").value;

    const tilbakemelding = $("#tilbakemelding").val();

    const terms = $("#terms").val();
    //const terms = document.getElementById("terms").checked;


    //Skriver ut en alertmelding om et av feltene står tomme


    if (!phoneNumber) {
        //document.getElementById("feilmeldingphoneNumber").style.color = "red";
        document.getElementById("feilmeldingphoneNumber").innerHTML = "Fyll inn telefonnummeret ditt";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    } else if (phoneNumber) {
        document.getElementById("feilmeldingphoneNumber").innerHTML = "";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    }
    if (!email) {
        //document.getElementById("feilmeldingemail").style.color = "red";
        document.getElementById("feilmeldingemail").innerHTML = "Fyll inn emailen din";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    } else if (email) {
        document.getElementById("feilmeldingemail").innerHTML = "";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    }

    if (!tilbakemelding) {
        //document.getElementById("feilmeldingemail").style.color = "red";
        document.getElementById("feilmeldingtilbakemelding").innerHTML = "Skriv inn en tilbakemelding";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    } else if (email) {
        document.getElementById("feilmeldingtilbakemelding").innerHTML = "";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    }



    if (!terms) {
        //document.getElementById("feilmeldingterms").style.color = "red";
        document.getElementById("feilmeldingterms").innerHTML = "Kryss av for aa aksemptere vilkaarene og beingelsene vaare";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    } else if (terms) {
        document.getElementById("feilmeldingterms").innerHTML = "";
        document.getElementById("tilbakemeldingSendt").innerHTML = "";
    }

    if (phoneNumber, email, tilbakemelding, terms) {
        const order = {
            phoneNumber,
            email,
            tilbakemelding
        };


        //Legger til elementet til slutten av arrayet kalt orderHistory
        if (phoneNumber && email && tilbakemelding && terms) {
            orderHistory.push(order);
            document.getElementById("tilbakemeldingSendt").innerHTML = "Tilbakemelding sendt!"

            //Etter det er registrert en bestilling skal alle inputfelt "blankes"
            // slik at en ny billett kan registreres.


            document.getElementById("phoneNumber").value = "";
            document.getElementById("email").value = "";
            document.getElementById("tilbakemelding").value = "";
            document.getElementById("terms").checked = false;
        }

        let ut = "<table style = \"background-color: whitesmoke\">><tr><th>Telefonnr</th><th>Epost</th><th>Tilbakemelding</th></tr>"
        for (let order of orderHistory) {
            ut += "<tr><td>" + order.phoneNumber + "</td><td>" + order.email + "</td><td>" + order.tilbakemelding + "</td></tr>"
        }
        ut += "</table>";
        document.getElementById("orderList").innerHTML = ut;
        console.log(ut);

    }

    lagre(billett);
    hentAlle();

}

function formaterData(orderHistory) {
    let ut = "<table><tr><th>Telefonnr</th><th>Epost</th><th>Tilbakemelding</th></tr>"
    for (const order of orderHistory) {
        ut += "<tr><td>" + order.phoneNumber + "</td><td>" + order.email + "</td><td>" + order.tilbakemelding + "</td></tr>"
    }
    ut += "</table>";
    $("#orderList").innerHTML = ut;
    console.log(ut);
    //document.getElementById("orderList").innerHTML = ut;
}

function slettalle() {
    const order = {

        phoneNumber,
        email,
        tilbakemelding
    };

    i = 0;
    while (i < orderHistory.length) {
        orderHistory.pop(order); //husk at pop brukes for å fjerne elementer fra arrays, mens
        //push brukes for å legge til elementer i arrays.
    }
    i++;

    document.getElementById("tilbakemeldingSendt").innerHTML = "";
    document.getElementById("orderList").innerHTML = orderHistory;
    console.log(orderHistory);


    $.post("/slett", orderHistory, function () {
        hentAlle();
    });
}

function lagre(billett) {

    console.log(billett);
    $.post("/lagre", billett, function () {
        hentAlle();
    });
}

function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
}




