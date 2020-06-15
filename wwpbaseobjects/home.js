/*!   GeneXus C# 16_0_9-140712 on 6/15/2020 9:43:51.65
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.home', false, function () {
   this.ServerClass =  "wwpbaseobjects.home" ;
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
      this.AV5HomeModulesSDT=gx.fn.getControlValue("vHOMEMODULESSDT") ;
      this.AV5HomeModulesSDT=gx.fn.getControlValue("vHOMEMODULESSDT") ;
   };
   this.e130v2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e140v2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21];
   this.GXLastCtrlId =21;
   this.GridhomemodulessdtsContainer = new gx.grid.grid(this, 2,"WbpLvl2",12,"Gridhomemodulessdts","Gridhomemodulessdts","GridhomemodulessdtsContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.home",[],true,3,false,true,0,false,false,false,"CollWWPBaseObjects\HomeModulesSDT.HomeModulesSDTItem",0,"px",0,"px","Novo registro",false,false,false,null,null,false,"AV5HomeModulesSDT",true,[2,3,3,3],false,0,false,false);
   var GridhomemodulessdtsContainer = this.GridhomemodulessdtsContainer;
   GridhomemodulessdtsContainer.startDiv(13,"Unnamedtablefsgridhomemodulessdts","0px","0px");
   GridhomemodulessdtsContainer.startDiv(14,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(15,"","0px","0px");
   GridhomemodulessdtsContainer.addLabel();
   GridhomemodulessdtsContainer.addBitmap("Homemodulessdt__optionbackgroundimage","HOMEMODULESSDT__OPTIONBACKGROUNDIMAGE",16,0,"",0,"",null,"","","ImageHomeModulesBack ObjectFitCover","");
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.startDiv(17,"","0px","0px");
   GridhomemodulessdtsContainer.startDiv(18,"","0px","0px");
   GridhomemodulessdtsContainer.addLabel();
   GridhomemodulessdtsContainer.addSingleLineEdit("GXV3",19,"HOMEMODULESSDT__OPTIONTITLE","","","OptionTitle","svchar",80,"chr",100,80,"left",null,[],"GXV3","GXV3",true,0,false,false,"AttributeHomeModulesTitle",1,"");
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.startDiv(20,"","0px","0px");
   GridhomemodulessdtsContainer.addTextBlock('OPTIONICON',null,21);
   GridhomemodulessdtsContainer.endDiv();
   GridhomemodulessdtsContainer.endDiv();
   this.GridhomemodulessdtsContainer.emptyText = "";
   this.setGrid(GridhomemodulessdtsContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLECONTENT",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"UNNAMEDTABLEFSGRIDHOMEMODULESSDTS",grid:12};
   GXValidFnc[14]={ id: 14, fld:"",grid:12};
   GXValidFnc[15]={ id: 15, fld:"",grid:12};
   GXValidFnc[16]={ id:16 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:12,gxgrid:this.GridhomemodulessdtsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HOMEMODULESSDT__OPTIONBACKGROUNDIMAGE",gxz:"ZV11GXV2",gxold:"OV11GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.GXV2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11GXV2=Value},v2c:function(row){gx.fn.setGridMultimediaValue("HOMEMODULESSDT__OPTIONBACKGROUNDIMAGE",row || gx.fn.currentGridRowImpl(12),gx.O.GXV2,"")},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV2=this.val(row)},val:function(row){return gx.fn.getGridControlValue("HOMEMODULESSDT__OPTIONBACKGROUNDIMAGE",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[17]={ id: 17, fld:"",grid:12};
   GXValidFnc[18]={ id: 18, fld:"",grid:12};
   GXValidFnc[19]={ id:19 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:12,gxgrid:this.GridhomemodulessdtsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HOMEMODULESSDT__OPTIONTITLE",gxz:"ZV12GXV3",gxold:"OV12GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12GXV3=Value},v2c:function(row){gx.fn.setGridControlValue("HOMEMODULESSDT__OPTIONTITLE",row || gx.fn.currentGridRowImpl(12),gx.O.GXV3,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV3=this.val(row)},val:function(row){return gx.fn.getGridControlValue("HOMEMODULESSDT__OPTIONTITLE",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:12};
   GXValidFnc[21]={ id: 21, fld:"OPTIONICON", format:2,grid:12};
   this.ZV11GXV2 = "" ;
   this.OV11GXV2 = "" ;
   this.ZV12GXV3 = "" ;
   this.OV12GXV3 = "" ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.AV5HomeModulesSDT = [ ] ;
   this.Events = {"e130v2_client": ["ENTER", true] ,"e140v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'GRIDHOMEMODULESSDTS_nEOF'},{av:'AV5HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:12,pic:'',hsh:true},{av:'nRC_GXsfl_12',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}],[]];
   this.EvtParms["START"] = [[{av:'AV5HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:12,pic:'',hsh:true},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'nRC_GXsfl_12',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'},{av:'GRIDHOMEMODULESSDTS_nEOF'}],[{av:'AV5HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:12,pic:'',hsh:true},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'nRC_GXsfl_12',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}]];
   this.EvtParms["GRIDHOMEMODULESSDTS.LOAD"] = [[{av:'AV5HomeModulesSDT',fld:'vHOMEMODULESSDT',grid:12,pic:'',hsh:true},{av:'GRIDHOMEMODULESSDTS_nFirstRecordOnPage'},{av:'nRC_GXsfl_12',ctrl:'GRIDHOMEMODULESSDTS',prop:'GridRC'}],[{av:'gx.fn.getCtrlProperty("OPTIONICON","Caption")',ctrl:'OPTIONICON',prop:'Caption'},{av:'gx.fn.getCtrlProperty("OPTIONICON","Link")',ctrl:'OPTIONICON',prop:'Link'},{ctrl:'HOMEMODULESSDT__OPTIONBACKGROUNDIMAGE',prop:'Link'}]];
   this.setVCMap("AV5HomeModulesSDT", "vHOMEMODULESSDT", 0, "CollWWPBaseObjects\HomeModulesSDT.HomeModulesSDTItem", 0, 0);
   this.setVCMap("AV5HomeModulesSDT", "vHOMEMODULESSDT", 0, "CollWWPBaseObjects\HomeModulesSDT.HomeModulesSDTItem", 0, 0);
   this.setVCMap("AV5HomeModulesSDT", "vHOMEMODULESSDT", 0, "CollWWPBaseObjects\HomeModulesSDT.HomeModulesSDTItem", 0, 0);
   GridhomemodulessdtsContainer.addRefreshingVar({rfrVar:"AV5HomeModulesSDT"});
   GridhomemodulessdtsContainer.addRefreshingParm({rfrVar:"AV5HomeModulesSDT"});
   this.addGridBCProperty("Homemodulessdt", ["OptionBackgroundImage"], this.GXValidFnc[16], "AV5HomeModulesSDT");
   this.addGridBCProperty("Homemodulessdt", ["OptionTitle"], this.GXValidFnc[19], "AV5HomeModulesSDT");
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.home);});
