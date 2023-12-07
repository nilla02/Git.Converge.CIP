<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification Letter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        address {
            margin-top: 20px;
            font-style: normal;
        }

        p {
            margin-bottom: 10px;
        }

        h2 {
            margin-top: 30px;
        }

        footer {
            margin-top: 50px;
            font-size: 14px;
            font-style: italic;
        }
        .logo{

text-align: right;
        }

    </style>
</head>

<body>
    <div class="logo">
        <img style="margin-left: auto; display: block;" src="{{ public_path().'/logo-min.png' }}" alt="Logo Image">
        <span style=" display: block;">{{ $date }}</span>
      </div>
    <address>
        {{ $applicantName }}<br>
        [Address Line 1]<br>
        [Address Line 2]
    </address>

    <h2>Dear   {{ $applicantName }},</h2>

    <p><strong>NOTIFICATION LETTER – {{ $applicantName }}</strong></p>

    <p>
        We are pleased to inform you that your application for citizenship by means of an investment in the purchase of a non-interest-bearing Saint Lucia Government Bond in accordance with the National Savings and Development Bonds Act, Cap. 15.25 has been granted.
    </p>

    <p>
        Acquisition of citizenship is subject to all of the following conditions being met:
    </p>

    <ol>
        <li>A non-refundable administrative fee of [Amount in Words] United States Dollars (USDAmount in Figures) is to be paid to the Unit within sixty (60) calendar days of the date of this Notification Letter. Proof of payment is recommended to be sent to the Unit.</li>
        <li>The minimum investment amount of [Amount in Words] United States Dollars (USDAmount in Figures) for the purchase of the non-interest-bearing Saint Lucia Government Bond is to be paid to the Unit within ninety (90) calendar days of the date of this Notification Letter. Proof of payment is recommended to be sent to the CIP Unit.</li>
        <li>Once the bond sum is received, the Unit shall work together with the Department of Finance for the issuance of the Bond Certificate.</li>
        <li>The Oath of Allegiance is to be signed before an Attorney-at-Law, a Consular Officer of Saint Lucia, an Honorary Consul of Saint Lucia, a Notary Royal, or a Notary Public and is required from applicants sixteen (16) years of age and over.</li>
    </ol>

    <p><strong>The particulars of the Bond are as follows:</strong></p>

    <ul>
        <li>Issue Amount: USDAmount in Figures</li>
        <li>Tenor: Number of Years</li>
        <li>Interest Rate: Zero Interest</li>
    </ul>

    <p>The Bond is to be registered and remain in your name.</p>

    <table style="width:100%">
        <tbody>
        <tr>
            <td>

        <p>Citizenship by Investment Unit</p>
            <p>5 th Floor, Francis Compton Building</p>
            <p>Waterfront, Castries, Saint Lucia, West Indies, LC04 301</p>

            <p> 1-758-458-6050</p>
            <p> cipsaintlucia.com</p>
            </td>
            <td style="text-align:right;">
                <img style="width:150px; height:150px" src="{{public_path().'/images/logo2.png'}}" >
            </td>
        <tr>
    </tbody>
    </table>
    <br>
    <div class="logo">
        <img style="margin-left: auto; display: block;" src="{{ public_path().'/logo-min.png' }}" alt="Logo Image">
      </div>
    <p><strong>The Redemption of Bond at Maturity of Holding Period shall be as follows:</strong></p>

    <ul>
        <li>The redemption of the Bond can be transacted by the citizen, an authorized agent, or any other representative so selected by the citizen.</li>
        <li>If the citizen uses a representative, that representative of the citizen must have a notarized letter of authorization.</li>
        <li>The Original Bond Certificate is to be presented to the Accountant General’s Office in Saint Lucia.</li>
        <li>The detailed banking information of the citizen is to be provided for deposit of funds.</li>
    </ul>

    <p>
        Please refer to your service provider for the banking details of either of the Banks with which we undertake banking business. However, should you decide to use Republic Bank (EC) Limited, please notify the Unit three days prior. Upon completion of your wire payment, please email the Unit a copy of the wire transfer receipt.
    </p>

    <footer>
        <img style="width:150px; height:150px" src="{{public_path().'/images/stamp1.png'}}" >
        <p>Regards,</p>
        <p>Mc Claude Emmanuel</p>
        <p>Chief Executive Officer</p>
    </footer>

    <p>Cc: Authorised Agent</p>
    <p>Application #   {{$applicationid}}</p>
</body>

</html>
