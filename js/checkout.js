( function( $ ) {
    addressComplete.listen( 'ready', function() {
        wcCanadaPostOptions.bar = wcCanadaPostOptions.bar || {};
        wcCanadaPostOptions.bar.showCountry = false;
        billing_control = bindPcaControl( 'billing' );
        $( '#ship-to-different-address-checkbox' ).change( function() {
            var $shipping_cb = $( this );
            if ( $shipping_cb.prop( 'checked') && typeof( shipping_control) == 'undefined' ) {
                shipping_control = bindPcaControl( 'shipping' );
            }
        });
        function bindPcaControl( prefix ) {
            var fields = [
                { element: prefix + "_address_1", field: "Line1" },
                { element: prefix + "_address_2", field: "Line2", mode: pca.fieldMode.POPULATE },
                { element: prefix + "_city", field: "City", mode: pca.fieldMode.POPULATE },
                { element: prefix + "_postcode", field: "PostalCode" }
            ];
            var control = new pca.Address( fields, wcCanadaPostOptions);
            control.setCountry( $( '#' + prefix + '_country' ).val() );
            control.listen( 'populate', function( address ) {
                $( '#' + prefix + '_state').val( address.ProvinceCode).trigger( 'change' );
            });
            $( document.body ).on( 'change', '#' + prefix + '_country', function() {
                control.setCountry( $( '#' + prefix + '_country' ).val() );
            });
            return control;
        }
    })
})( jQuery );