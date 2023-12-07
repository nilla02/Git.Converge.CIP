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
    <div class="logo">  <img style="margin-left: auto" src="{{public_path().'/logo-min.png'}}" >
        {{$date}}
    </div>
    <address>
        {{ $applicantName }}<br>
        [Address Line 1]<br>
        [Address Line 2]<br>
        [Address Line 3]<br>
        [Address Line 4]<br>
        [Address Line 5]
    </address>

    <p><strong> Dear {{ $applicantName }}</strong></p>

    <p>NOTIFICATION LETTER - {{ $applicantName }}</p>

    <p>
        Having considered your application for citizenship by investment pursuant to Section 36(1)(b) of
        the Citizenship by Investment Act No. 14 of 2015, the Citizenship by Investment Board has denied
        the application. The Citizenship by Investment Act No 14 of 2015, Section 36(3) states:
    </p>

    <ul>
        <li>Provides false information;</li>
        <li>Has been convicted of a criminal offence except where the offence is a minor traffic offence;</li>
        <li>Is the subject of a criminal investigation;</li>
        <li>Is considered a potential national security risk;</li>
        <li>Is involved in any activity likely to cause disrepute to Saint Lucia;</li>
        <li>Has been denied a visa to a country with which Saint Lucia has visa-free travel and has not subsequently obtained a visa to that country;</li>
    </ul>

    <p>The Board denied the application on the ground that [Reason(s)].</p>

    <p><strong>Application #:</strong> {{$applicationid}}</p>

    <footer>
        <img style="width:150px; height:150px" src="{{public_path().'/images/stamp1.png'}}" >
        <p>Regards,</p>
        <p>Mc Claude Emmanuel</p>
        <p>Chief Executive Officer</p>

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
    </footer>

    <p>Cc: Authorised Agent</p>
</body>

</html>
