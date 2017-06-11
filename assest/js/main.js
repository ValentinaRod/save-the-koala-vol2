$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})   /*tooltips*/

/*Modal*/
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

/*carusel*/

$('#myCollapsible').on('hidden.bs.collapse', function () {
	interval: 1000
})