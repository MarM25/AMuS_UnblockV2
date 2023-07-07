var tpl_header = ''

function remove_paywall(){
    var tpl_body = '<div class="v-A_-article__content " is-article-text="">__BODY__</div>'
    const result = document.documentElement.innerHTML.split(/\r?\n/);
    var graph_filtered = result.filter(name => name.includes('@graph'));
    var graph_filtered2 = graph_filtered[0].replace('</script><script id="schemaOrg" type="application/ld+json" data-nscript="beforeInteractive">', "");
    var graph_filtered3 = graph_filtered2.split("</script>");
    var texte = graph_filtered3[0];
    var amus_graph = JSON.parse(texte);
    var body = tpl_body.replace("__BODY__", amus_graph["@graph"][1]["articleBody"]).replace("<p>,</p>", "");
    var paywall = document.getElementById("upscore-paywall-placeholder");
    paywall.remove();
    document.getElementsByClassName("va-article-text")[0].insertAdjacentHTML("beforeend", body);
}

function kick_it(){
    setTimeout(() => {  remove_paywall(); }, 1000);
}

kick_it();
