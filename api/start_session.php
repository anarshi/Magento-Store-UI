<?php

    $proxy = new SoapClient('http://stefanmagento.com/api/v2_soap/?wsdl');
    $sessionId = $proxy->login('stefan125', '123456stefan');

    echo json_encode($sessionId);
