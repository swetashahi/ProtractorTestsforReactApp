// spec.js
describe('React Risk assessment app',function(){
  browser.ignoreSynchronization = true;
  browser.get('http://localhost:8080/asset-manager-react-master');
  
  beforeEach(function(){
        browser.ignoreSynchronization = true;
	      browser.sleep(5000);
  })

  //Verify page title
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('React Tutorial');
    console.log('Title verified');
    
  
  });
   //Verify all static text on the page - the default rating and reco %
   it('should have default text as expected', function() {
    var heading = element(by.xpath("//h1[contains(text(),'Asset Manager')]"));
    expect(heading.isPresent()).toBe(true);  
    console.log('Heading verified');

    var question =element(by.xpath("//p[contains(text(), 'What does your risk profile look like?')]"));
    expect(question.isPresent()).toBe(true);
    console.log('Question verified');
    
    var default_bonds =element(by.xpath("//span[contains(text(),'Bonds:')]/following-sibling::span[1][contains(text(),'10')]"));
    expect(default_bonds.isPresent()).toBe(true);
    console.log('Default Bonds value verified');


    var default_stocks =element(by.xpath("//span[contains(text(),'Stocks:')]/following-sibling::span[1][contains(text(),'0')]"));
    expect(default_stocks.isPresent()).toBe(true);
    console.log('Default Stocks value verified');
    
    var default_ETF =element(by.xpath("//span[contains(text(),'ETFs:')]/following-sibling::span[1][contains(text(),'0')]"));
    expect(default_ETF.isPresent()).toBe(true);
    console.log('Default ETF value verified');

    var default_RealEstate =element(by.xpath("//span[contains(text(),'Real Estate:')]/following-sibling::span[1][contains(text(),'0')]"));
    expect(default_RealEstate.isPresent()).toBe(true);
    console.log('Default Real Estate value verified');

    var default_Cash =element(by.xpath("//span[contains(text(),'Cash:')]/following-sibling::span[1][contains(text(),'90')]"));
    expect(default_Cash.isPresent()).toBe(true);
    console.log('Default Cash value verified');

    var default_Rating =element(by.xpath("//button/span[2][contains(text(),'1')]"));
    expect(default_Rating.isPresent()).toBe(true);
    console.log('Default Rating value verified');


  });
  // Verify  the risk profile recommendation % based on risk rating 6
  //assuming the team will have access to correct risk profile % values
  
 //Note:Have passed correct distribution as against the data set which is coded to show the failure
  
  it('Should slide the risk profile slider to 6', function(){
    console.log('\n executed -- slide on 6');
    var locator_slider = element(by.name('risk'));
    browser.sleep(2000);
    browser.actions().dragAndDrop(locator_slider, {x:100, y:0}).perform();
    browser.sleep(5000); 
  

    var default_bonds =element(by.xpath("//span[contains(text(),'Bonds:')]/following-sibling::span[1][contains(text(),'15')]"));
    expect(default_bonds.isPresent()).toBe(true);
    console.log('Bonds value verified at 6');


    var default_stocks =element(by.xpath("//span[contains(text(),'Stocks:')]/following-sibling::span[1][contains(text(),'15')]"));
    expect(default_stocks.isPresent()).toBe(true);
    console.log('Bonds value verified at 6');
    
    var default_ETF =element(by.xpath("//span[contains(text(),'ETFs:')]/following-sibling::span[1][contains(text(),'15')]"));
    expect(default_ETF.isPresent()).toBe(true);
    console.log('ETF value verified at 6');

    var default_RealEstate =element(by.xpath("//span[contains(text(),'Real Estate:')]/following-sibling::span[1][contains(text(),'15')]"));
    expect(default_RealEstate.isPresent()).toBe(true);
    console.log('Real Estate value verified at 6');

    var default_Cash =element(by.xpath("//span[contains(text(),'Cash:')]/following-sibling::span[1][contains(text(),'60')]"));
    expect(default_Cash.isPresent()).toBe(true);
    console.log('Cash value verified at 6');

    var Rating =element(by.xpath("//button/span[2][contains(text(),'6')]"));
    expect(Rating.isPresent()).toBe(true);
    console.log('Rating value of 6 verified');


  });

  // Verify  the risk profile recommendation % based on risk rating 7

   it('Should slide the risk profile slider to 7', function(){
    console.log('\n executed -- slide on 7');
    var locator_slider = element(by.name('risk'));
    browser.sleep(2000);
    browser.actions().dragAndDrop(locator_slider, {x:200, y:0}).perform();
    browser.sleep(5000); 
  

    var default_bonds =element(by.xpath("//span[contains(text(),'Bonds:')]/following-sibling::span[1][contains(text(),'10')]"));
    expect(default_bonds.isPresent()).toBe(true);
    console.log('Bonds value verified at 7');


    var default_stocks =element(by.xpath("//span[contains(text(),'Stocks:')]/following-sibling::span[1][contains(text(),'20')]"));
    expect(default_stocks.isPresent()).toBe(true);
    console.log('Stocks value verified at 7');
    
    var default_ETF =element(by.xpath("//span[contains(text(),'ETFs:')]/following-sibling::span[1][contains(text(),'20')]"));
    expect(default_ETF.isPresent()).toBe(true);
    console.log('ETF value verified at 7');

    var default_RealEstate =element(by.xpath("//span[contains(text(),'Real Estate:')]/following-sibling::span[1][contains(text(),'20')]"));
    expect(default_RealEstate.isPresent()).toBe(true);
    console.log('Real Estate value verified at 7');

    var default_Cash =element(by.xpath("//span[contains(text(),'Cash:')]/following-sibling::span[1][contains(text(),'30')]"));
    expect(default_Cash.isPresent()).toBe(true);
    console.log('Cash value verified at 7');

    var Rating =element(by.xpath("//button/span[2][contains(text(),'7')]"));
    expect(Rating.isPresent()).toBe(true);
    console.log('Rating value of 7 verified');


  });
   

   // Verify  the risk profile recommendation % based on risk rating 8

  //Note: Have passed correct distribution as against the data set which is coded to show the failure
   
   it('Should slide the risk profile slider to 8', function(){
    console.log('executed -- slide on 8');
    var locator_slider = element(by.name('risk'));
    browser.sleep(2000);
    browser.actions().dragAndDrop(locator_slider, {x:300, y:0}).perform();
    browser.sleep(5000); 
  

    var default_bonds =element(by.xpath("//span[contains(text(),'Bonds:')]/following-sibling::span[1][contains(text(),'10')]"));
    expect(default_bonds.isPresent()).toBe(true);
    console.log('Bonds value verified at 8');


    var default_stocks =element(by.xpath("//span[contains(text(),'Stocks:')]/following-sibling::span[1][contains(text(),'30')]"));
    expect(default_stocks.isPresent()).toBe(true);
    console.log('Bonds value verified at 8');
    
    var default_ETF =element(by.xpath("//span[contains(text(),'ETFs:')]/following-sibling::span[1][contains(text(),'10')]"));
    expect(default_ETF.isPresent()).toBe(true);
    console.log('ETF value verified at 8');

    var default_RealEstate =element(by.xpath("//span[contains(text(),'Real Estate:')]/following-sibling::span[1][contains(text(),'30')]"));
    expect(default_RealEstate.isPresent()).toBe(true);
    console.log('Real Estate value verified at 8');

    var default_Cash =element(by.xpath("//span[contains(text(),'Cash:')]/following-sibling::span[1][contains(text(),'20')]"));
    expect(default_Cash.isPresent()).toBe(true);
    console.log('Cash value verified at 8');

    var Rating =element(by.xpath("//button/span[2][contains(text(),'8')]"));
    expect(Rating.isPresent()).toBe(true);
    console.log('Rating value of 8 verified');


  });

   // Verify  the risk profile recommendation % based on risk rating 9

   it('Should slide the risk profile slider to 9', function(){
    console.log('executed -- slide on 9');
    var locator_slider = element(by.name('risk'));
    browser.sleep(2000);
    browser.actions().dragAndDrop(locator_slider, {x:400, y:0}).perform();
    browser.sleep(5000); 
  

    var default_bonds =element(by.xpath("//span[contains(text(),'Bonds:')]/following-sibling::span[1][contains(text(),'0')]"));
    expect(default_bonds.isPresent()).toBe(true);
    console.log('Bonds value verified at 9');


    var default_stocks =element(by.xpath("//span[contains(text(),'Stocks:')]/following-sibling::span[1][contains(text(),'40')]"));
    expect(default_stocks.isPresent()).toBe(true);
    console.log('Stocks value verified at 9');
    
    var default_ETF =element(by.xpath("//span[contains(text(),'ETFs:')]/following-sibling::span[1][contains(text(),'5')]"));
    expect(default_ETF.isPresent()).toBe(true);
    console.log('ETF value verified at 9');

    var default_RealEstate =element(by.xpath("//span[contains(text(),'Real Estate:')]/following-sibling::span[1][contains(text(),'35')]"));
    expect(default_RealEstate.isPresent()).toBe(true);
    console.log('Real Estate value verified at 9');

    var default_Cash =element(by.xpath("//span[contains(text(),'Cash:')]/following-sibling::span[1][contains(text(),'20')]"));
    expect(default_Cash.isPresent()).toBe(true);
    console.log('Cash value verified at 9');

    var Rating =element(by.xpath("//button/span[2][contains(text(),'9')]"));
    expect(Rating.isPresent()).toBe(true);
    console.log('Rating value of 9 verified');


  });

   // Verify  the risk profile recommendation % based on risk rating 10

   it('Should slide the risk profile slider to 10', function(){
    console.log('\n executed -- slide on 10');
    var locator_slider = element(by.name('risk'));
    browser.sleep(2000);
    browser.actions().dragAndDrop(locator_slider, {x:500, y:0}).perform();
    browser.sleep(5000); 
  

    var default_bonds =element(by.xpath("//span[contains(text(),'Bonds:')]/following-sibling::span[1][contains(text(),'5')]"));
    expect(default_bonds.isPresent()).toBe(true);
    console.log('Bonds value verified at 10');


    var default_stocks =element(by.xpath("//span[contains(text(),'Stocks:')]/following-sibling::span[1][contains(text(),'40')]"));
    expect(default_stocks.isPresent()).toBe(true);
    console.log('Stocks value verified at 10');
    
    var default_ETF =element(by.xpath("//span[contains(text(),'ETFs:')]/following-sibling::span[1][contains(text(),'5')]"));
    expect(default_ETF.isPresent()).toBe(true);
    console.log('ETF value verified at 10');

    var default_RealEstate =element(by.xpath("//span[contains(text(),'Real Estate:')]/following-sibling::span[1][contains(text(),'40')]"));
    expect(default_RealEstate.isPresent()).toBe(true);
    console.log('Real Estate value verified at 10');

    var default_Cash =element(by.xpath("//span[contains(text(),'Cash:')]/following-sibling::span[1][contains(text(),'10')]"));
    expect(default_Cash.isPresent()).toBe(true);
    console.log('Cash value verified at 10');

    var rating =element(by.xpath("//button/span[2][contains(text(),'10')]"));
    expect(rating.isPresent()).toBe(true);
    console.log('Rating value of 10 verified');
   
});

   // Enter the values and verify recommendations appear

   it('Should enter values of current portfolio in $ and submit', function(){
    console.log('\n entering values');
    element(by.xpath("//form/input[1]")).sendKeys('1000');
    browser.sleep(1000);
    element(by.xpath("//form/input[2]")).sendKeys('2000');
    browser.sleep(1000);
    element(by.xpath("//form/input[3]")).sendKeys('3000');
    browser.sleep(1000);
    element(by.xpath("//form/input[4]")).sendKeys('4000');
    browser.sleep(1000);
    element(by.xpath("//form/input[5]")).sendKeys('5000');
    browser.sleep(1000);

    //click the submit button
    var submitButton =element(by.xpath("//form/input[6]"));
    submitButton.click();
    var recommendations =element(by.xpath("//ul"));
    expect(recommendations.isPresent()).toBe(true);
    console.log('Recommendations generated');
    browser.sleep(2000);
});

   //@TO-DO: Verify text of recommendations based on values entered, input-output, boundary conditions
   //@TO-DO: Verify risk profile % based on risk rating of 2-5


});    
