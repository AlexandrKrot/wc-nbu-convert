<?php

/**
 *
 */
class UpdateNBU
{

 static public function Curs($values='USD')
  {
    $valuenbu = get_option('exc_currency_woo');

    foreach ($valuenbu as $value) {
        if ($value["cc"]==$values) {
            $navcurs=$value["rate"];
      }

    }
    $name_valuta=[''];
    foreach ($valuenbu as $namitem => $value) {
      array_push($name_valuta, [$value["cc"]=>$value["txt"]]);


    }

  return $navcurs;

}
// получаем значения валют
static public function CodeValut()
{
  $valuenbu = get_option('exc_currency_woo');
  $name_valuta=[];
  if ($valuenbu) {
   foreach ($valuenbu as $namitem => $value) {
    // array_push($name_valuta, [$value["cc"]=>$value["txt"]]);

    $name_valuta[$value["cc"]]=$value["rate"];

    }
  }
  
     return $valuenbu;
    }


// делаем запрос к сайту и получаем значения
    static public function UpdateDB($status = true)
    {
      $url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
      $parsenbu = curl_init($url);
      curl_setopt($parsenbu, CURLOPT_RETURNTRANSFER, true);
      $return = curl_exec($parsenbu);
      $valuenbu = json_decode($return,true);
      update_option('exc_currency_woo',$valuenbu);
      $valurDB = get_option('exc_currency_woo');
        foreach ($valurDB as $value) {
            if ($value["cc"] == get_option('nbu_code')) {
                update_option('nbu_kurs', $value["rate"]);
                $update_new = $value["rate"];
    }
    }
      if ($status) {
        return $update_new;
      }
    }

}
