// Initialization, you can leave this here to place this somewhere else
$(function(){
	$('ul.jd_menu').jdMenu();
	$(document).bind('click', function() {
		$('ul.jd_menu ul:visible').jdMenuHide();
	});
});
/*
 * jdMenu 1.2.1 (2007-02-20)
 * Copyright (c) 2006,2007 Jonathan Sharp (http://jdsharp.us)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * http://jdsharp.us/
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[(function(e){return d[e]})];e=(function(){return'\\w+'});c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(8($){6(!$.B.r){$.B.r=8(Z){7 a=[];$(5[0]).Y().m(8(){a.1t(5);v!$(5).b(Z)});v 5.1x(a,1c)}}7 O=1d;7 11=$.1e.1F;7 d=\'1f\';7 t=\'1g\';7 u=\'1h\';$.B.1b=8(){v 5.m(8(){$(5).P(d);N(5)})};$.B.1a=8(){v 5.m(8(){f(5)})};8 N(4){$(\'> 9\',4).1k(V,12).1m(\'p\',p)};8 U(4){$(\'> 9\',4).15(\'1n\').15(\'p\',p)};8 V(){7 c=$(5).n().b(\'.\'+d)?t:u;$(5).P(c).M(\'> a\').P(c);6(5.$i){J(5.$i)}5.$j=$(\'> 4\',5).j();6(5.$j>0){7 4=$(\'> 4\',5)[0];6(!$(4).b(\':k\')){5.$i=13(8(){6(!$(4).b(\':k\')){C(4)}},O)}}};8 12(){$(5).q(u).q(t).M(\'> a\').q(u).q(t);6(5.$i){J(5.$i)}6($(5).b(\':k\')&&5.$j>0){7 4=$(\'> 4\',5)[0];5.$i=13(8(){6($(4).b(\':k\')){f(4)}},O)}};8 C(4){$(4).n().n().M(\'> 9 > 4:k\').10(4).m(8(){f(5)});N(4);7 o=$(4).L();7 D=o.1q;7 A=o.1s;7 x=0,y=0;7 9=$(4).n();6($(9).r(\'4.\'+d).K(\'9\').j()==0){x=$(9).L($(9).Y(\'4.\'+d)[0]).G;y=$(9).14()}F{x=$(9).W()-(3*A);y=$(9).L($(9).n()).E+D}$(4).Q({G:x+\'g\',E:y+\'g\'}).C();6(11&&($(4).r(\'4.\'+d).K(\'9\').j()>0)){7 w=$(4).W();7 h=$(4).14();6($(\'> s\',4).j()==0){$(4).1y(\'</s>\').1z(\'<s R="1B: 1C; z-1E: -1;">\')}$(\'> s\',4).Q({18:\'0\',G:-A+\'g\',E:-D+\'g\',H:w+\'g\',T:h+\'g\'});6(!4.R.H||4.$S){4.$S=I;$(4).Q({H:w-(A*2)+\'g\',T:h-(D*2)+\'g\',1i:\'1j\'})}}};8 f(4,X){$(\'> 9 > 4:k\',4).m(8(){f(5,16)});6($(4).b(\'.\'+d)){v}U(4);$(4).f();$(\'> s\',4).1o();6(X==I){$(4).r(\'4.\'+d).q(u).q(t).10(\'.\'+d).K(\'4\').m(8(){f(5,16)})}};8 p(e){e.1D();6(5.$i){J(5.$i)}6(5.$j>0){7 4=$(\'> 4\',5)[0];6(!$(4).b(\':k\')){C(4)}}F{6($(e.17).b(\'9\')){7 l=$(\'> a\',5).1l(0);6(l!=1p){6(!l.1r){1u.1v(l.1A,l.17||\'19\')}F{$(l).p()}}}7 4=$(5).n();6(!$(4).b(\'.\'+d)){f(4,I)}}}})(1w);',62,104,'||||ul|this|if|var|function|li||is||CSSR||hide|px||timer|size|visible||each|parent||click|removeClass|ancestorsUntil|iframe|CSSB|CSSH|return|||||bl|fn|show|bt|top|else|left|width|true|clearTimeout|filter|offset|find|addEvents|DELAY|addClass|css|style|auto|height|removeEvents|hoverOver|outerWidth|recurse|parents|match|not|IFRAME|hoverOut|setTimeout|outerHeight|unbind|false|target|opacity|_self|jdMenuHide|jdMenu|arguments|150|browser|jd_menu_flag_root|jd_menu_hover_toolbar|jd_menu_hover|zIndex|100|hover|get|bind|mouseover|remove|undefined|borderTop|onclick|borderLeft|push|window|open|jQuery|pushStack|append|prepend|href|position|absolute|stopPropagation|index|msie'.split('|'),0,{}))
