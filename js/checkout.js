jQuery( document ).ready( function( $ ) {
    var billing_fields = [
        { element: "billing_address_1", field: "Line1" },
        { element: "billing_address_2", field: "Line2", mode: pca.fieldMode.POPULATE },
        { element: "billing_city", field: "City", mode: pca.fieldMode.POPULATE },
        { element: "billing_state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },
        { element: "billing_postcode", field: "PostalCode" },
        { element: "billing_country", field: "CountryName", mode: pca.fieldMode.COUNTRY }
    ];
    new pca.Address( billing_fields, wcCanadaPostOptions);

    $( '#ship-to-different-address-checkbox' ).change( function() {
        var $shipping_cb = $( this );
        if ( $shipping_cb.prop( 'checked') && !$shipping_cb.data( 'instantiated' ) ) {
            var shipping_fields = [
                { element: "shipping_address_1", field: "Line1" },
                { element: "shipping_address_2", field: "Line2", mode: pca.fieldMode.POPULATE },
                { element: "shipping_city", field: "City", mode: pca.fieldMode.POPULATE },
                { element: "shipping_state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },
                { element: "shipping_postcode", field: "PostalCode" },
                { element: "shipping_country", field: "CountryName", mode: pca.fieldMode.COUNTRY }
            ];
            new pca.Address( shipping_fields, wcCanadaPostOptions);
            $shipping_cb.data( 'instantiated', true );
        }
    })

});