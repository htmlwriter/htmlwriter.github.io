function check() {
if (document.bg.bgcolor.value == "" || document.bg.bgmarginbottom.value == "" || document.bg.bgmarginleft.value == "" || document.bg.bgmarginright.value == "" || document.bg.bgmargintop.value == "" || document.fnt.fontcolor.value == "" || document.fnt.fontsize.value == "" || document.fnt.fontface.value == "" || document.fnt.fontfamily.value == "" || document.fnt.fontalign.value == "") {
document.getElementById("correction").innerHTML = "Please fill out all non-optional fields.";
} else {
	document.getElementById("correction").innerHTML = "Generating...";
	generate();
}
}
function generate() {
	var bgcolor;
	var bgimage;
	var bgmargin;
	var fontcolor;
	var fontfamily;
	var fontsize;
	var fontalign;
	var pcolor;
	var pbgcolor;
	var pfloat;	
	var pfamily;
	var psize;
	var ppadding = "padding: ";
	var pmargin = "margin: ";
// Optional Variables
if (document.bg.bgimage.value == "") {
	bgimage = "";
} else {
bgimage = "background-image: url('" + document.bg.bgimage.value; + "');";
}
if (document.p.pcolor.value == "") {
 pcolor = "";
} else {
	pcolor = "color: " + document.p.pcolor.value + ";";
}
if (document.p.pbgcolor.value == "") {
 pbgcolor = "";
} else {
	pbgcolor = "background-color: " + document.p.pbgcolor.value + ";";
}
if (document.p.psize.value == "") {
 psize = "";
} else {
	psize = "font-size: " + document.p.psize.value + "px;";
}
if (document.p.pfloat.value == "") {
 pfloat = "";
} else {
	pfloat = "float: " + document.p.pfloat.value + ";";
}
if (document.p.pface.value == "" || document.p.pfamily.value == "") {
 pfamily = "";
} else {
	pfamily = "font-family: " + document.p.pface.value + ", " + document.p.pfamily.value + ";";
}
if (document.p.ppaddingTop.value == "") {
 ppadding += "";
} else {
	ppadding += document.p.ppaddingTop.value + "px ";
}
if (document.p.ppaddingRight.value == "") {
 ppadding += "";
} else {
	ppadding += document.p.ppaddingRight.value + "px ";
}
if (document.p.ppaddingBottom.value == "") {
 ppadding += "";
} else {
	ppadding += document.p.ppaddingBottom.value + "px ";
}
if (document.p.ppaddingLeft.value == "") {
 ppadding += "";
} else {
	ppadding += document.p.ppaddingLeft.value + "px";
}
ppadding += ";";
if (document.p.pmargintop.value == "") {
 pmargin += "";
} else {
	pmargin += document.p.pmargintop.value + "px ";
}
if (document.p.pmarginright.value == "") {
 pmargin += "";
} else {
	pmargin += document.p.pmarginright.value + "px ";
}
if (document.p.pmarginbottom.value == "") {
 pmargin += "";
} else {
	pmargin += document.p.pmarginbottom.value + "px ";
}
if (document.p.pmarginleft.value == "") {
 pmargin += "";
} else {
	pmargin += document.p.pmarginleft.value + "px";
}
pmargin += ";";
// Non optional variables
bgcolor = "background-color: "+document.bg.bgcolor.value + ";";
bgmargin = "margin: " + document.bg.bgmargintop.value + "px " + document.bg.bgmarginright.value + "px " + document.bg.bgmarginbottom.value + "px " + document.bg.bgmarginleft.value + "px;";
fontcolor = "color: " + document.fnt.fontcolor.value + ";";
fontfamily = "family: " + document.fnt.fontface.value + " , " + document.fnt.fontfamily.value + ";"; 
fontsize = "size: " + document.fnt.fontsize.value + "px;";
fontalign = "align: " + document.fnt.fontalign.value + ";";
// css lines
var bg = "body {"+bgcolor+" "+bgimage+" "+bgmargin+ "}";
var font = "font {"+fontcolor+" "+fontfamily+" "+fontsize+" "+fontalign+"}";
var p = "p {"+pcolor+" "+pbgcolor+" "+pfamily+" "+pfloat+" "+psize+ " "+ppadding+" "+pmargin+"}";
document.getElementById("correction").innerHTML = "";
document.getElementById("script").innerHTML = bg + "<br>" + font + "<br>" + p; 
}







