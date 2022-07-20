function fetchQuote() {
    var XHR;
    var file ;

    //get selected quote
    let select = document.querySelector("#test").value;
    //chek the selector
    if (select == "option1") {
        file = "quotes/arQuotes.json";
    }  else if (select == "option2") {
        file = "quotes/arShaar.json";
    }
console.log(select);
    var colors = [
        "#188FA7",
        "#9DBBAE",
        "#82846D",
        "#474973",
        "#A69CAC",
        "#8B80F9",
        "#2364AA",
        "#8963BA",
        "#B97375",
        "#8F8389",
        "#4C2C69",
        "#42253B",
        "#EE4266",
        "#464D77"
    ];

    // alert("XHR.readyState");
    if (window.XMLHttpRequest) {
        XHR = new XMLHttpRequest();
    } else {
        XHR = new ActiveXObject("Microsoft.XMLHttp");
    }

    XHR.open("GET", file, true);

    XHR.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var quotes = JSON.parse(this.responseText);
            var randomQuote = getRandom(quotes);
            var randomColor = getRandom(colors);
            var quoteText = quotes[randomQuote].text;
            var quoteAuthor = quotes[randomQuote].author;

            document.getElementById('quotetext').innerText = quoteText;
            document.getElementById('quotesource').innerText = quoteAuthor;
            document.getElementById('quoteBody').style.borderRightColor = colors[randomColor];
            document.getElementById('newquote').style.backgroundColor = colors[randomColor];
            document.body.style.backgroundColor = colors[randomColor];
        }
    }
    XHR.send();
}

function getRandom(from) {
    return Math.floor(Math.random() * from.length);
}