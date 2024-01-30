document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("myform");
  var submitPrompt = document.getElementById("submitPrompt");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting immediately
      
      // Show the prompt
      submitPrompt.style.display = "block";
      
      // Submit the form after a short delay (for demonstration)
      setTimeout(function() {
          form.submit();
      }, 2000); // Change delay as needed (in milliseconds)
  });
});
