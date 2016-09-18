<?php

	$proxy = new SoapClient('http://stefanmagento.com/api/v2_soap/?wsdl'); // TODO : change url
	$sessionId = $proxy->login('stefan125', '123456stefan'); // TODO : change login and pwd if necessary
	$result = $proxy->catalogProductList($sessionId);
    $product_ids = array();

	for ($i = 0 ; $i < count($result) ; $i++ ) {
   	 $product_ids[$i] = $result[$i]->product_id;
	}

	//get all media data of products per product_id
    $productsImages = array();
    for ($i = 0 ; $i <  count($product_ids); $i++ ) {
        $productsImages[$product_ids[$i]] = $proxy->catalogProductAttributeMediaList($sessionId, $product_ids[$i])[0]->url;
    }

    echo json_encode($productsImages);




	// If you don't need the session anymore
	//$client->endSession($session);
