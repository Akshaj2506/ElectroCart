function showTable() {
   var selectProductForm = document.getElementById("get-product");
   var tableName = selectProductForm.value;
   document.getElementById("select-product-form").style.display = "none";
   document.getElementById(tableName).style.display = "block";
}