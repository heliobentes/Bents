<?php

/**
 * Created by JetBrains PhpStorm.
 * User: leandrowong
 * Date: 03/07/13
 * Time: 18:59
 * To change this template use File | Settings | File Templates.
 */
class DataManipulator
{
    /**
     * Remove caracteres não numéricos de uma string
     * @param string $str_value
     * @return string
     */
    static function RemoverCharsNaoNumericos($str_value)
    {
        return preg_replace("/\D+/", "", $str_value);
    }

    static function ConvertDateToDB($data)
    {
        $dataConvertida = implode("-", array_reverse(explode("/", $data)));

        $eh_valida = DataValidator::isValidDateTime($dataConvertida);
        if ($eh_valida) {
            return $dataConvertida;
        } else {
            return "0000-00-00";
        }
    }

    static function FormatarDataHora($dataHora)
    {
        $dataHora = explode(" ", $dataHora);
        $data = $dataHora[0];
        $hora = $dataHora[1];
        $dataConvertida = implode("/", array_reverse(explode("-", $data)));

        //{TODO} Verificar se a data é uma data válida (Fazer na classe DataValidator)
        $eh_valida = true;
        if ($eh_valida) {
            return $dataConvertida . " " . $hora;
        } else {
            return "00/00/0000";
        }
    }

    static function FormatarData($data)
    {

        $dataConvertida = implode("/", array_reverse(explode("-", $data)));

        //{TODO} Verificar se a data é uma data válida (Fazer na classe DataValidator)
        $eh_valida = true;
        if ($eh_valida) {
            return $dataConvertida;
        } else {
            return "00/00/0000";
        }
    }

    static function FormatarNumeroParaDB($valor)
    {
        $valor = str_replace(".", "", $valor);
        $valor = str_replace(",", ".", $valor);
        if (DataValidator::isNumeric($valor)) {
            $valorConvertido = number_format($valor, 2, '.', '');
            return $valorConvertido;
        } else {
            echo "Erro! Valor não numérico! \r\n";
            return "0.00";
        }

    }


}