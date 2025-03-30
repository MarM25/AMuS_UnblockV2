//alert("PENIS");


var tpl_header = ''

function remove_paywall(){
    var tpl_body = '<div>__BODY__</div>'
    const result = document.documentElement.innerHTML.split(/\r?\n/);
    var graph_filtered = result.filter(name => name.includes('@graph'));
    var graph_filtered2 = graph_filtered[0].replace('</script><script id="schemaOrg" type="application/ld+json" data-nscript="beforeInteractive">', "");
    var graph_filtered3 = graph_filtered2.split("</script>");
    var texte = graph_filtered3[0];
    var amus_graph = JSON.parse(texte);    
    var body = tpl_body.replace("__BODY__", amus_graph["@graph"][1]["articleBody"]).replace("<p>,</p>", "");
    document.getElementById("maincol_article").innerHTML = "";

    var div1 = document.createElement("div");
    div1.className = "va-maincol lg:relative mx-auto w-full  lg:w-maincol";
    var div2 = document.createElement("div");
    div2.className = "w-full"
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    var div5 = document.createElement("div");
    div5.className = "va-article-text font-skin-primary text-base float-none clear-both text_article-text__StdsF text_text-color__jPPGo text_highlight-color__KmUP6 text_text-general__7AZaE text_encode__Fef2f text_not-lato__ve_io va-has-paywall";
    div5.style.position = "relative";
    div5.innerHTML = body;

    div4.appendChild(div5);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    //
    //// An das Ziel-Element anhängen
    document.getElementById("maincol_article").appendChild(div1);
    //////document.querySelectorAll(".articleBody").forEach(el => el.remove());

}

function kick_it(){
    setTimeout(() => {  remove_paywall(); }, 1000);
}

kick_it();