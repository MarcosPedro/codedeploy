/*!   GeneXus C# 16_0_9-140712 on 6/15/2020 9:43:50.82
*/
gx.evt.autoSkip=!1;gx.define("agendacliww",!1,function(){var t,n;this.ServerClass="agendacliww";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A32ContatosCodUsu=gx.fn.getControlValue("CONTATOSCODUSU");this.AV17contatosCodusu=gx.fn.getControlValue("vCONTATOSCODUSU");this.AV19registros=gx.fn.getIntegerValue("vREGISTROS",".");this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV17contatosCodusu=gx.fn.getControlValue("vCONTATOSCODUSU");this.AV19registros=gx.fn.getIntegerValue("vREGISTROS",".");this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV16agendaData=gx.fn.getDateValue("vAGENDADATA");this.AV15ContatosCod=gx.fn.getControlValue("vCONTATOSCOD")};this.Valid_Contatoscod=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Contatoscod",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("CONTATOSCOD",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Contatoscod=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Contatoscod",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("CONTATOSCOD",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e180l2_client=function(){return this.clearMessages(),this.AV15ContatosCod=this.A4ContatosCod,this.AV16agendaData=this.A7AgendaData,this.call("abordagemweb.aspx",[this.A4ContatosCod,this.A7AgendaData]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e140l2_client=function(){return this.executeServerEvent("'FIRSTPAGE'",!0,arguments[0],!1,!1)};this.e150l2_client=function(){return this.executeServerEvent("'PREVIOUSPAGE'",!0,arguments[0],!1,!1)};this.e160l2_client=function(){return this.executeServerEvent("'NEXTPAGE'",!0,arguments[0],!1,!1)};this.e170l2_client=function(){return this.executeServerEvent("'LASTPAGE'",!0,arguments[0],!1,!1)};this.e190l2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e200l2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,51,52];this.GXLastCtrlId=52;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"agendacliww",[],!0,3,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!0,[1,2,3,3],!1,0,!1,!1);n=this.GridContainer;n.startDiv(16,"Unnamedtablefsgrid","0px","0px");n.startDiv(17,"","0px","0px");n.startDiv(18,"","0px","0px");n.startDiv(19,"Tablecard","0px","0px");n.startDiv(20,"","0px","0px");n.startDiv(21,"","0px","0px");n.startDiv(22,"Tablecontent","0px","0px");n.startDiv(23,"","0px","0px");n.startDiv(24,"","0px","0px");n.startTable("Tabletopinfo",25,"0px");n.startRow("","","","","","");n.startCell("","","","","","","","","","");n.addBitmap("Calendar","CALENDAR",28,0,"px",0,"px",null,"","","Image","");n.endCell();n.startCell("","","","","","","","","","");n.startDiv(30,"Tabletitle","0px","0px");n.startDiv(31,"","0px","0px");n.startDiv(32,"","0px","0px");n.startDiv(33,"","0px","0px");n.addLabel();n.addSingleLineEdit(7,34,"AGENDADATA","","","AgendaData","date",10,"chr",10,10,"right",null,[],7,"AgendaData",!0,0,!1,!1,"SimpleCardAttributeTitle",1,"");n.endDiv();n.endDiv();n.endDiv();n.startDiv(35,"","0px","0px");n.startDiv(36,"","0px","0px");n.startDiv(37,"","0px","0px");n.addLabel();n.addSingleLineEdit(59,38,"CONTATOSNOME","","","ContatosNome","char",60,"chr",60,60,"left",null,[],59,"ContatosNome",!0,0,!1,!1,"SimpleCardAttributeSubtitle",1,"");n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.endCell();n.endRow();n.endTable();n.endDiv();n.endDiv();n.startDiv(39,"","0px","0px");n.startDiv(40,"","0px","0px");n.startDiv(41,"","0px","0px");n.addLabel();n.addMultipleLineEdit(36,42,"AGENDAOBJETIVO","","AgendaObjetivo","svchar",80,"chr",7,"row","500",500,"left",null,!0,!1,0,"");n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.startDiv(43,"","0px","0px");n.startDiv(44,"","0px","0px");n.addButton(45,"BTNABORDAGEM","standard","'","e180l2_client");n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.endDiv();n.startDiv(46,"","0px","0px");n.startDiv(47,"","0px","0px");n.startTable("Unnamedtablecontentfsgrid",48,"0px");n.startRow("","","","","","");n.startCell("","","","","","","","","","");n.startDiv(51,"","0px","0px");n.addLabel();n.addSingleLineEdit(4,52,"CONTATOSCOD","","","ContatosCod","char",10,"chr",10,10,"left",null,[],4,"ContatosCod",!0,0,!1,!1,"Attribute",1,"");n.endDiv();n.endCell();n.endRow();n.endTable();n.endDiv();n.endDiv();n.endDiv();this.GridContainer.emptyText="";this.setGrid(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TBREGISTROS",format:0,grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[16]={id:16,fld:"UNNAMEDTABLEFSGRID",grid:15};t[17]={id:17,fld:"",grid:15};t[18]={id:18,fld:"",grid:15};t[19]={id:19,fld:"TABLECARD",grid:15};t[20]={id:20,fld:"",grid:15};t[21]={id:21,fld:"",grid:15};t[22]={id:22,fld:"TABLECONTENT",grid:15};t[23]={id:23,fld:"",grid:15};t[24]={id:24,fld:"",grid:15};t[25]={id:25,fld:"TABLETOPINFO",grid:15};t[28]={id:28,fld:"CALENDAR",grid:15};t[30]={id:30,fld:"TABLETITLE",grid:15};t[31]={id:31,fld:"",grid:15};t[32]={id:32,fld:"",grid:15};t[33]={id:33,fld:"",grid:15};t[34]={id:34,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AGENDADATA",gxz:"Z7AgendaData",gxold:"O7AgendaData",gxvar:"A7AgendaData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A7AgendaData=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z7AgendaData=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("AGENDADATA",n||gx.fn.currentGridRowImpl(15),gx.O.A7AgendaData,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A7AgendaData=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("AGENDADATA",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[35]={id:35,fld:"",grid:15};t[36]={id:36,fld:"",grid:15};t[37]={id:37,fld:"",grid:15};t[38]={id:38,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTATOSNOME",gxz:"Z59ContatosNome",gxold:"O59ContatosNome",gxvar:"A59ContatosNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A59ContatosNome=n)},v2z:function(n){n!==undefined&&(gx.O.Z59ContatosNome=n)},v2c:function(n){gx.fn.setGridControlValue("CONTATOSNOME",n||gx.fn.currentGridRowImpl(15),gx.O.A59ContatosNome,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A59ContatosNome=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONTATOSNOME",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[39]={id:39,fld:"",grid:15};t[40]={id:40,fld:"",grid:15};t[41]={id:41,fld:"",grid:15};t[42]={id:42,lvl:2,type:"svchar",len:500,dec:0,sign:!1,ro:1,isacc:0,multiline:!0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AGENDAOBJETIVO",gxz:"Z36AgendaObjetivo",gxold:"O36AgendaObjetivo",gxvar:"A36AgendaObjetivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A36AgendaObjetivo=n)},v2z:function(n){n!==undefined&&(gx.O.Z36AgendaObjetivo=n)},v2c:function(n){gx.fn.setGridControlValue("AGENDAOBJETIVO",n||gx.fn.currentGridRowImpl(15),gx.O.A36AgendaObjetivo,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A36AgendaObjetivo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AGENDAOBJETIVO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};t[43]={id:43,fld:"",grid:15};t[44]={id:44,fld:"",grid:15};t[45]={id:45,fld:"BTNABORDAGEM",grid:15,evt:"e180l2_client"};t[46]={id:46,fld:"",grid:15};t[47]={id:47,fld:"",grid:15};t[48]={id:48,fld:"UNNAMEDTABLECONTENTFSGRID",grid:15};t[51]={id:51,fld:"",grid:15};t[52]={id:52,lvl:2,type:"char",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Contatoscod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTATOSCOD",gxz:"Z4ContatosCod",gxold:"O4ContatosCod",gxvar:"A4ContatosCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A4ContatosCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z4ContatosCod=n)},v2c:function(n){gx.fn.setGridControlValue("CONTATOSCOD",n||gx.fn.currentGridRowImpl(15),gx.O.A4ContatosCod,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A4ContatosCod=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONTATOSCOD",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};this.Z7AgendaData=gx.date.nullDate();this.O7AgendaData=gx.date.nullDate();this.Z59ContatosNome="";this.O59ContatosNome="";this.Z36AgendaObjetivo="";this.O36AgendaObjetivo="";this.Z4ContatosCod="";this.O4ContatosCod="";this.A32ContatosCodUsu="";this.A7AgendaData=gx.date.nullDate();this.A59ContatosNome="";this.A36AgendaObjetivo="";this.A4ContatosCod="";this.AV17contatosCodusu="";this.AV19registros=0;this.AV22Pgmname="";this.AV16agendaData=gx.date.nullDate();this.AV15ContatosCod="";this.Events={e140l2_client:["'FIRSTPAGE'",!0],e150l2_client:["'PREVIOUSPAGE'",!0],e160l2_client:["'NEXTPAGE'",!0],e170l2_client:["'LASTPAGE'",!0],e190l2_client:["ENTER",!0],e200l2_client:["CANCEL",!0],e180l2_client:["'DOABORDAGEM'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:'gx.fn.getCtrlProperty("CONTATOSCOD","Visible")',ctrl:"CONTATOSCOD",prop:"Visible"},{av:"A32ContatosCodUsu",fld:"CONTATOSCODUSU",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV17contatosCodusu",fld:"vCONTATOSCODUSU",pic:"",hsh:!0},{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:'gx.fn.getCtrlProperty("TBREGISTROS","Caption")',ctrl:"TBREGISTROS",prop:"Caption"}]];this.EvtParms.START=[[{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV17contatosCodusu",fld:"vCONTATOSCODUSU",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("TABLECONTENT","Height")',ctrl:"TABLECONTENT",prop:"Height"},{av:'gx.fn.getCtrlProperty("CONTATOSCOD","Visible")',ctrl:"CONTATOSCOD",prop:"Visible"},{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms["'FIRSTPAGE'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17contatosCodusu",fld:"vCONTATOSCODUSU",pic:"",hsh:!0},{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("CONTATOSCOD","Visible")',ctrl:"CONTATOSCOD",prop:"Visible"}],[]];this.EvtParms["'PREVIOUSPAGE'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17contatosCodusu",fld:"vCONTATOSCODUSU",pic:"",hsh:!0},{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("CONTATOSCOD","Visible")',ctrl:"CONTATOSCOD",prop:"Visible"}],[]];this.EvtParms["'NEXTPAGE'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17contatosCodusu",fld:"vCONTATOSCODUSU",pic:"",hsh:!0},{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("CONTATOSCOD","Visible")',ctrl:"CONTATOSCOD",prop:"Visible"}],[]];this.EvtParms["'LASTPAGE'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17contatosCodusu",fld:"vCONTATOSCODUSU",pic:"",hsh:!0},{av:"AV19registros",fld:"vREGISTROS",pic:"ZZZ9",hsh:!0},{av:"AV22Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("CONTATOSCOD","Visible")',ctrl:"CONTATOSCOD",prop:"Visible"}],[]];this.EvtParms["'DOABORDAGEM'"]=[[{av:"A4ContatosCod",fld:"CONTATOSCOD",pic:""},{av:"A7AgendaData",fld:"AGENDADATA",pic:"",hsh:!0}],[]];this.EvtParms.VALID_CONTATOSCOD=[[],[]];this.setVCMap("A32ContatosCodUsu","CONTATOSCODUSU",0,"char",10,0);this.setVCMap("AV17contatosCodusu","vCONTATOSCODUSU",0,"char",10,0);this.setVCMap("AV19registros","vREGISTROS",0,"int",4,0);this.setVCMap("AV22Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV17contatosCodusu","vCONTATOSCODUSU",0,"char",10,0);this.setVCMap("AV19registros","vREGISTROS",0,"int",4,0);this.setVCMap("AV22Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV16agendaData","vAGENDADATA",0,"date",8,0);this.setVCMap("AV15ContatosCod","vCONTATOSCOD",0,"char",10,0);this.setVCMap("AV17contatosCodusu","vCONTATOSCODUSU",0,"char",10,0);this.setVCMap("AV19registros","vREGISTROS",0,"int",4,0);this.setVCMap("AV22Pgmname","vPGMNAME",0,"char",129,0);n.addRefreshingVar({rfrVar:"AV17contatosCodusu"});n.addRefreshingVar({rfrVar:"AV19registros"});n.addRefreshingVar({rfrVar:"AV22Pgmname"});n.addRefreshingVar({rfrVar:"A4ContatosCod",rfrProp:"Visible",gxAttId:"4"});n.addRefreshingParm({rfrVar:"AV17contatosCodusu"});n.addRefreshingParm({rfrVar:"AV19registros"});n.addRefreshingParm({rfrVar:"AV22Pgmname"});n.addRefreshingParm({rfrVar:"A4ContatosCod",rfrProp:"Visible",gxAttId:"4"});this.Initialize()});gx.wi(function(){gx.createParentObj(agendacliww)})