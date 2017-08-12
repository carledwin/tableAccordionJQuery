$(document).ready(function() {
	$(".subItem").hide();

	//exibirSubItemMudandoValorTD();
	exibirSubItemRemovendoTRAdicionadoNovoTR();
});

function exibirSubItemMudandoValorTD() {
	$(".item").click(function() {
		$(".subItem").hide();
		var identificator = $(this).attr('data-identificator');
		$(identificator).toggleClass('subItem');
		var idItem = $(this).attr('id');
		var trItem = $("#tr_" + idItem)
		trItem.find('td').text("Novo Valor");
		trItem.show();

	});
}

function exibirSubItemRemovendoTRAdicionadoNovoTR() {
	$(".item").click(
			function() {
				$(".subItem").hide();
				var identificator = $(this).attr('data-identificator');
				$(identificator).toggleClass('subItem');
				var itemClicado = $(this);
				var idItemClicado = itemClicado.attr('id');
				var idTrItemClicado = "#tr_" + idItemClicado;
				var trChield = $(idTrItemClicado);
				trChield.remove();
				var result = '<tr id="' + idTrItemClicado
						+ '" class="subItem">' + '<td id="description_'
						+ idItemClicado + '" colspan="3">Novo TR e valor</td>'
						+ '</tr>';
				itemClicado.after(result);
				// var td = trChield.find('td');
				// td.text("novo valor");
				// trChield.show();

			});
}