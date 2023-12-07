<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #e60202;
            font-size: 15px;
            margin-bottom: 20px;
        }

        p {
            color: #0c0c0c;
            margin-bottom: 15px;
        }

        .logo{

text-align: right;
        }

    </style>

</head>
<body>
<div class="logo">  <img style="margin-left: auto" src="{{public_path().'/logo-min.png'}}" > </div>


    <p>{{ $applicantName }},</p>
    <li>[Address Line1]</li>
    <li>[Address Line1]</li>

    <p>Dear {{ $applicantName }},</p>
    <p>Having considered your application for citizenship by investment pursuant to Section 36(1)(c) of</p>
    <p>the Citizenship by Investment Act No. 14 of 2015 ("the Act"), the Citizenship by Investment Board</p>
    <p>has delayed the application for cause.</p>
    <p>At this juncture, the following information is sought:</p>
    <ol>
        <li>[Information Requested]</li>
        <li>[Information Requested]</li>
        <li>[Information Requested]</li>
    </ol>
    <p>Upon provision of the information requested, the application shall be resubmitted to the Board for</p>
    <p>further consideration and a decision in accordance with Section 36(1) of the Act.</p>
    <p>You shall be informed at the soonest once there is an update on the status of this application.</p>
    <p>Regards</p>
    <br>
    <p>Nestor Alfred</p>
    <p>Chief Executive Officer</p>
    <p>{{$applicationid}}</p>
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
</div>
</body>
</html>
