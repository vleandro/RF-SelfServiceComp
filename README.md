# RF-SelfServiceComp
A Lightning Component for launching Remedyforce Self Service in a new browser tab from a Salesforce Community

10/20/2017
RFSelfServiceComp.cmp
For the aura:attribute "myURL", be sure and modify the default URL to match your Community URL.  In other words, append this line:

/bmcservicedesk__selfservicenew#/support/catalog/common/

to the end of your Community URL.  

RFSelfServiceCompController.js
Use the URL from RFSelfServiceComp.cmp to designate the url key/pair in the urlEvent.setParams function.

At this time Remedyforce supports the following Salesforce Community licenses:

* Customer Community Plus
* Partner Community
* Company Community 

