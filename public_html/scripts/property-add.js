var pendingList = Array();
var idProperty = 0;
var ignoreImages = false;

var PropertyAdd = function() {
// Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(function () {
        drawScoreCharts();
    });

    $('#add-property .submit').on('click', function () {
        $("#add-property").submit();
    });


    $("#add-property").submit(function (event) {

        //disable the default form submission
        event.preventDefault();
        if (pendingList.length > 0 || ignoreImages) {
            $('#loader').show();

            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                statusCode: {
                    401: function () {
                        AddPop('danger', __('Unauthorized!'), __("You don't have permissions to access this page") + '<br><b>' + __(title) + '</b>', '', '', 'fa fa-lock');
                    }
                }
            }).always(function (json) {
                if (json == 'userNotLogged') {
                    window.location = '/Login/Login';
                } else {
                    if (json.status == true) {
                        let content = __("This property was successfully saved!");

                        if (pendingList.length > 0) {
                            content += '<br>' + __('We are now uploading your pictures, please wait.');
                            $('#add-property .tabs .tabs-navigation li:not(:nth-child(5))').hide();
                            $('#add-property .tabs .tabs-navigation li:nth-child(5):not(.active)').click();
                            $('#add-property .tabs .actions-bottom').hide();
                            idProperty = json.lastId;
                            sendAllImages();
                        } else {
                            $('#add-property .tabs .tabs-navigation li:last-child()').hide();
                            $('#add-property .tabs .actions-bottom').hide();
                            OpenLink('/Property/Details/' + json.lastId, __('Property details'), '');
                        }
                        AddPop('success', __('Property was saved!'), content, ['/Property/Details/' + json.lastId, '<i class="fa fa-eye"></i> ' + __('See it'), __('Property details'), '']);

                    } else {
                        AddPop('danger', __('An error occurred while trying to save this property'), json.error);
                    }
                }

                $('#loader').hide();
            });
        } else {
            ignoreImages = true;
            AddPop('info', __('Images'), __('Did you forget to add images?'));
            $('#add-property .tabs .tabs-navigation li:nth-child(5):not(.active)').click();
            $('#add-property .submit').html('<i class="fa fa-save"></i>' + __('Save this property without images'));
        }


        return false;
    });


//changing currency
    $('#currency-indicator').on('select2:select', function () {
        $(".currency-indicator").html($(this).val());
    });

//fileupload
    var ul = $('#images-preview');

    $('#drop a').click(function () {
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });
// Initialize the jQuery File Upload plugin
    $('#add-property').fileupload({
        url: '/Image/UploadPropertyPicture',
        autoUpload: false,
        limitMultiFileUploads: 3,
        limitConcurrentUploads: 2,
        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),

        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {


            ignoreImages = false;
            $('#add-property .submit').html('<i class="fa fa-save"></i>' + __('Save this property'));

            var tpl = $('<li><label><input type="radio" name="mainPicture">' + __('Main picture') + '</label><i class="far fa-trash-alt"></i><img/><input type="text" placeholder="' + __('Picture label') + '"/><progress></progress></li>');

            var reader = new FileReader();

            reader.onload = function (e) {
                tpl.find('img').attr('src', e.target.result);
            };

            reader.readAsDataURL(data.files[0]);

            //Starting checkboxes
            tpl.find('input[name=mainPicture]').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });

            // Add the HTML to the UL element
            data.context = tpl.prependTo(ul);

            // Listen for clicks on the cancel icon
            tpl.find('i').click(function () {

                if (tpl.hasClass('working')) {
                    jqXHR.abort();
                }

                tpl.fadeOut(function () {
                    tpl.remove();
                });
                ignoreImages = true;

            });
            pendingList.push(data);
        },

        progress: function (e, data) {

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('progress').val(progress).change();

            if (progress == 100) {
                data.context.removeClass('working');
            }
        },

        fail: function (e, data) {
            // Something has gone wrong!
            data.context.addClass('error');
        }

    });

    $('#add-property').bind('fileuploadsubmit', function (e, data) {
        let label = data.context.find('input[type=text]').val();
        let isPrincipal = data.context.find('input[type=radio]').is(':checked');
        data.formData = {label: label, isPrincipal: isPrincipal, idProperty: idProperty};
    });
    $('#add-property').bind('fileuploaddone', function (e, data) {
        data.context.append('<span>' + data.context.find('input[type=text]').val() + '</span>');
        data.context.find('input[type=text]').fadeOut(function () {
            $(this).remove();
        });
        data.context.find('label').fadeOut(function () {
            $(this).remove();
        });
        data.context.find('i').fadeOut(function () {
            $(this).remove();
        });

    });

// Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });


//Property Description
    $('#property-description').trumbowyg({
        svgPath: '/plugins/trumbowyg/ui/icons.svg',
        autogrow: true,
        resetCss: true,
        imageWidthModalEdit: true,
        btns: [
            ['viewHTML'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['superscript', 'subscript'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat']
        ]
    });

//Property Description
    $('#internal-observations').trumbowyg({
        svgPath: '/plugins/trumbowyg/ui/icons.svg',
        autogrow: true,
        resetCss: true,
        imageWidthModalEdit: true,
        btns: [
            ['strong', 'em', 'del'],
            ['foreColor', 'backColor'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat']
        ]
    });

//spinner score
    $(".spinner-score").spinner('delay', 0).spinner('changed', function (e, newVal, oldVal) {
        drawScoreCharts();
    });


    function sendAllImages() {
        $('#drop').slideUp('fast');
        pendingList.forEach(function (data) {
            data.submit();
        });
        pendingList = [];
    }

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
    function drawScoreCharts() {



        // Set chart options
        var options = {
            legend: 'none',
            pieSliceText: 'none',

            animation: {
                duration: 200,
                easing: 'out',
                startup: true
            },

            pieHole: 0.87,
            slices: {
                0: {color: '#4B77BE'},
                1: {color: 'transparent'}
            },
            'width': 250,
            'height': 250
        };


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('walk_score'));
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Score');
        data.addColumn('number', 'number');
        data.addRows([
            ['Score', parseInt($("#walk-score-val").val(), 10)],
            ['empty', (100 - parseInt($("#walk-score-val").val(), 10))]
        ]);
        chart.draw(data, options);

        // Instantiate and draw our chart, passing in some options.
        var chart2 = new google.visualization.PieChart(document.getElementById('transit_score'));
        // Create the data table.
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Score');
        data2.addColumn('number', 'number');
        data2.addRows([
            ['Score', parseInt($("#transit-score-val").val(), 10)],
            ['empty', (100 - parseInt($("#transit-score-val").val(), 10))]
        ]);
        chart2.draw(data2, options);

        // Instantiate and draw our chart, passing in some options.
        var chart3 = new google.visualization.PieChart(document.getElementById('bike_score'));
        // Create the data table.
        var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Score');
        data3.addColumn('number', 'number');
        data3.addRows([
            ['Score', parseInt($("#bike-score-val").val(), 10)],
            ['empty', (100 - parseInt($("#bike-score-val").val(), 10))]
        ]);
        chart3.draw(data3, options);
    }

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    var placeSearch, autocomplete;
    var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        sublocality_level_1: 'long_name',
        administrative_area_level_1: 'long_name',
        administrative_area_level_2: 'long_name',
        country: 'long_name',
        postal_code: 'short_name'
    };

    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('google_address_autocomplete')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        for (var component in componentForm) {
            document.getElementById(component).value = '';
            document.getElementById(component).disabled = false;
        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];


                document.getElementById(addressType).value = val;

            }
        }
        if ($('#locality').val() == '') {
            $('#locality').val($('#administrative_area_level_2').val());
        }
        setTimeout(function () {

            document.getElementById('unit_number').focus();
        }, 100);
        $('#address-filled').slideDown('fast');
    }

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
    function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }

    document.getElementById('google_address_autocomplete').onclick = function () {
        initAutocomplete();

    };
    $(function () {
        $("#add-property .submit").on('click', function () {

        });
    });
};