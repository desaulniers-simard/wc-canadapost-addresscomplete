# Canada Post AddressComplete for WooCommerce #
Contributors: brocheafoin  
Tags: woocommerce, shipping, address validation, canada post  
Requires at least: 4.4  
Tested up to: 4.5.2  
Stable tag: releases  
License: GPLv2 or later  
License URI: http://www.gnu.org/licenses/gpl-2.0.html  

Address validation for WooCommerce provided by Canada Post's AddressComplete service

## Description ##

Provides seamless integration between WooCommerce and [Canada Post's AddressComplete](https://www.canadapost.ca/pca/) address validation service. During checkout, billing and shipping address form fields will behave in the following way:

1. The first line and the postal/zip code fields now act as an autompleting search field for valid postal addresses.
1. On selection of a search result, the remaining fields will be populated with the data from the valid address.
1. WooCommerce's built-in country selector acts as a filter for search results. Only addresses from the selected country will be displayed.

As [AddressComplete's site](https://www.canadapost.ca/pca/) will tell you this should help:

1. Increase data accuracy
1. Reduce cart abandonment
1. Avoid the cost of missed deliveries
1. Improve customer service

**Important note:** this plugin does not help on its own. You will also need to register for *AddressComplete* and set things up over there. Please read the installation instructions carefully.

## Installation ##

### Set up AddressComplete ###
1. [Register](https://www.canadapost.ca/pca/register/) or [sign in](https://www.canadapost.ca/pca/login/) at AddressComplete
1. Go to your [dashboard](https://www.canadapost.ca/pca/Account/)
1. Click *Create New Installation*
1. On the following page, instead of entering your URL, click the *Create an API Key* in the *Custom Installation* sidebar
1. Follow the steps to create and configure your API key

### Install the plugin ###
1. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

### Configure the plugin ###
1. Go to your site's Dashboard, then head over to WooCommerce' Settings page
1. Click on the *Shipping* tab
1. At the bottom of the page, you will see a section titled *Address Validation*
1. Enter the API key you created at *AddressComplete* and save the settings
1. You're done!

## Changelog ##

### 1.0 ###
* Initial release
