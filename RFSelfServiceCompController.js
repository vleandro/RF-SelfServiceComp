({
	navigate : function(component, event, helper) {
        // Find the text value of the component with aura:id set to "address"
        var address = component.find("address").get("v.myURL");
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": 'https://myvlcompany.force.com/customers/bmcservicedesk__selfservicenew#/support/catalog/common/' + address
        });
        
        urlEvent.fire();
	},
})