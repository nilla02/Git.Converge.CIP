<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <p>
        {{ $applicantName }}<br>
        [Address Line 1]<br>
        [Address Line 2]
    </p>

    <p>Dear {{ $applicantName }},</p>

    <p><strong>NOTIFICATION LETTER – {{ $applicantName }}</strong></p>

    <p>
        We are pleased to inform you that the application for citizenship through investment in the
        approved Real Estate project, Canelles Resort has been granted. Acquisition of citizenship is
        subject to the following conditions being met:
    </p>

    <ol>
        <li>A non-refundable administrative fee of [Amount in Words] United States Dollars (USD[Amount in Figures]) is to be paid to the Unit within sixty (60) days of this notification. Proof of payment is recommended to be sent to the CIP Unit.</li>

        <li>An executed and binding Purchase and Sale Agreement with the Developer for the investment in the approved real estate project - Canelles Resort Ltd is to be submitted to the CIP Unit.</li>

        <li>The payment of the qualifying investment of a minimum of [Amount in Words] United States Dollars (USD[Amount in Figures]) must be placed in the approved irrevocable escrow account held at Bank of Communications Mainland China. The payment of the qualifying investment is to be made within ninety (90) days of this notification.</li>

        <li>The Oath of Allegiance which is to be signed before an Attorney-at-Law, a Consular Officer of Saint Lucia, an Honorary Consul of Saint Lucia, a Notary Royal or a Notary Public is required from applicants sixteen (16) years of age and over.</li>
    </ol>

    <p>
        Please refer to your service provider for the banking details of either of the Banks with which we undertake banking business. However, should you decide to use Republic Bank (EC) Limited please notify the Unit three days prior. Upon completion of your wire payment, please email the Unit a copy of the wire transfer receipt.
    </p>
<p>However,should you decide to use Republic Bank (EC) Limited please notify the Unit three days </p>
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
<div class="logo">
    <img style="margin-left: auto; display: block;" src="{{ public_path().'/logo-min.png' }}" alt="Logo Image">

  </div>
<p>prior.Upon Completion of your wire payment please email the Unit a copy of the wire transfer receipt</p>
<p>Regards,</p>
    <img style="width:150px; height:150px" src="{{public_path().'/images/stamp1.png'}}" >
    <p>Mc Claude Emmanuel</p>
    <p>Chief Executive Officer</p>

    <p>Cc: Authorised Agent</p>

    <p>Application # {{$applicationid}}</p>
</body>
</html>
