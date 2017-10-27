function init() {
  handlebarsSetup()
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
