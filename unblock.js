//document.body.style.border = "5px solid red";
//var tpl_header = '<div class="v-A_-article__headline__container"><h2><span class="v-A_-subline v-A_-subline--article">__HEADLINE__</span><span class="v-A_-headline v-A_-headline__article--alpha" ga-track-vis="article.headline.vis" ga-track-vis-initialized="true">__ALTERNATIVE_HEADLINE__</span></h2></div>'

function remove_paywall(){
    var tpl_body = '<div class="v-A_-article__content " is-article-text="">__BODY__</div>'

    const result = document.body.innerHTML.split(/\r?\n/);
    filtered = result.filter(name => name.includes('@graph'));
    amus_graph = JSON.parse((filtered[0]).replace("</script>", ""));
    //var header = tpl_header.replace("__HEADLINE__", amus_graph["@graph"][1]["headline"]).replace("__ALTERNATIVE_HEADLINE__", amus_graph["@graph"][1]["alternativeHeadline"]);
    var body = tpl_body.replace("__BODY__", amus_graph["@graph"][1]["articleBody"]).replace("<p>,</p>", "");
    //document.getElementsByClassName("upscore-paywall-wrapper")[0].innerHTML = "";
    var x = document.getElementsByClassName("v-A_-article__content ")[0];
    x.remove();
    document.getElementsByClassName("v-A_-maincol")[0].insertAdjacentHTML("beforeend", body);
    //document.getElementsByClassName("v-A_-article__content ")[0].innerHTML = body;
    //console.log(old_text);
    //document.body.innerHTML == "<h1>PENIS</h1>";
    console.log(body);
    //console.log(amus_graph["@graph"][1]["articleBody"]);
}

function kick_it(){
    setTimeout(() => {  remove_paywall(); }, 1000);
}

kick_it();
