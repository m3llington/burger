// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var neweat = $(this).data("neweat");
  
      var neweatState = {
        eaten: neweat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: neweatState
      }).then(
        function() {
          console.log("changed eat to", neweat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        burger_name: $("#ca").val().trim(),
        eaten: $("[burger_name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });