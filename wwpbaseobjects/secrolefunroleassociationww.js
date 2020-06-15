/*!   GeneXus C# 16_0_9-140712 on 6/15/2020 10:14:47.6
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrolefunroleassociationww', false, function () {
   this.ServerClass =  "wwpbaseobjects.secrolefunroleassociationww" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.anyGridBaseTable = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV13SecFunctionalityIdRemovedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVEDXML") ;
      this.AV12SecFunctionalityIdAddedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDEDXML") ;
      this.AV38OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV39OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV9SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.A10SecRoleId=gx.fn.getIntegerValue("SECROLEID",'.') ;
      this.AV21i=gx.fn.getIntegerValue("vI",'.') ;
      this.AV11SecFunctionalityIdRemoved=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVED") ;
      this.AV15SecFunctionalityIdToFind=gx.fn.getIntegerValue("vSECFUNCTIONALITYIDTOFIND",'.') ;
      this.AV10SecFunctionalityIdAdded=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDED") ;
      this.AV16SecFunctionalityRole=gx.fn.getControlValue("vSECFUNCTIONALITYROLE") ;
      this.AV33SecFunctionalityId_Selected=gx.fn.getIntegerValue("vSECFUNCTIONALITYID_SELECTED",'.') ;
      this.AV13SecFunctionalityIdRemovedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVEDXML") ;
      this.AV12SecFunctionalityIdAddedXml=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDEDXML") ;
      this.AV9SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.A10SecRoleId=gx.fn.getIntegerValue("SECROLEID",'.') ;
      this.AV21i=gx.fn.getIntegerValue("vI",'.') ;
      this.AV11SecFunctionalityIdRemoved=gx.fn.getControlValue("vSECFUNCTIONALITYIDREMOVED") ;
      this.AV15SecFunctionalityIdToFind=gx.fn.getIntegerValue("vSECFUNCTIONALITYIDTOFIND",'.') ;
      this.AV10SecFunctionalityIdAdded=gx.fn.getControlValue("vSECFUNCTIONALITYIDADDED") ;
      this.AV9SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV33SecFunctionalityId_Selected=gx.fn.getIntegerValue("vSECFUNCTIONALITYID_SELECTED",'.') ;
   };
   this.Valid_Secfunctionalityid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(29);
      return this.validCliEvt("Valid_Secfunctionalityid", 29, function () {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECFUNCTIONALITYID", gx.fn.currentGridRowImpl(29));
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
   this.Valid_Secparentfunctionalityid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(29);
      return this.validCliEvt("Valid_Secparentfunctionalityid", 29, function () {
      try {
         if(  gx.fn.currentGridRowImpl(29) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECPARENTFUNCTIONALITYID", gx.fn.currentGridRowImpl(29));
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
   this.s112_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV38OrderedBy, 4, 0))+":"+(this.AV39OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s132_client=function()
   {
      this.AV21i = gx.num.trunc( 1 ,0) ;
      this.AV94GXV4 = gx.num.trunc( 1 ,0) ;
      while ( this.AV94GXV4 <= this.AV11SecFunctionalityIdRemoved.length )
      {
         this.AV14SecFunctionalityId = gx.num.trunc( this.AV11SecFunctionalityIdRemoved[this.AV94GXV4 - 1] ,0) ;
         if ( this.AV14SecFunctionalityId == this.AV15SecFunctionalityIdToFind )
         {
            break;
         }
         this.AV21i = gx.num.trunc( this.AV21i + 1 ,0) ;
         this.AV94GXV4 = gx.num.trunc( this.AV94GXV4 + 1 ,0) ;
      }
      if ( this.AV21i > this.AV11SecFunctionalityIdRemoved.length )
      {
         this.AV21i = gx.num.trunc( 0 ,0) ;
      }
   };
   this.s142_client=function()
   {
      this.AV21i = gx.num.trunc( 1 ,0) ;
      this.AV93GXV3 = gx.num.trunc( 1 ,0) ;
      while ( this.AV93GXV3 <= this.AV10SecFunctionalityIdAdded.length )
      {
         this.AV14SecFunctionalityId = gx.num.trunc( this.AV10SecFunctionalityIdAdded[this.AV93GXV3 - 1] ,0) ;
         if ( this.AV14SecFunctionalityId == this.AV15SecFunctionalityIdToFind )
         {
            break;
         }
         this.AV21i = gx.num.trunc( this.AV21i + 1 ,0) ;
         this.AV93GXV3 = gx.num.trunc( this.AV93GXV3 + 1 ,0) ;
      }
      if ( this.AV21i > this.AV10SecFunctionalityIdAdded.length )
      {
         this.AV21i = gx.num.trunc( 0 ,0) ;
      }
   };
   this.s162_client=function()
   {
      this.call("wwpbaseobjects.secrolefunroleactionassociationww.aspx", [this.AV9SecRoleId, this.AV33SecFunctionalityId_Selected]);
   };
   this.e200s1_client=function()
   {
      this.clearMessages();
      if ( this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.Result == "Yes" )
      {
         this.s162_client();
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e110s2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e120s2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e130s2_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e140s2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e180s2_client=function()
   {
      return this.executeServerEvent("'DOUAVIEWCHILDREN'", true, arguments[0], false, false);
   };
   this.e190s2_client=function()
   {
      return this.executeServerEvent("VISASSOCIATED.CLICK", true, arguments[0], false, false);
   };
   this.e210s1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,43,44,45,46,47,48,49,50,51,52,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secrolefunroleassociationww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Isassociated",30,"vISASSOCIATED","","","IsAssociated","boolean","true","false","e190s2_client",true,false,0,"px","");
   GridContainer.addCheckBox("Isassociatedold",31,"vISASSOCIATEDOLD","","","IsAssociatedOld","boolean","true","false",null,false,false,0,"px","");
   GridContainer.addBitmap("&Uaviewchildren","vUAVIEWCHILDREN",32,0,"px",17,"px","e180s2_client","","","","WWActionColumn");
   GridContainer.addSingleLineEdit(8,33,"SECFUNCTIONALITYID","Id","","SecFunctionalityId","int",0,"px",10,10,"right",null,[],8,"SecFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(9,34,"SECFUNCTIONALITYKEY","Key","","SecFunctionalityKey","svchar",0,"px",100,80,"left",null,[],9,"SecFunctionalityKey",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(87,35,"SECFUNCTIONALITYDESCRIPTION","Description","","SecFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],87,"SecFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addComboBox(88,36,"SECFUNCTIONALITYTYPE","Type","SecFunctionalityType","int",null,0,true,false,0,"px","WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(13,37,"SECPARENTFUNCTIONALITYID","Parent Functionality Id  ","","SecParentFunctionalityId","int",0,"px",10,10,"right",null,[],13,"SecParentFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(89,38,"SECPARENTFUNCTIONALITYDESCRIPT","Parent Functionality","","SecParentFunctionalityDescript","svchar",0,"px",100,80,"left",null,[],89,"SecParentFunctionalityDescript",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(86,39,"SECFUNCTIONALITYACTIVE","Is Active?","","SecFunctionalityActive","boolean","true","false",null,false,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.DVPANEL_TABLEHEADERContainer = gx.uc.getNew(this, 12, 0, "BootstrapPanel", "DVPANEL_TABLEHEADERContainer", "Dvpanel_tableheader", "DVPANEL_TABLEHEADER");
   var DVPANEL_TABLEHEADERContainer = this.DVPANEL_TABLEHEADERContainer;
   DVPANEL_TABLEHEADERContainer.setProp("Class", "Class", "", "char");
   DVPANEL_TABLEHEADERContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_TABLEHEADERContainer.setProp("Width", "Width", "100%", "str");
   DVPANEL_TABLEHEADERContainer.setProp("Height", "Height", "100", "str");
   DVPANEL_TABLEHEADERContainer.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("Cls", "Cls", "PanelCard_GrayTitle", "str");
   DVPANEL_TABLEHEADERContainer.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("Title", "Title", "Opções", "str");
   DVPANEL_TABLEHEADERContainer.setProp("Collapsible", "Collapsible", true, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("IconPosition", "Iconposition", "Right", "str");
   DVPANEL_TABLEHEADERContainer.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("Visible", "Visible", true, "bool");
   DVPANEL_TABLEHEADERContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DVPANEL_TABLEHEADERContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_TABLEHEADERContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 42, 23, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
   var GRIDPAGINATIONBARContainer = this.GRIDPAGINATIONBARContainer;
   GRIDPAGINATIONBARContainer.setProp("Enabled", "Enabled", true, "boolean");
   GRIDPAGINATIONBARContainer.setProp("Class", "Class", "PaginationBar", "str");
   GRIDPAGINATIONBARContainer.setProp("ShowFirst", "Showfirst", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowPrevious", "Showprevious", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowNext", "Shownext", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowLast", "Showlast", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("PagesToShow", "Pagestoshow", 5, "num");
   GRIDPAGINATIONBARContainer.setProp("PagingButtonsPosition", "Pagingbuttonsposition", "Right", "str");
   GRIDPAGINATIONBARContainer.setProp("PagingCaptionPosition", "Pagingcaptionposition", "Left", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridClass", "Emptygridclass", "PaginationBarEmptyGrid", "str");
   GRIDPAGINATIONBARContainer.setProp("SelectedPage", "Selectedpage", "", "char");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageSelector", "Rowsperpageselector", true, "bool");
   GRIDPAGINATIONBARContainer.setDynProp("RowsPerPageSelectedValue", "Rowsperpageselectedvalue", 10, "num");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageOptions", "Rowsperpageoptions", "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50", "str");
   GRIDPAGINATIONBARContainer.setProp("First", "First", "First", "str");
   GRIDPAGINATIONBARContainer.setProp("Previous", "Previous", "WWP_PagingPreviousCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Next", "Next", "WWP_PagingNextCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Last", "Last", "Last", "str");
   GRIDPAGINATIONBARContainer.setProp("Caption", "Caption", "Página <CURRENT_PAGE> de <TOTAL_PAGES>", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridCaption", "Emptygridcaption", "WWP_PagingEmptyGridCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageCaption", "Rowsperpagecaption", "WWP_PagingRowsPerPage", "str");
   GRIDPAGINATIONBARContainer.addV2CFunction('AV81GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV81GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV81GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV82GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV82GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV82GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e110s2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e120s2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 53, 23, "DDOGridTitleSettingsM", "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
   var DDO_GRIDContainer = this.DDO_GRIDContainer;
   DDO_GRIDContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_GRIDContainer.setProp("Tooltip", "Tooltip", "", "str");
   DDO_GRIDContainer.setProp("Cls", "Cls", "", "str");
   DDO_GRIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumn", "Selectedcolumn", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumnFixedFilter", "Selectedcolumnfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_GRIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "", "str");
   DDO_GRIDContainer.setProp("Visible", "Visible", "", "str");
   DDO_GRIDContainer.setDynProp("GridInternalName", "Gridinternalname", "", "str");
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "4:SecFunctionalityKey|5:SecFunctionalityDescription|6:SecFunctionalityType|8:SecParentFunctionalityDescription", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "1|2|3|4", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "", "str");
   DDO_GRIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "str");
   DDO_GRIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_GRIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_GRIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("SortASC", "Sortasc", "", "str");
   DDO_GRIDContainer.setProp("SortDSC", "Sortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroupText", "Allowgrouptext", "", "str");
   DDO_GRIDContainer.setProp("LoadingData", "Loadingdata", "", "str");
   DDO_GRIDContainer.setProp("CleanFilter", "Cleanfilter", "", "str");
   DDO_GRIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "str");
   DDO_GRIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "str");
   DDO_GRIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "str");
   DDO_GRIDContainer.setProp("SearchButtonText", "Searchbuttontext", "", "str");
   DDO_GRIDContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e130s2_client);
   this.setUserControl(DDO_GRIDContainer);
   this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer = gx.uc.getNew(this, 57, 23, "BootstrapConfirmPanel", "DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer", "Dvelop_confirmpanel_uaviewchildren", "DVELOP_CONFIRMPANEL_UAVIEWCHILDREN");
   var DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer = this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer;
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Width", "Width", "100", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Height", "Height", "100", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Class", "Class", "", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Title", "Title", "Confirmation of loss changes", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("ConfirmationText", "Confirmationtext", "You will lose the changes made. Are you sure you want to continue?", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("YesButtonCaption", "Yesbuttoncaption", "WWP_ConfirmTextYes", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("NoButtonCaption", "Nobuttoncaption", "WWP_ConfirmTextNo", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("CancelButtonCaption", "Cancelbuttoncaption", "WWP_ConfirmTextCancel", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("YesButtonPosition", "Yesbuttonposition", "left", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("ConfirmType", "Confirmtype", "1", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Result", "Result", "", "char");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("TextType", "Texttype", "1", "str");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setProp("Visible", "Visible", true, "bool");
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.addEventHandler("Close", this.e200s1_client);
   this.setUserControl(DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"TABLEHEADER",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"ASSOCIATIONTITLE", format:0,grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id:23 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECROLENAME",gxz:"ZV8SecRoleName",gxold:"OV8SecRoleName",gxvar:"AV8SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8SecRoleName=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME",gx.O.AV8SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV8SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME")},nac:gx.falseFn};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISASSOCIATED",gxz:"ZV18IsAssociated",gxold:"OV18IsAssociated",gxvar:"AV18IsAssociated",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV18IsAssociated=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18IsAssociated=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vISASSOCIATED",row || gx.fn.currentGridRowImpl(29),gx.O.AV18IsAssociated,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV18IsAssociated=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vISASSOCIATED",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,evt:"e190s2_client",values:['true','false']};
   GXValidFnc[31]={ id:31 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISASSOCIATEDOLD",gxz:"ZV19IsAssociatedOld",gxold:"OV19IsAssociatedOld",gxvar:"AV19IsAssociatedOld",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV19IsAssociatedOld=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19IsAssociatedOld=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vISASSOCIATEDOLD",row || gx.fn.currentGridRowImpl(29),gx.O.AV19IsAssociatedOld,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV19IsAssociatedOld=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vISASSOCIATEDOLD",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[32]={ id:32 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUAVIEWCHILDREN",gxz:"ZV29UAViewChildren",gxold:"OV29UAViewChildren",gxvar:"AV29UAViewChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV29UAViewChildren=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29UAViewChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUAVIEWCHILDREN",row || gx.fn.currentGridRowImpl(29),gx.O.AV29UAViewChildren,gx.O.AV89Uaviewchildren_GXI)},c2v:function(row){gx.O.AV89Uaviewchildren_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV29UAViewChildren=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUAVIEWCHILDREN",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vUAVIEWCHILDREN_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV89Uaviewchildren_GXI',nac:gx.falseFn,evt:"e180s2_client"};
   GXValidFnc[33]={ id:33 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Secfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z8SecFunctionalityId",gxold:"O8SecFunctionalityId",gxvar:"A8SecFunctionalityId",ucs:[],op:[38],ip:[38,37],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A8SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z8SecFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(29),gx.O.A8SecFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A8SecFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={ id:34 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYKEY",gxz:"Z9SecFunctionalityKey",gxold:"O9SecFunctionalityKey",gxvar:"A9SecFunctionalityKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A9SecFunctionalityKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z9SecFunctionalityKey=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(29),gx.O.A9SecFunctionalityKey,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A9SecFunctionalityKey=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={ id:35 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z87SecFunctionalityDescription",gxold:"O87SecFunctionalityDescription",gxvar:"A87SecFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A87SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z87SecFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(29),gx.O.A87SecFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A87SecFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[36]={ id:36 ,lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYTYPE",gxz:"Z88SecFunctionalityType",gxold:"O88SecFunctionalityType",gxvar:"A88SecFunctionalityType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A88SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z88SecFunctionalityType=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(29),gx.O.A88SecFunctionalityType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A88SecFunctionalityType=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[37]={ id:37 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Secparentfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYID",gxz:"Z13SecParentFunctionalityId",gxold:"O13SecParentFunctionalityId",gxvar:"A13SecParentFunctionalityId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A13SecParentFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z13SecParentFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(29),gx.O.A13SecParentFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A13SecParentFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECPARENTFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[38]={ id:38 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYDESCRIPT",gxz:"Z89SecParentFunctionalityDescript",gxold:"O89SecParentFunctionalityDescript",gxvar:"A89SecParentFunctionalityDescript",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A89SecParentFunctionalityDescript=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z89SecParentFunctionalityDescript=Value},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYDESCRIPT",row || gx.fn.currentGridRowImpl(29),gx.O.A89SecParentFunctionalityDescript,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A89SecParentFunctionalityDescript=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECPARENTFUNCTIONALITYDESCRIPT",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[39]={ id:39 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYACTIVE",gxz:"Z86SecFunctionalityActive",gxold:"O86SecFunctionalityActive",gxvar:"A86SecFunctionalityActive",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A86SecFunctionalityActive=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z86SecFunctionalityActive=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SECFUNCTIONALITYACTIVE",row || gx.fn.currentGridRowImpl(29),gx.O.A86SecFunctionalityActive,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A86SecFunctionalityActive=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYACTIVE",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTNCONFIRM",grid:0,evt:"e140s2_client",std:"ENTER"};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"BTNCANCEL",grid:0,evt:"e210s1_client"};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[54]={ id: 54, fld:"TABLEDVELOP_CONFIRMPANEL_UAVIEWCHILDREN",grid:0};
   this.AV8SecRoleName = "" ;
   this.ZV8SecRoleName = "" ;
   this.OV8SecRoleName = "" ;
   this.ZV18IsAssociated = false ;
   this.OV18IsAssociated = false ;
   this.ZV19IsAssociatedOld = false ;
   this.OV19IsAssociatedOld = false ;
   this.ZV29UAViewChildren = "" ;
   this.OV29UAViewChildren = "" ;
   this.Z8SecFunctionalityId = 0 ;
   this.O8SecFunctionalityId = 0 ;
   this.Z9SecFunctionalityKey = "" ;
   this.O9SecFunctionalityKey = "" ;
   this.Z87SecFunctionalityDescription = "" ;
   this.O87SecFunctionalityDescription = "" ;
   this.Z88SecFunctionalityType = 0 ;
   this.O88SecFunctionalityType = 0 ;
   this.Z13SecParentFunctionalityId = 0 ;
   this.O13SecParentFunctionalityId = 0 ;
   this.Z89SecParentFunctionalityDescript = "" ;
   this.O89SecParentFunctionalityDescript = "" ;
   this.Z86SecFunctionalityActive = false ;
   this.O86SecFunctionalityActive = false ;
   this.AV8SecRoleName = "" ;
   this.AV81GridCurrentPage = 0 ;
   this.AV74DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV9SecRoleId = 0 ;
   this.AV18IsAssociated = false ;
   this.AV19IsAssociatedOld = false ;
   this.AV29UAViewChildren = "" ;
   this.A8SecFunctionalityId = 0 ;
   this.A9SecFunctionalityKey = "" ;
   this.A87SecFunctionalityDescription = "" ;
   this.A88SecFunctionalityType = 0 ;
   this.A13SecParentFunctionalityId = 0 ;
   this.A89SecParentFunctionalityDescript = "" ;
   this.A86SecFunctionalityActive = false ;
   this.A10SecRoleId = 0 ;
   this.A91SecRoleName = "" ;
   this.AV13SecFunctionalityIdRemovedXml = "" ;
   this.AV12SecFunctionalityIdAddedXml = "" ;
   this.AV38OrderedBy = 0 ;
   this.AV39OrderedDsc = false ;
   this.AV21i = 0 ;
   this.AV11SecFunctionalityIdRemoved = [ ] ;
   this.AV15SecFunctionalityIdToFind = 0 ;
   this.AV10SecFunctionalityIdAdded = [ ] ;
   this.AV16SecFunctionalityRole = {SecFunctionalityId:0,SecFunctionalityDescription:"",SecRoleId:0,Mode:"",Initialized:0,SecFunctionalityId_Z:0,SecFunctionalityDescription_Z:"",SecRoleId_Z:0} ;
   this.AV33SecFunctionalityId_Selected = 0 ;
   this.AV14SecFunctionalityId = 0 ;
   this.AV94GXV4 = 0 ;
   this.AV93GXV3 = 0 ;
   this.Events = {"e110s2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e120s2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e130s2_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e140s2_client": ["ENTER", true] ,"e180s2_client": ["'DOUAVIEWCHILDREN'", true] ,"e190s2_client": ["VISASSOCIATED.CLICK", true] ,"e210s1_client": ["CANCEL", true] ,"e200s1_client": ["DVELOP_CONFIRMPANEL_UAVIEWCHILDREN.CLOSE", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true}],[{av:'AV81GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV82GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A91SecRoleName',fld:'SECROLENAME',pic:''},{av:'AV39OrderedDsc',fld:'vORDEREDDSC',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{ctrl:'FORM',prop:'Caption'},{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV8SecRoleName',fld:'vSECROLENAME',pic:''},{av:'gx.fn.getCtrlProperty("vSECROLENAME","Enabled")',ctrl:'vSECROLENAME',prop:'Enabled'},{av:'AV74DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'},{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV39OrderedDsc',fld:'vORDEREDDSC',pic:''}],[{av:'AV38OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV39OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A10SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}],[{av:'AV29UAViewChildren',fld:'vUAVIEWCHILDREN',pic:''},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Tooltiptext")',ctrl:'vUAVIEWCHILDREN',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Class")',ctrl:'vUAVIEWCHILDREN',prop:'Class'},{av:'AV34SecRoleIdParm',fld:'vSECROLEIDPARM',pic:'ZZZ9'},{av:'AV19IsAssociatedOld',fld:'vISASSOCIATEDOLD',pic:'',hsh:true},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV18IsAssociated',fld:'vISASSOCIATED',pic:''},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV16SecFunctionalityRole',fld:'vSECFUNCTIONALITYROLE',pic:''}],[{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV16SecFunctionalityRole',fld:'vSECFUNCTIONALITYROLE',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["'DOUAVIEWCHILDREN'"] = [[{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'A8SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV33SecFunctionalityId_Selected',fld:'vSECFUNCTIONALITYID_SELECTED',pic:'ZZZZZZZZZ9'}],[{av:'AV33SecFunctionalityId_Selected',fld:'vSECFUNCTIONALITYID_SELECTED',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''}]];
   this.EvtParms["DVELOP_CONFIRMPANEL_UAVIEWCHILDREN.CLOSE"] = [[{av:'this.DVELOP_CONFIRMPANEL_UAVIEWCHILDRENContainer.Result',ctrl:'DVELOP_CONFIRMPANEL_UAVIEWCHILDREN',prop:'Result'},{av:'AV9SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV33SecFunctionalityId_Selected',fld:'vSECFUNCTIONALITYID_SELECTED',pic:'ZZZZZZZZZ9'}],[]];
   this.EvtParms["VISASSOCIATED.CLICK"] = [[{av:'A8SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV18IsAssociated',fld:'vISASSOCIATED',pic:''},{av:'AV19IsAssociatedOld',fld:'vISASSOCIATEDOLD',pic:'',hsh:true},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''},{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'}],[{av:'AV15SecFunctionalityIdToFind',fld:'vSECFUNCTIONALITYIDTOFIND',pic:'ZZZZZZZZZ9'},{av:'AV11SecFunctionalityIdRemoved',fld:'vSECFUNCTIONALITYIDREMOVED',pic:''},{av:'AV10SecFunctionalityIdAdded',fld:'vSECFUNCTIONALITYIDADDED',pic:''},{av:'AV21i',fld:'vI',pic:'ZZZZZZZZZ9'},{av:'AV13SecFunctionalityIdRemovedXml',fld:'vSECFUNCTIONALITYIDREMOVEDXML',pic:''},{av:'AV12SecFunctionalityIdAddedXml',fld:'vSECFUNCTIONALITYIDADDEDXML',pic:''}]];
   this.EvtParms["VALID_SECFUNCTIONALITYID"] = [[{av:'A89SecParentFunctionalityDescript',fld:'SECPARENTFUNCTIONALITYDESCRIPT',pic:''},{av:'A13SecParentFunctionalityId',fld:'SECPARENTFUNCTIONALITYID',pic:'ZZZZZZZZZ9'}],[{av:'A89SecParentFunctionalityDescript',fld:'SECPARENTFUNCTIONALITYDESCRIPT',pic:''}]];
   this.EvtParms["VALID_SECPARENTFUNCTIONALITYID"] = [[],[]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV13SecFunctionalityIdRemovedXml", "vSECFUNCTIONALITYIDREMOVEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV12SecFunctionalityIdAddedXml", "vSECFUNCTIONALITYIDADDEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV38OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV39OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("A10SecRoleId", "SECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV21i", "vI", 0, "int", 10, 0);
   this.setVCMap("AV11SecFunctionalityIdRemoved", "vSECFUNCTIONALITYIDREMOVED", 0, "Collint", 0, 0);
   this.setVCMap("AV15SecFunctionalityIdToFind", "vSECFUNCTIONALITYIDTOFIND", 0, "int", 10, 0);
   this.setVCMap("AV10SecFunctionalityIdAdded", "vSECFUNCTIONALITYIDADDED", 0, "Collint", 0, 0);
   this.setVCMap("AV16SecFunctionalityRole", "vSECFUNCTIONALITYROLE", 0, "WWPBaseObjects\SecFunctionalityRole", 0, 0);
   this.setVCMap("AV33SecFunctionalityId_Selected", "vSECFUNCTIONALITYID_SELECTED", 0, "int", 10, 0);
   this.setVCMap("AV13SecFunctionalityIdRemovedXml", "vSECFUNCTIONALITYIDREMOVEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV12SecFunctionalityIdAddedXml", "vSECFUNCTIONALITYIDADDEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("A10SecRoleId", "SECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV21i", "vI", 0, "int", 10, 0);
   this.setVCMap("AV11SecFunctionalityIdRemoved", "vSECFUNCTIONALITYIDREMOVED", 0, "Collint", 0, 0);
   this.setVCMap("AV15SecFunctionalityIdToFind", "vSECFUNCTIONALITYIDTOFIND", 0, "int", 10, 0);
   this.setVCMap("AV10SecFunctionalityIdAdded", "vSECFUNCTIONALITYIDADDED", 0, "Collint", 0, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV33SecFunctionalityId_Selected", "vSECFUNCTIONALITYID_SELECTED", 0, "int", 10, 0);
   this.setVCMap("AV13SecFunctionalityIdRemovedXml", "vSECFUNCTIONALITYIDREMOVEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV12SecFunctionalityIdAddedXml", "vSECFUNCTIONALITYIDADDEDXML", 0, "vchar", 2097152, 0);
   this.setVCMap("AV9SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("A10SecRoleId", "SECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV21i", "vI", 0, "int", 10, 0);
   this.setVCMap("AV11SecFunctionalityIdRemoved", "vSECFUNCTIONALITYIDREMOVED", 0, "Collint", 0, 0);
   this.setVCMap("AV15SecFunctionalityIdToFind", "vSECFUNCTIONALITYIDTOFIND", 0, "int", 10, 0);
   this.setVCMap("AV10SecFunctionalityIdAdded", "vSECFUNCTIONALITYIDADDED", 0, "Collint", 0, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV13SecFunctionalityIdRemovedXml"});
   GridContainer.addRefreshingVar({rfrVar:"AV12SecFunctionalityIdAddedXml"});
   GridContainer.addRefreshingVar({rfrVar:"AV9SecRoleId"});
   GridContainer.addRefreshingVar({rfrVar:"A10SecRoleId"});
   GridContainer.addRefreshingVar({rfrVar:"AV21i"});
   GridContainer.addRefreshingVar({rfrVar:"AV11SecFunctionalityIdRemoved"});
   GridContainer.addRefreshingVar({rfrVar:"AV15SecFunctionalityIdToFind"});
   GridContainer.addRefreshingVar({rfrVar:"AV10SecFunctionalityIdAdded"});
   GridContainer.addRefreshingParm({rfrVar:"AV13SecFunctionalityIdRemovedXml"});
   GridContainer.addRefreshingParm({rfrVar:"AV12SecFunctionalityIdAddedXml"});
   GridContainer.addRefreshingParm({rfrVar:"AV9SecRoleId"});
   GridContainer.addRefreshingParm({rfrVar:"A10SecRoleId"});
   GridContainer.addRefreshingParm({rfrVar:"AV21i"});
   GridContainer.addRefreshingParm({rfrVar:"AV11SecFunctionalityIdRemoved"});
   GridContainer.addRefreshingParm({rfrVar:"AV15SecFunctionalityIdToFind"});
   GridContainer.addRefreshingParm({rfrVar:"AV10SecFunctionalityIdAdded"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secrolefunroleassociationww);});
