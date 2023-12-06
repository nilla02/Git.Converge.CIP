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
            color: #333;
            font-size: 15px;
            margin-bottom: 20px;
        }

        p {
            color: #0c0c0c;
            margin-bottom: 15px;
        }
    </style>

</head>
<body>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>


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
    <br>
    <p>Nestor Alfred</p>
    <p>Chief Executive Officer</p>
    <br>
    <p>{{$applicationid}}</p>
    <p>Citizenship by Investment Unit</p>
    <p>5 th Floor, Francis Compton Building</p>
    <p>Waterfront, Castries, Saint Lucia, West Indies, LC04 301</p>

    <p>T  1-758-458-6050</p>
    <p>W cipsaintlucia.com</p>
</body>
</html>
