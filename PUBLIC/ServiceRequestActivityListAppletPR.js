if (typeof (SiebelAppFacade.ServiceRequestActivityListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ServiceRequestActivityListAppletPR");
  define("siebel/custom/ServiceRequestActivityListAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.ServiceRequestActivityListAppletPR = (function () {

        function ServiceRequestActivityListAppletPR(pm) {
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ServiceRequestActivityListAppletPR, SiebelAppFacade.JQGridRenderer);
        var appletName;
        var pm;

        ServiceRequestActivityListAppletPR.prototype.Init = function () {
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.Init.apply(this, arguments);
          SiebelJS.Log(appletName + ": ServiceRequestActivityListAppletPR:      Init method reached.");

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        ServiceRequestActivityListAppletPR.prototype.ShowUI = function () {
          SiebelJS.Log(appletName + ": ServiceRequestActivityListAppletPR:      ShowUI method reached.");
          //var divId = "s_" + pm.Get("GetFullId") + "_div";
          //document.getElementById(divId).style.display = 'none';

          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        ServiceRequestActivityListAppletPR.prototype.BindData = function (bRefresh) {
          SiebelJS.Log(appletName + ": ServiceRequestActivityListAppletPR:      BindData method reached.");
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.BindData.apply(this, arguments);
        }

        ServiceRequestActivityListAppletPR.prototype.BindEvents = function () {
          SiebelJS.Log(appletName + ": ServiceRequestActivityListAppletPR:      BindEvents method reached.");
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        ServiceRequestActivityListAppletPR.prototype.EndLife = function () {
          if (SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelJS.Log(appletName + ": ServiceRequestActivityListAppletPR:      EndLife method reached.");
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return ServiceRequestActivityListAppletPR;
      }()
      );
      return "SiebelAppFacade.ServiceRequestActivityListAppletPR";
    })
}
