// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
  }
function Address(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}
 Address.prototype.fullAddress = function() {
   return this.street + " ," + this.city + "," + this.county;
 }
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
  
  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      $(".new-address").each(function(){
        var inputtedStreet = $(this).find("#new-street").val();
        var inputtedCity = $(this).find("#new-city").val();
        var inputtedCounty = $(this).find("#new-county").val();

        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);

        newContact.addresses.push(newAddress);

      })
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $("#first-name").text(newContact.firstName);
        $("#last-name").text(newContact.lastName);

        $("#addresses").text("");
        newContact.addresses.forEach(function(address){
          $("#addresses").append("<li>" + address.fullAddress() + "</li>")
        })

      }); 
        
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  });
  