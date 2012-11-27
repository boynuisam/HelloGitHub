#import "lib/tuneup_js/tuneup.js"

/*test("Goto detail company", function(target, app) {

	 var window = app.mainWindow();
	 
    target.frontMostApp().mainWindow().textFields()["companyName"].tap();
	target.frontMostApp().mainWindow().tableViews()[1].cells()["axon"].tap();

	UIALogger.logMessage( "search action" );
	target.frontMostApp().mainWindow().buttons()["Search"].tap();

	 UIATarget.localTarget().pushTimeout(20);
	 target.frontMostApp().mainWindow().tableViews()[0].cells()["Axon Active Holding AG, Wilhelmshöhe, 6003 Luzern"].tap();
	 UIATarget.localTarget().popTimeout();
	 	 

	target.delay( 5 );//for load article
	target.frontMostApp().mainWindow().popover().navigationBar().rightButton().tap();//select all article
	 
	target.frontMostApp().mainWindow().popover().navigationBar().buttons()["          Search           "].tap();
	 
	 target.delay( 10 );//for loading sucess data for detail

	 //Assert expected result
	 var textRequested = "Axon Active Holding AG";
	 var textValue = target.frontMostApp().mainWindow().staticTexts()["Axon Active Holding AG"].value();	 
	 assertEquals(textRequested, textValue);
	 
	 	 
    assertEquals(recipeName, textValue);
});
*/

test("Test 1", function(target, app) {
    var window = app.mainWindow();
	assertEquals("3", "2");	 
});

test("Test 2", function(target, app) {
    var window = app.mainWindow();
	 
	target.frontMostApp().mainWindow().textFields()["textField"].tap();
	 target.frontMostApp().keyboard().typeString("asdf");
	 target.tap({x:225.00, y:285.00});	 
	assertEquals("2", "2");	 
});



/*test("Test search two companies", function(target, app) {
   var window = app.mainWindow();
    target.frontMostApp().mainWindow().textFields()["companyName"].tap();
	var textField = UIATarget.localTarget().frontMostApp().mainWindow().textFields()["companyName"];
	textField.setValue("Axon Active AG"); 	 
	target.tap({x:61.00, y:359.00});
	target.frontMostApp().mainWindow().textFields()["cityName"].tap()
	UIATarget.localTarget().frontMostApp().mainWindow().textFields()["cityName"].setValue("Luzern");
	target.frontMostApp().mainWindow().buttons()["Search"].tap();
	 
	 target.delay( 10 );	 
	 //assertEquals(app.mainWindow().tableViews()[0].elements().length, 2);
	 assertEquals(app.mainWindow().tableViews()[0].cells().length, 2);
	 assertEquals(target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["0"]. staticTexts()[0].name(), "Axon Active AG, Schlössli Schönegg, 6003 Luzern");
	 //target.logElementTree();	 
	 //app.mainWindow().tableViews()[0].scrollToElementWithPredicate("name beginswith 'Axon holding'"); 
});*/


/*test("Test 2", function(target, app) {
    var window = app.mainWindow();
	UIALogger.logMessage("Testing for test2");	     
});

*/


//target.logElementTree();

