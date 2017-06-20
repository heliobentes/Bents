<script type="text/javascript">
    var chart = chart2 = chart3 = chart4 = data = data2 = data3 = data4 = options = options2 = options3 = options4 = null;
    setTimeout(function () {
        google.load('visualization', '1', {
            'callback': 'drawChart()', 'packages': ['corechart']
        })
    }, 100);


    function drawChart() {

        data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Imovi', 300],
            ['Empresa 2', 285],
            ['Empresa 3', 203],
            ['Empresa 4', 154],
            ['Empresa 5', 84]
        ]);

        options = {
            'title': 'Credenciados com mais financiamentos',
            'width': '100%',
            'height': 400,
            animation: {
                duration: 1000,
                easing: 'out'
            }
        };

        chart = new google.visualization.PieChart(document.getElementById('Dash_Div_maisFin'));
        chart.draw(data, options);

        data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Mês');
        data2.addColumn('number', 'Tempo (dias)');
        data2.addRows([
            ['Jan/13', 300],
            ['Fev/13', 285],
            ['Mar/13', 283],
            ['Abr/13', 302],
            ['Mar/13', 287],
            ['Jan/13', 300],
            ['Fev/13', 285],
            ['Mar/13', 283],
            ['Abr/13', 302],
            ['Mar/13', 287]
        ]);

        options2 = {
            'title': 'Tempo de Resposta Financiamento',
            'width': '95%',
            'height': 400,
            animation: {
                duration: 1000,
                easing: 'out'
            }
        };

        chart2 = new google.visualization.LineChart(document.getElementById('Dash_Div_tempoResp'));
        chart2.draw(data2, options2);


        data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Mês');
        data3.addColumn('number', 'Tempo (dias)');
        data3.addRows([
            ['Jan/13', 5],
            ['Fev/13', 8],
            ['Mar/13', 3],
            ['Abr/13', 5],
            ['Mar/13', 7],
            ['Jan/13', 11],
            ['Fev/13', 4],
            ['Mar/13', 6],
            ['Abr/13', 4],
            ['Mar/13', 5]
        ]);

        options3 = {
            'title': 'Ocorrências por Financiamento',
            'width': '95%',
            'height': 400,
            animation: {
                duration: 1000,
                easing: 'out'
            }
        };

        chart3 = new google.visualization.ColumnChart(document.getElementById('Dash_Div_ocorrencias'));
        chart3.draw(data3, options3);

        data4 = new google.visualization.arrayToDataTable([
            ['Mês', 'Passo 1', 'Passo 2', 'Passo 3', 'Passo 4', 'Passo 5', 'Passo 6', 'Passo 7', 'Passo 8', 'Passo 9', 'Passo 10'],
            ['Jan/13', 20, 23, 22, 23, 21, 8, 19, 23, 22, 18],
            ['Fev/13', 21, 8, 19, 23, 22, 21, 8, 19, 23, 22],
            ['Mar/13', 20, 21, 8, 19, 21, 8, 19, 23, 22, 22]
        ]);

        options4 = {
            'title': 'Tempo médio entre passos por mês',
            'width': '95%',
            'height': 400,
            animation: {
                duration: 1000,
                easing: 'out'
            },
            hAxis: {title: 'Mês'}
        };

        chart4 = new google.visualization.ColumnChart(document.getElementById('Dash_Div_tempoPasso'));
        chart4.draw(data4, options4);
    }
    $(function () {
        $("#pageContent").sortable({
            tolerance: "pointer",
            placeholder: "sortable-placeholder"
        });
    });
    /*$('#pageContent').resize(function () {
     chart = new google.visualization.PieChart(document.getElementById('Dash_Div_maisFin'));
     chart.draw(data, options);
     chart2 = new google.visualization.LineChart(document.getElementById('Dash_Div_tempoResp'));
     chart2.draw(data2, options2);
     chart3 = new google.visualization.ColumnChart(document.getElementById('Dash_Div_ocorrencias'));
     chart3.draw(data3, options3);
     chart4 = new google.visualization.ColumnChart(document.getElementById('Dash_Div_tempoPasso'));
     chart4.draw(data4, options4);
     });*/
</script>


<div class="pageTitle">Dashboard</div>
<div id="pageContent"">
<div id="Dash_Div_maisFin" class="grafico"></div>
<div id="Dash_Div_tempoResp" class="grafico"></div>
<div id="Dash_Div_ocorrencias" class="grafico"></div>
<div id="Dash_Div_tempoPasso" class="grafico"></div>
</div>

