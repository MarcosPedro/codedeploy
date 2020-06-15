/*!   GeneXus C# 16_0_9-140712 on 6/15/2020 9:43:56.14
*/
gx.evt.autoSkip = false;
gx.define('mp.xmltojsonweb', false, function () {
   this.ServerClass =  "mp.xmltojsonweb" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.e121w2_client=function()
   {
      return this.executeServerEvent("'DOEXECUTAR'", false, null, false, false);
   };
   this.e141w2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151w2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLECONTENT",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id:17 ,lvl:0,type:"vchar",len:50000000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTEXTO",gxz:"ZV7texto",gxold:"OV7texto",gxvar:"AV7texto",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7texto=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7texto=Value},v2c:function(){gx.fn.setControlValue("vTEXTO",gx.O.AV7texto,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV7texto=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO")},nac:gx.falseFn};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id:22 ,lvl:0,type:"vchar",len:0,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRESULT",gxz:"ZV8Result",gxold:"OV8Result",gxvar:"AV8Result",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV8Result=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8Result=Value},v2c:function(){gx.fn.setComboBoxValue("vRESULT",gx.O.AV8Result)},c2v:function(){if(this.val()!==undefined)gx.O.AV8Result=this.val()},val:function(){return gx.fn.getControlValue("vRESULT")},nac:gx.falseFn};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"BTNEXECUTAR",grid:0,evt:"e121w2_client"};
   this.AV7texto = "" ;
   this.ZV7texto = "" ;
   this.OV7texto = "" ;
   this.AV8Result = "" ;
   this.ZV8Result = "" ;
   this.OV8Result = "" ;
   this.AV7texto = "" ;
   this.AV8Result = "" ;
   this.Events = {"e121w2_client": ["'DOEXECUTAR'", true] ,"e141w2_client": ["ENTER", true] ,"e151w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["'DOEXECUTAR'"] = [[{av:'AV7texto',fld:'vTEXTO',pic:''}],[{ctrl:'vRESULT'},{av:'AV8Result',fld:'vRESULT',pic:''}]];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(mp.xmltojsonweb);});
