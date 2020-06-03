<script>
    function net_change() {
    set_variable();
    gross_price.value = (net_price.value *(1+(vat_rate.value/100))).toFixed(2);
    tax_amount.value = (gross_price.value - net_price.value).toFixed(2);
    lastFunction = 'net';
    }
    
    function gross_change() {
    set_variable();
    net_price.value = (gross_price.value / (1 + (vat_rate.value/100))).toFixed(2);
    tax_amount.value = (gross_price.value - net_price.value).toFixed(2);
    lastFunction = 'gross';
    }
    
    function amount_change() {
    set_variable();
    net_price.value = ((tax_amount.value / vat_rate.value) * 100).toFixed(2);
    gross_price.value = (+net_price.value + +tax_amount.value).toFixed(2);
    lastFunction = 'amount';
    }
    
    function rate_change() {
        if (lastFunction === 'net') {
        net_change();
	    }
        else if (lastFunction === 'gross') {
            gross_change();
        }

        else {
            amount_change();
        }
    }

    function set_variable(){
        var vat_rate = document.getElementById('vat_rate');
        var net_price = document.getElementById('net_price');
        var gross_price = document.getElementById('gross_price');
        var tax_amount = document.getElementById('tax_amount');
    }
        
    // Добавляет слушателя событий для таблицы
    var vat_rate = document.getElementById('vat_rate');
    var net_price = document.getElementById('net_price');
    var gross_price = document.getElementById('gross_price');
    var tax_amount = document.getElementById('tax_amount');
    var lastFunction = 'none';
    document.getElementById('gross_price').focus();


    vat_rate.addEventListener("input", rate_change, false);
    net_price.addEventListener("input", net_change, false);
    gross_price.addEventListener("input", gross_change, false);
    tax_amount.addEventListener("input", amount_change, false);
    </script>
