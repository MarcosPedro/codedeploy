/*!   GeneXus C# 16_0_9-140712 on 6/15/2020 9:43:45.44
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrolegeneral', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secrolegeneral" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_Secroleid=function()
   {
      return this.validCliEvt("Valid_Secroleid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECROLEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e111d1_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secrole.aspx", ["UPD", this.A10SecRoleId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121d1_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secrole.aspx", ["DLT", this.A10SecRoleId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e131d1_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secrolefunroleassociationww.aspx", [this.A10SecRoleId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e161d2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e171d2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
   this.GXLastCtrlId =33;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secroleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z10SecRoleId",gxold:"O10SecRoleId",gxvar:"A10SecRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A10SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A10SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z91SecRoleName",gxold:"O91SecRoleName",gxvar:"A91SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A91SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z91SecRoleName=Value},v2c:function(){gx.fn.setControlValue("SECROLENAME",gx.O.A91SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A91SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("SECROLENAME")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEDESCRIPTION",gxz:"Z90SecRoleDescription",gxold:"O90SecRoleDescription",gxvar:"A90SecRoleDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A90SecRoleDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z90SecRoleDescription=Value},v2c:function(){gx.fn.setControlValue("SECROLEDESCRIPTION",gx.O.A90SecRoleDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A90SecRoleDescription=this.val()},val:function(){return gx.fn.getControlValue("SECROLEDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"BTNUPDATE",grid:0,evt:"e111d1_client"};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"BTNDELETE",grid:0,evt:"e121d1_client"};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"BTNUAASSOCIATEFUNCTIONALITIES",grid:0,evt:"e131d1_client"};
   this.A10SecRoleId = 0 ;
   this.Z10SecRoleId = 0 ;
   this.O10SecRoleId = 0 ;
   this.A91SecRoleName = "" ;
   this.Z91SecRoleName = "" ;
   this.O91SecRoleName = "" ;
   this.A90SecRoleDescription = "" ;
   this.Z90SecRoleDescription = "" ;
   this.O90SecRoleDescription = "" ;
   this.A10SecRoleId = 0 ;
   this.A91SecRoleName = "" ;
   this.A90SecRoleDescription = "" ;
   this.Events = {"e161d2_client": ["ENTER", true] ,"e171d2_client": ["CANCEL", true] ,"e111d1_client": ["'DOUPDATE'", false] ,"e121d1_client": ["'DODELETE'", false] ,"e131d1_client": ["'DOUAASSOCIATEFUNCTIONALITIES'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV19Pgmname',fld:'vPGMNAME',pic:''}],[]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DOUAASSOCIATEFUNCTIONALITIES'"] = [[{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[]];
   this.EvtParms["VALID_SECROLEID"] = [[],[]];
   this.Initialize( );
});
