(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<br>
  <style>
#form {
  font-family: Arial, sans-serif;
  width: 400px;
  margin: 0 auto;
}

a {
    text-decoration:none;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

td {
  padding: 1px;
  text-align: left;
   font-size: 13px;
}

input[type="text"]  {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 13px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 13px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

input[type="submit"] {
  background-color: #487cac;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
      width:100%;
}
#label {
      width:140px;
    }

  </style>
<form id="form">
<table>
<tr>
<td id="label">From Currency</td>
<td>
<select id="builder_from" name="currency">
    <option value="AFN">Afghan Afghani</option>
    <option value="ALL">Albanian Lek</option>
    <option value="DZD">Algerian Dinar</option>
    <option value="AOA">Angolan Kwanza</option>
    <option value="ARS">Argentine Peso</option>
    <option value="AMD">Armenian Dram</option>
    <option value="AWG">Aruban Florin</option>
    <option value="AUD">Australian Dollar</option>
    <option value="AZN">Azerbaijani Manat</option>
    <option value="BSD">Bahamian Dollar</option>
    <option value="BHD">Bahraini Dinar</option>
    <option value="BDT">Bangladeshi Taka</option>
    <option value="BBD">Barbadian Dollar</option>
    <option value="BYR">Belarusian Ruble</option>
    <option value="BEF">Belgian Franc</option>
    <option value="BZD">Belize Dollar</option>
    <option value="BMD">Bermudan Dollar</option>
    <option value="BTN">Bhutanese Ngultrum</option>
    <option value="BTC">Bitcoin</option>
    <option value="BOB">Bolivian Boliviano</option>
    <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
    <option value="BWP">Botswanan Pula</option>
    <option value="BRL">Brazilian Real</option>
    <option value="GBP">British Pound Sterling</option>
    <option value="BND">Brunei Dollar</option>
    <option value="BGN">Bulgarian Lev</option>
    <option value="BIF">Burundian Franc</option>
    <option value="KHR">Cambodian Riel</option>
    <option value="CAD">Canadian Dollar</option>
    <option value="CVE">Cape Verdean Escudo</option>
    <option value="KYD">Cayman Islands Dollar</option>
    <option value="XOF">CFA Franc BCEAO</option>
    <option value="XAF">CFA Franc BEAC</option>
    <option value="XPF">CFP Franc</option>
    <option value="CLP">Chilean Peso</option>
    <option value="CNY">Chinese Yuan</option>
    <option value="COP">Colombian Peso</option>
    <option value="KMF">Comorian Franc</option>
    <option value="CDF">Congolese Franc</option>
    <option value="CRC">Costa Rican ColÃ³n</option>
    <option value="HRK">Croatian Kuna</option>
    <option value="CUC">Cuban Convertible Peso</option>
    <option value="CZK">Czech Republic Koruna</option>
    <option value="DKK">Danish Krone</option>
    <option value="DJF">Djiboutian Franc</option>
    <option value="DOP">Dominican Peso</option>
    <option value="XCD">East Caribbean Dollar</option>
    <option value="EGP">Egyptian Pound</option>
    <option value="ERN">Eritrean Nakfa</option>
    <option value="EEK">Estonian Kroon</option>
    <option value="ETB">Ethiopian Birr</option>
    <option value="EUR">Euro</option>
    <option value="FKP">Falkland Islands Pound</option>
    <option value="FJD">Fijian Dollar</option>
    <option value="GMD">Gambian Dalasi</option>
    <option value="GEL">Georgian Lari</option>
    <option value="DEM">German Mark</option>
    <option value="GHS">Ghanaian Cedi</option>
    <option value="GIP">Gibraltar Pound</option>
    <option value="GRD">Greek Drachma</option>
    <option value="GTQ">Guatemalan Quetzal</option>
    <option value="GNF">Guinean Franc</option>
    <option value="GYD">Guyanaese Dollar</option>
    <option value="HTG">Haitian Gourde</option>
    <option value="HNL">Honduran Lempira</option>
    <option value="HKD">Hong Kong Dollar</option>
    <option value="HUF">Hungarian Forint</option>
    <option value="ISK">Icelandic KrÃ³na</option>
    <option value="INR">Indian Rupee</option>
    <option value="IDR">Indonesian Rupiah</option>
    <option value="IRR">Iranian Rial</option>
    <option value="IQD">Iraqi Dinar</option>
    <option value="ILS">Israeli New Sheqel</option>
    <option value="ITL">Italian Lira</option>
    <option value="JMD">Jamaican Dollar</option>
    <option value="JPY">Japanese Yen</option>
    <option value="JOD">Jordanian Dinar</option>
    <option value="KZT">Kazakhstani Tenge</option>
    <option value="KES">Kenyan Shilling</option>
    <option value="KWD">Kuwaiti Dinar</option>
    <option value="KGS">Kyrgystani Som</option>
    <option value="LAK">Laotian Kip</option>
    <option value="LVL">Latvian Lats</option>
    <option value="LBP">Lebanese Pound</option>
    <option value="LSL">Lesotho Loti</option>
    <option value="LRD">Liberian Dollar</option>
    <option value="LYD">Libyan Dinar</option>
    <option value="LTL">Lithuanian Litas</option>
    <option value="MOP">Macanese Pataca</option>
    <option value="MKD">Macedonian Denar</option>
    <option value="MGA">Malagasy Ariary</option>
    <option value="MWK">Malawian Kwacha</option>
    <option value="MYR">Malaysian Ringgit</option>
    <option value="MVR">Maldivian Rufiyaa</option>
    <option value="MRO">Mauritanian Ouguiya</option>
    <option value="MUR">Mauritian Rupee</option>
    <option value="MXN">Mexican Peso</option>
    <option value="MDL">Moldovan Leu</option>
    <option value="MNT">Mongolian Tugrik</option>
    <option value="MAD">Moroccan Dirham</option>
    <option value="MZM">Mozambican Metical</option>
    <option value="MMK">Myanmar Kyat</option>
    <option value="NAD">Namibian Dollar</option>
    <option value="NPR">Nepalese Rupee</option>
    <option value="ANG">Netherlands Antillean Guilder</option>
    <option value="TWD">New Taiwan Dollar</option>
    <option value="NZD">New Zealand Dollar</option>
    <option value="NIO">Nicaraguan CÃ³rdoba</option>
    <option value="NGN">Nigerian Naira</option>
    <option value="KPW">North Korean Won</option>
    <option value="NOK">Norwegian Krone</option>
    <option value="OMR">Omani Rial</option>
    <option value="PKR">Pakistani Rupee</option>
    <option value="PAB">Panamanian Balboa</option>
    <option value="PGK">Papua New Guinean Kina</option>
    <option value="PYG">Paraguayan Guarani</option>
    <option value="PEN">Peruvian Nuevo Sol</option>
    <option value="PHP">Philippine Peso</option>
    <option value="PLN">Polish Zloty</option>
    <option value="QAR">Qatari Rial</option>
    <option value="RON">Romanian Leu</option>
    <option value="RUB">Russian Ruble</option>
    <option value="RWF">Rwandan Franc</option>
    <option value="SVC">Salvadoran ColÃ³n</option>
    <option value="WST">Samoan Tala</option>
    <option value="SAR">Saudi Riyal</option>
    <option value="RSD">Serbian Dinar</option>
    <option value="SCR">Seychellois Rupee</option>
    <option value="SLL">Sierra Leonean Leone</option>
    <option value="SGD">Singapore Dollar</option>
    <option value="SKK">Slovak Koruna</option>
    <option value="SBD">Solomon Islands Dollar</option>
    <option value="SOS">Somali Shilling</option>
    <option value="ZAR">South African Rand</option>
    <option value="KRW">South Korean Won</option>
    <option value="XDR">Special Drawing Rights</option>
    <option value="LKR">Sri Lankan Rupee</option>
    <option value="SHP">St. Helena Pound</option>
    <option value="SDG">Sudanese Pound</option>
    <option value="SRD">Surinamese Dollar</option>
    <option value="SZL">Swazi Lilangeni</option>
    <option value="SEK">Swedish Krona</option>
    <option value="CHF">Swiss Franc</option>
    <option value="SYP">Syrian Pound</option>
    <option value="STD">São Tomé and Príncipe Dobra</option>
    <option value="TJS">Tajikistani Somoni</option>
    <option value="TZS">Tanzanian Shilling</option>
    <option value="THB">Thai Baht</option>
    <option value="TOP">Tongan pa'anga</option>
    <option value="TTD">Trinidad & Tobago Dollar</option>
    <option value="TND">Tunisian Dinar</option>
    <option value="TRY">Turkish Lira</option>
    <option value="TMT">Turkmenistani Manat</option>
    <option value="UGX">Ugandan Shilling</option>
    <option value="UAH">Ukrainian Hryvnia</option>
    <option value="AED">United Arab Emirates Dirham</option>
    <option value="UYU">Uruguayan Peso</option>
    <option value="USD" selected>US Dollar</option>
    <option value="UZS">Uzbekistan Som</option>
    <option value="VUV">Vanuatu Vatu</option>
    <option value="VEF">Venezuelan BolÃ­var</option>
    <option value="VND">Vietnamese Dong</option>
    <option value="YER">Yemeni Rial</option>
    <option value="ZMK">Zambian Kwacha</option>
</select>
</td>
</tr>
<tr>
<td>Amount</td>
<td><input id="builder_amount" type="text"  placeholder="Enter Account"></td>
</tr>
<tr>
<td>To Currency</td>
<td><select id="builder_to" name="currency">
<option value="AFN">Afghan Afghani</option>
<option value="ALL">Albanian Lek</option>
<option value="DZD">Algerian Dinar</option>
<option value="AOA">Angolan Kwanza</option>
<option value="ARS">Argentine Peso</option>
<option value="AMD">Armenian Dram</option>
<option value="AWG">Aruban Florin</option>
<option value="AUD">Australian Dollar</option>
<option value="AZN">Azerbaijani Manat</option>
<option value="BSD">Bahamian Dollar</option>
<option value="BHD">Bahraini Dinar</option>
<option value="BDT">Bangladeshi Taka</option>
<option value="BBD">Barbadian Dollar</option>
<option value="BYR">Belarusian Ruble</option>
<option value="BEF">Belgian Franc</option>
<option value="BZD">Belize Dollar</option>
<option value="BMD">Bermudan Dollar</option>
<option value="BTN">Bhutanese Ngultrum</option>
<option value="BTC">Bitcoin</option>
<option value="BOB">Bolivian Boliviano</option>
<option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
<option value="BWP">Botswanan Pula</option>
<option value="BRL">Brazilian Real</option>
<option value="GBP">British Pound Sterling</option>
<option value="BND">Brunei Dollar</option>
<option value="BGN">Bulgarian Lev</option>
<option value="BIF">Burundian Franc</option>
<option value="KHR">Cambodian Riel</option>
<option value="CAD">Canadian Dollar</option>
<option value="CVE">Cape Verdean Escudo</option>
<option value="KYD">Cayman Islands Dollar</option>
<option value="XOF">CFA Franc BCEAO</option>
<option value="XAF">CFA Franc BEAC</option>
<option value="XPF">CFP Franc</option>
<option value="CLP">Chilean Peso</option>
<option value="CNY">Chinese Yuan</option>
<option value="COP">Colombian Peso</option>
<option value="KMF">Comorian Franc</option>
<option value="CDF">Congolese Franc</option>
<option value="CRC">Costa Rican ColÃ³n</option>
<option value="HRK">Croatian Kuna</option>
<option value="CUC">Cuban Convertible Peso</option>
<option value="CZK">Czech Republic Koruna</option>
<option value="DKK">Danish Krone</option>
<option value="DJF">Djiboutian Franc</option>
<option value="DOP">Dominican Peso</option>
<option value="XCD">East Caribbean Dollar</option>
<option value="EGP">Egyptian Pound</option>
<option value="ERN">Eritrean Nakfa</option>
<option value="EEK">Estonian Kroon</option>
<option value="ETB">Ethiopian Birr</option>
<option value="EUR">Euro</option>
<option value="FKP">Falkland Islands Pound</option>
<option value="FJD">Fijian Dollar</option>
<option value="GMD">Gambian Dalasi</option>
<option value="GEL">Georgian Lari</option>
<option value="DEM">German Mark</option>
<option value="GHS">Ghanaian Cedi</option>
<option value="GIP">Gibraltar Pound</option>
<option value="GRD">Greek Drachma</option>
<option value="GTQ">Guatemalan Quetzal</option>
<option value="GNF">Guinean Franc</option>
<option value="GYD">Guyanaese Dollar</option>
<option value="HTG">Haitian Gourde</option>
<option value="HNL">Honduran Lempira</option>
<option value="HKD">Hong Kong Dollar</option>
<option value="HUF">Hungarian Forint</option>
<option value="ISK">Icelandic KrÃ³na</option>
<option value="INR">Indian Rupee</option>
<option value="IDR">Indonesian Rupiah</option>
<option value="IRR">Iranian Rial</option>
<option value="IQD">Iraqi Dinar</option>
<option value="ILS">Israeli New Sheqel</option>
<option value="ITL">Italian Lira</option>
<option value="JMD">Jamaican Dollar</option>
<option value="JPY">Japanese Yen</option>
<option value="JOD">Jordanian Dinar</option>
<option value="KZT">Kazakhstani Tenge</option>
<option value="KES">Kenyan Shilling</option>
<option value="KWD">Kuwaiti Dinar</option>
<option value="KGS">Kyrgystani Som</option>
<option value="LAK">Laotian Kip</option>
<option value="LVL">Latvian Lats</option>
<option value="LBP">Lebanese Pound</option>
<option value="LSL">Lesotho Loti</option>
<option value="LRD">Liberian Dollar</option>
<option value="LYD">Libyan Dinar</option>
<option value="LTL">Lithuanian Litas</option>
<option value="MOP">Macanese Pataca</option>
<option value="MKD">Macedonian Denar</option>
<option value="MGA">Malagasy Ariary</option>
<option value="MWK">Malawian Kwacha</option>
<option value="MYR">Malaysian Ringgit</option>
<option value="MVR">Maldivian Rufiyaa</option>
<option value="MRO">Mauritanian Ouguiya</option>
<option value="MUR">Mauritian Rupee</option>
<option value="MXN">Mexican Peso</option>
<option value="MDL">Moldovan Leu</option>
<option value="MNT">Mongolian Tugrik</option>
<option value="MAD">Moroccan Dirham</option>
<option value="MZM">Mozambican Metical</option>
<option value="MMK">Myanmar Kyat</option>
<option value="NAD">Namibian Dollar</option>
<option value="NPR">Nepalese Rupee</option>
<option value="ANG">Netherlands Antillean Guilder</option>
<option value="TWD">New Taiwan Dollar</option>
<option value="NZD">New Zealand Dollar</option>
<option value="NIO">Nicaraguan CÃ³rdoba</option>
<option value="NGN">Nigerian Naira</option>
<option value="KPW">North Korean Won</option>
<option value="NOK">Norwegian Krone</option>
<option value="OMR">Omani Rial</option>
<option value="PKR">Pakistani Rupee</option>
<option value="PAB">Panamanian Balboa</option>
<option value="PGK">Papua New Guinean Kina</option>
<option value="PYG">Paraguayan Guarani</option>
<option value="PEN">Peruvian Nuevo Sol</option>
<option value="PHP">Philippine Peso</option>
<option value="PLN">Polish Zloty</option>
<option value="QAR">Qatari Rial</option>
<option value="RON">Romanian Leu</option>
<option value="RUB">Russian Ruble</option>
<option value="RWF">Rwandan Franc</option>
<option value="SVC">Salvadoran ColÃ³n</option>
<option value="WST">Samoan Tala</option>
<option value="SAR">Saudi Riyal</option>
<option value="RSD">Serbian Dinar</option>
<option value="SCR">Seychellois Rupee</option>
<option value="SLL">Sierra Leonean Leone</option>
<option value="SGD">Singapore Dollar</option>
<option value="SKK">Slovak Koruna</option>
<option value="SBD">Solomon Islands Dollar</option>
<option value="SOS">Somali Shilling</option>
<option value="ZAR">South African Rand</option>
<option value="KRW">South Korean Won</option>
<option value="XDR">Special Drawing Rights</option>
<option value="LKR">Sri Lankan Rupee</option>
<option value="SHP">St. Helena Pound</option>
<option value="SDG">Sudanese Pound</option>
<option value="SRD">Surinamese Dollar</option>
<option value="SZL">Swazi Lilangeni</option>
<option value="SEK">Swedish Krona</option>
<option value="CHF">Swiss Franc</option>
<option value="SYP">Syrian Pound</option>
<option value="STD">São Tomé and Príncipe Dobra</option>
<option value="TJS">Tajikistani Somoni</option>
<option value="TZS">Tanzanian Shilling</option>
<option value="THB">Thai Baht</option>
<option value="TOP">Tongan pa'anga</option>
<option value="TTD">Trinidad & Tobago Dollar</option>
<option value="TND">Tunisian Dinar</option>
<option value="TRY">Turkish Lira</option>
<option value="TMT">Turkmenistani Manat</option>
<option value="UGX">Ugandan Shilling</option>
<option value="UAH">Ukrainian Hryvnia</option>
<option value="AED">United Arab Emirates Dirham</option>
<option value="UYU">Uruguayan Peso</option>
<option value="USD">US Dollar</option>
<option value="UZS">Uzbekistan Som</option>
<option value="VUV">Vanuatu Vatu</option>
<option value="VEF">Venezuelan BolÃ­var</option>
<option value="VND">Vietnamese Dong</option>
<option value="YER">Yemeni Rial</option>
<option value="ZMK">Zambian Kwacha</option>
</select></td>
</tr>
<tr>
<td>Decimal Points</td>
<td><input id="builder_decimalPlaces" type="text" size="5" placeholder="Enter Decimal Points" maxlength="5"></td>
</tr>
</table>
<input id="__button210-BDI-content"  value="Update Settings" type="submit" >
<br>

<p>Developed by <a target="_blank" href="https://linkedin.com/in/itsrohitchouhan">Rohit Chouhan</a></p>
</form>
`;
    class BuilderPanel extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot
                .getElementById("form")
                .addEventListener("submit", this._submit.bind(this));
        }
        _submit(e) {
            e.preventDefault();
            this.dispatchEvent(
                new CustomEvent("propertiesChanged", {
                    detail: {
                        properties: {
                            from: this.from,
                            to: this.to,
                            decimalPlaces: this.decimalPlaces,
                            amount: this.amount
                        },
                    },
                })
            );
        }
        set from(_from) {
            this._shadowRoot.getElementById("builder_from").value = _from;
        }
        get from() {
            return this._shadowRoot.getElementById("builder_from").value;
        }
        set to(_to) {
            this._shadowRoot.getElementById("builder_to").value = _to;
        }
        get to() {
            return this._shadowRoot.getElementById("builder_to").value;
        }
        set amount(_amount) {
            this._shadowRoot.getElementById("builder_amount").value = _amount;
        }
        get amount() {
            return this._shadowRoot.getElementById("builder_amount").value;
        }

        set decimalPlaces(_decimalPlaces) {
            this._shadowRoot.getElementById("builder_decimalPlaces").value = _decimalPlaces;
        }
        get decimalPlaces() {
            return this._shadowRoot.getElementById("builder_decimalPlaces").value;
        }
    }
    customElements.define(
        "com-rohitchouhan-currencywidget-builder",
        BuilderPanel
    );
})();