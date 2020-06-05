var btn = document.getElementById('btnTeste');
var linksUteis_ul1 = document.getElementById("linksUteis-ul1");
var linksUteis_ul2 = document.getElementById("linksUteis-ul2");
var linksUteis_ul3 = document.getElementById("linksUteis-ul3");
var btn_mostratudo1= document.getElementById("linksUteis-mostra1");
var btn_mostratudo2= document.getElementById("linksUteis-mostra2");
var btn_mostratudo3= document.getElementById("linksUteis-mostra3");

col1_links = ["Ajuda com a conta","Ajuda com os pagamentos","Opções de assinatura","Premium Familiar", "Premium Duo","Premium Universitário","Privacidade e Segurança","Para Anunciantes"];
col2_links = ["Tutoriais em Vídeo","Primeiros Passos","Playlists","Recursos", "Sistema e Configurações","Solução de Problemas"];
col3_links = ["Alto-falantes","TVs","Carros", "Video Games", "Smartwatches","Smart Displays","Assistente de Voz"];

//btn.onclick = cols_linksuteis;

function cols_linksuteis(){
        var cont =0;
        for(link of col1_links){
                var liEl = document.createElement('li');
                var aEl = document.createElement('a');
                var nodetext = document.createTextNode(link);

                if(cont>=5){
                        liEl.setAttribute("Class","linksUteis-list-li d-block d-md-none");
                }
                else liEl.setAttribute("Class","linksUteis-list-li");
                cont+=1;
                liEl.setAttribute("id","linksUteis-list-li1"+cont);

                //liEl.setAttribute("Class","linksUteis-list-li");
                aEl.setAttribute("Class","linksUteis-list-li-a");
                aEl.setAttribute("href","#");

                aEl.appendChild(nodetext);
                liEl.appendChild(aEl);
                linksUteis_ul1.appendChild(liEl);
                
                //console.log(cont);
        }

        cont=0;

        for(link of col2_links){
                var liEl = document.createElement('li');
                var aEl = document.createElement('a');
                var nodetext = document.createTextNode(link);

                if(cont>=5){
                        liEl.setAttribute("Class","linksUteis-list-li d-block d-md-none");
                }
                else liEl.setAttribute("Class","linksUteis-list-li");

                cont+=1;
                liEl.setAttribute("id","linksUteis-list-li2"+cont);

                //liEl.setAttribute("Class","linksUteis-list-li");
                aEl.setAttribute("Class","linksUteis-list-li-a");
                aEl.setAttribute("href","#");

                aEl.appendChild(nodetext);
                liEl.appendChild(aEl);
                linksUteis_ul2.appendChild(liEl);
                
                //console.log(cont);
        }

        cont=0;
        for(link of col3_links){
                var liEl = document.createElement('li');
                var aEl = document.createElement('a');
                var nodetext = document.createTextNode(link);

                if(cont>=5){
                        liEl.setAttribute("Class","linksUteis-list-li d-block d-md-none");
                }
                else liEl.setAttribute("Class","linksUteis-list-li");

                cont+=1;
                liEl.setAttribute("id","linksUteis-list-li3"+cont);

                //liEl.setAttribute("Class","linksUteis-list-li");
                aEl.setAttribute("Class","linksUteis-list-li-a");
                aEl.setAttribute("href","#");

                aEl.appendChild(nodetext);
                liEl.appendChild(aEl);
                linksUteis_ul3.appendChild(liEl);
                
                //console.log(cont);
        }
}

function mostratudo_linksuteis1(){
        var itensUl = linksUteis_ul1.getElementsByTagName("li");
        for(var i=0;i<itensUl.length;i++){
                var li = document.getElementById("linksUteis-list-li1"+(i+1));
                li.setAttribute("Class","linksUteis-list-li");
        }
        btn_mostratudo1.remove();
}

function mostratudo_linksuteis2(){
        var itensUl = linksUteis_ul2.getElementsByTagName("li");
        for(var i=0;i<itensUl.length;i++){
                var li = document.getElementById("linksUteis-list-li2"+(i+1));
                li.setAttribute("Class","linksUteis-list-li");
        }
        btn_mostratudo2.remove();
}

function mostratudo_linksuteis3(){
        var itensUl = linksUteis_ul3.getElementsByTagName("li");
        for(var i=0;i<itensUl.length;i++){
                var li = document.getElementById("linksUteis-list-li3"+(i+1));
                li.setAttribute("Class","linksUteis-list-li");
        }
        btn_mostratudo3.remove();
}

btn_mostratudo1.onclick=mostratudo_linksuteis1;
btn_mostratudo2.onclick=mostratudo_linksuteis2;
btn_mostratudo3.onclick=mostratudo_linksuteis3;
cols_linksuteis();
