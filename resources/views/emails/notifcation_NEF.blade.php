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

    <p>Dear  {{ $applicantName }}</p>

    <p><strong>NOTIFICATION LETTER – {{ $applicantName }}</strong></p>

    <p>
        We are pleased to inform you that your application for citizenship by investment has been granted.
    </p>

    <p>
        Acquisition of citizenship is subject to the following conditions being met:
    </p>

    <ol>
        <li>Payment of the Qualifying Investment of {{$investmentamount}} United States Dollars (USD {{$investmentamount}}) is to be made to the National Economic Fund within the next ninety (90) calendar days.</li>
        <li>The Oath of Allegiance, which is to be signed before an Attorney-at-Law, a Consular Officer of Saint Lucia, an Honorary Consul of Saint Lucia, a Notary Royal, or a Notary Public, is required from applicants sixteen (16) years of age and over.</li>
    </ol>

    <p>
        Please refer to your service provider for the banking details of either of the Banks with which we undertake banking business. However, should you decide to use Republic Bank (EC) Limited, please notify the Unit three days prior. Upon completion of your wire payment, please email the Unit a copy of the wire transfer receipt.
    </p>

    <footer>
        <p>Regards,</p>
        <img style="width:150px; height:150px" src="{{public_path().'/images/stamp1.png'}}" >
        <p>Mc Claude Emmanuel</p>
        <p>Chief Executive Officer</p>
    </footer>

    <p>Cc: Authorised Agent</p>
    <p>Application #  {{$applicationid}}</p>
</body>

</html>
