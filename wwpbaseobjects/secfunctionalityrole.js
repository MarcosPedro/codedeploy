/*!   GeneXus C# 16_0_9-140712 on 6/15/2020 9:43:47.10
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secfunctionalityrole', false, function () {
   this.ServerClass =  "wwpbaseobjects.secfunctionalityrole" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_Secfunctionalityid=function()
   {
      return this.validSrvEvt("Valid_Secfunctionalityid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Secroleid=function()
   {
      return this.validSrvEvt("Valid_Secroleid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e110d9_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e120d9_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"TABLEMAIN",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TITLE", format:0,grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e130d9_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e140d9_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e150d9_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e160d9_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e170d9_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z8SecFunctionalityId",gxold:"O8SecFunctionalityId",gxvar:"A8SecFunctionalityId",ucs:[],op:[33],ip:[33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A8SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z8SecFunctionalityId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYID",gx.O.A8SecFunctionalityId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A8SecFunctionalityId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECFUNCTIONALITYID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z87SecFunctionalityDescription",gxold:"O87SecFunctionalityDescription",gxvar:"A87SecFunctionalityDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A87SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z87SecFunctionalityDescription=Value},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYDESCRIPTION",gx.O.A87SecFunctionalityDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A87SecFunctionalityDescription=this.val()},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secroleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z10SecRoleId",gxold:"O10SecRoleId",gxvar:"A10SecRoleId",ucs:[],op:[],ip:[38,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A10SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A10SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"BTN_ENTER",grid:0,evt:"e110d9_client",std:"ENTER"};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTN_CANCEL",grid:0,evt:"e120d9_client"};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTN_DELETE",grid:0,evt:"e180d9_client",std:"DELETE"};
   this.A8SecFunctionalityId = 0 ;
   this.Z8SecFunctionalityId = 0 ;
   this.O8SecFunctionalityId = 0 ;
   this.A87SecFunctionalityDescription = "" ;
   this.Z87SecFunctionalityDescription = "" ;
   this.O87SecFunctionalityDescription = "" ;
   this.A10SecRoleId = 0 ;
   this.Z10SecRoleId = 0 ;
   this.O10SecRoleId = 0 ;
   this.AV10WebSession = {} ;
   this.A8SecFunctionalityId = 0 ;
   this.A10SecRoleId = 0 ;
   this.A87SecFunctionalityDescription = "" ;
   this.Events = {"e110d9_client": ["ENTER", true] ,"e120d9_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_SECFUNCTIONALITYID"] = [[{av:'A8SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'},{av:'A87SecFunctionalityDescription',fld:'SECFUNCTIONALITYDESCRIPTION',pic:''}],[{av:'A87SecFunctionalityDescription',fld:'SECFUNCTIONALITYDESCRIPTION',pic:''}]];
   this.EvtParms["VALID_SECROLEID"] = [[{av:'A8SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A87SecFunctionalityDescription',fld:'SECFUNCTIONALITYDESCRIPTION',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z8SecFunctionalityId'},{av:'Z10SecRoleId'},{av:'Z87SecFunctionalityDescription'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secfunctionalityrole);});
