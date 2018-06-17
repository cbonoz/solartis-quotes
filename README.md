<p align="center">
    <img src="./screenshots/logo.png" width=400/>
</p>

SolartisCLI
---

<b>Browse and buy insurance policies directly from the command line using Solartis API's!</b>
<br/>
Unofficial tool - a hackathon project.

### Concept:

Nobody wants to fill out forms or have phone calls regarding insurance anymore.
This command line tool allows users to get quotes and purchase insurance policies directly and securely from the command line. 

### Getting Started:
* Download the repo.
* Set your api token locally in your environment:

<pre>
    SOLARTIS_TOKEN={token}
    SOLARTIS_USERNAME={username} (if undefined, defaults to 'travelagent')
</pre>
* Install dependencies:
<pre>
    npm install
</pre>
* Start the app from the command line:
<pre>
    npm start
</pre>

That's it!

### Demo Video:
This video goes through the user process of buying a new travel insurance policy from the command line in about 90 seconds.

<a href="https://youtu.be/TMai5mufyQA" target="_blank">Youtube Demo Video</a>

### Screenshots:

* Starting the process of a new travel policy quote:
<br/><br/>
<img src="./screenshots/start.png" width=600/>
* Screenshot showing a generated policy:
<br/><br/>
<br/>
<img src="./screenshots/quote.png" width=600/>
* Completing the purchase of the policy:
<br/><br/>
<img src="./screenshots/pay.png" width=600/>

<p>All from the command line.</p>


### Dev Notes for CLI implementation:
* https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/
