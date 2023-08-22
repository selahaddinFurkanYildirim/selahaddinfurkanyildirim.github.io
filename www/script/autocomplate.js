
var words=["select language"];
const onerilenkelimeler=document.getElementById("kelimeler");
const metinler=document.getElementById("textcode");
var dil=document.getElementById("dil").value;
function getCursorPos(input) {
    if ("selectionStart" in input && document.activeElement == input) {
        return {
            start: input.selectionStart,
            end: input.selectionEnd
        };
    }
    else if (input.createTextRange) {
        var sel = document.selection.createRange();
        if (sel.parentElement() === input) {
            var rng = input.createTextRange();
            rng.moveToBookmark(sel.getBookmark());
            for (var len = 0;
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                len++;
            }
            rng.setEndPoint("StartToStart", input.createTextRange());
            for (var pos = { start: 0, end: len };
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                pos.start++;
                pos.end++;
            }
            return pos;
        }
    }
    return -1;
}
var activeselected=-1;
var ali=[];
basilitus="";
var start;
var end;
window.onkeydown=function(olay){
    if(document.getElementById("dil").value!=dil){
        dil=document.getElementById("dil").value;
        if(dil=="cpp"){
            words=cppauto;
        }
        if(dil=="py"){
            words=pyauto;
        }
        if(dil=="sh"){
            words=shauto;
        }
    }
    if(olay.keyCode==37){
        basilitus="sol";
    }
    if(olay.keyCode==9){
        basilitus="tab";
    }
    else if(olay.keyCode==38){
        basilitus="ust";
    }
    else if(olay.keyCode==39){
        basilitus="sag";
    }
    else if(olay.keyCode==40){
        basilitus="alt";
    }
    else if(olay.keyCode==13){
        basilitus="enter";
    }
    else{
        basilitus="else";
    }
}
window.addEventListener("keydown", function(e) {
    if(document.activeElement!=metinler) return;
    if(document.activeElement==metinler){
        if(e.ctrlKey && (e.which == 83)) {
            e.preventDefault();
            return false;
        }
        if(activeselected!=-1){
            if([38].indexOf(e.keyCode) > -1){
                e.preventDefault();
                activeselected--;
            }
            if([40].indexOf(e.keyCode) > -1){
                e.preventDefault();
                activeselected++;
            }
            if(activeselected>ali.length-1) activeselected=ali.length-1;
        }
        if(e.key=='{') {
            e.preventDefault();
            metinler.value[end+1]="";
            var metin=metinler.value;
            var pos=getCursorPos(metinler);
            metinler.value=metin.substring(0,pos.end)+("{}")+metin.substring(pos.end,metin.length);
            metinler.selectionEnd=pos.end+1;
            metinler.selectionStart=pos.start+1;
        }
        if(e.key=='(') {
            e.preventDefault();
            metinler.value[end+1]="";
            var metin=metinler.value;
            var pos=getCursorPos(metinler);
            metinler.value=metin.substring(0,pos.end)+("()")+metin.substring(pos.end,metin.length);
            metinler.selectionEnd=pos.end+1;
            metinler.selectionStart=pos.start+1;
        }
        if(e.key=='"') {
            e.preventDefault();
            metinler.value[end+1]="";
            var metin=metinler.value;
            var pos=getCursorPos(metinler);
            metinler.value=metin.substring(0,pos.end)+('""')+metin.substring(pos.end,metin.length);
            metinler.selectionEnd=pos.end+1;
            metinler.selectionStart=pos.start+1;
        }
        if([9].indexOf(e.keyCode) > -1){
            e.preventDefault();
            metinler.value[end+1]="";
            var metin=metinler.value;
            var pos=getCursorPos(metinler);
            metinler.value=metin.substring(0,pos.end)+("    ")+metin.substring(pos.end,metin.length);
            metinler.selectionEnd=pos.end+4;
            metinler.selectionStart=pos.start+4;
        }
        else if([13].indexOf(e.keyCode) > -1 && document.activeElement==metinler && getCursorPos(metinler).start==getCursorPos(metinler).end){
            basilitus="enter";
            if(activeselected!=-1){
                e.preventDefault();
                metinler.value[end+1]="";
                var metin=metinler.value;
                var pos=getCursorPos(metinler);
                metin=metinler.value;
                pos.start-=1;
                pos.end--;
                while(metinler.value[pos.start]!=' ' && metinler.value[pos.start]!='\n' && pos.start>0) pos.start--;
                if(metinler.value[pos.start]==' ' || metinler.value[pos.start]=='\n') pos.start++;
                metinler.value=metin.substring(0,pos.start)+(words[ali[activeselected]]);
                var artis=0;
                if(words[ali[activeselected]][words[ali[activeselected]].length-1]=='('){
                    metinler.value+=')';
                }
                if(words[ali[activeselected]][words[ali[activeselected]].length-1]=='{'){
                    metinler.value+="\n";
                    var metin2="";
                    for (let i = pos.start; i > 0; i--) {
                        if(metinler.value[i]=="\n"){
                            i++;
                            while (metinler.value[i]==' ') {
                                i++;
                                metin2+=" ";
                            }
                            break;
                        }
                    }
                    metinler.value+=metin2+'    \n'+metin2+'}';
                    artis=5+metin2.length;
                }
                if(words[ali[activeselected]][words[ali[activeselected]].length-4]=='t' && words[ali[activeselected]][words[ali[activeselected]].length-3]=='h' && words[ali[activeselected]][words[ali[activeselected]].length-2]=='e' && words[ali[activeselected]][words[ali[activeselected]].length-1]=='n'){
                    metinler.value+="\n";
                    var metin2="";
                    for (let i = pos.start; i > 0; i--) {
                        if(metinler.value[i]=="\n"){
                            i++;
                            while (metinler.value[i]==' ') {
                                i++;
                                metin2+=" ";
                            }
                            break;
                        }
                    }
                    metinler.value+=metin2+'    \n'+metin2+'fi';
                    artis=5+metin2.length;
                }
                if(words[ali[activeselected]][words[ali[activeselected]].length-2]=='d' && words[ali[activeselected]][words[ali[activeselected]].length-1]=='o'){
                    metinler.value+="\n";
                    var metin2="";
                    for (let i = pos.start; i > 0; i--) {
                        if(metinler.value[i]=="\n"){
                            i++;
                            while (metinler.value[i]==' ') {
                                i++;
                                metin2+=" ";
                            }
                            break;
                        }
                    }
                    metinler.value+=metin2+'    \n'+metin2+'done';
                    artis=5+metin2.length;
                }
                if(words[ali[activeselected]][words[ali[activeselected]].length-1]==':'){
                    metinler.value+="\n";
                    var metin2="";
                    for (let i = pos.start; i > 0; i--) {
                        if(metinler.value[i]=="\n"){
                            i++;
                            while (metinler.value[i]==' ') {
                                i++;
                                metin2+=" ";
                            }
                            break;
                        }
                    }
                    metinler.value+=metin2+'    ';
                    artis=5+metin2.length;
                }
                metinler.value+=metin.substring(pos.end+1,metin.length);
                metinler.selectionEnd=pos.start+words[ali[activeselected]].length+artis;
                metinler.selectionStart=pos.start+words[ali[activeselected]].length+artis;
                activeselected=-1;
            }
            else{
                e.preventDefault();
                metinler.value[end+1]="";
                var metin=metinler.value;
                var pos=getCursorPos(metinler);
                metin=metinler.value;
                pos.start--;
                pos.end--;
                var artis=0;
                while(metinler.value[pos.start]!='\n' && pos.start>0) pos.start--;
                metinler.value=metin.substring(0,pos.end+1);
                metinler.value+="\n";
                var metin2="";
                for (let i = pos.start; i > 0; i--) {
                    if(metinler.value[i]=="\n"){
                        i++;
                        while (metinler.value[i]==' ') {
                            i++;
                            metin2+=" ";
                        }
                        break;
                    }
                }
                if(metin[pos.end]=='{'){
                    metin2+="    ";
                }
                if(metin[pos.end]==':'){
                    metin2+="    ";
                }
                metinler.value+=metin2;
                artis=1+metin2.length;
                if(metin[pos.end+1]=='}'){
                    metin=metin.substring(0,pos.end+1)+"\n"+metin2.substring(0,metin2.length-4)+metin.substring(pos.end+1,metin.length);
                }
                metinler.value+=metin.substring(pos.end+1,metin.length);
                metinler.selectionEnd=pos.end+artis+1;
                metinler.selectionStart=pos.end+artis+1;
            }
        }
        if([38,40].indexOf(e.keyCode)<0){
            activeselected=-1;
        }
    }
}, false);
metinler.onkeyup=function(){
    onerilenkelimeler.innerHTML="";
    var pos=getCursorPos(metinler);
    pos.end--;
    pos.start--;
    for(end=pos.end;end<metinler.value.length && (metinler.value[end]!=' ' && metinler.value[end]!='\n');end++);
    for(start=pos.start;start>0 && (metinler.value[start]!=' ' && metinler.value[start]!='\n');start--);
    if(metinler.value[end]==' ' || metinler.value[end]=='\n') end--;
    if(metinler.value[start]==' ' || metinler.value[start]=='\n') start++;
    const search = metinler.value.substring(start,end+1);
    if(search=="") return;
    ali=[];
    for (let index = 0; index < words.length; index++) {
        if (search.length > words[index].length) continue;
        let isOk=1;
        for (let ind = 0; ind < search.length; ind++) {
            if(words[index][ind]!=search[ind]) isOk=0;
        }
        if(isOk) ali.push(index);
    }
    for (let index = 0; index < ali.length; index++) {
        if(index==activeselected || (activeselected<0 && index==0) || (activeselected>ali.length && index==ali.length-1)){
            onerilenkelimeler.innerHTML = onerilenkelimeler.innerHTML+"<div style='color:blue;'>"+words[ali[index]]+"<br></div>";
            activeselected=index;
        }
        else onerilenkelimeler.innerHTML = onerilenkelimeler.innerHTML+words[ali[index]]+"<br>";
    }
    if(ali.length==0){
        activeselected=-1;
    }
}