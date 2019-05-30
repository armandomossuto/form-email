# form-email

Creates an endpoint that will fordward to an e-mail the information from a contact form in the client

Created using the following tools:
* Node.js
* express
* NodeMailer

#Prerequisites
You will need the following things properly installed on your computer:
* Git
* Node.js (with npm)

#Installation
* git clone <repository-url> this repository
* cd form-email
* npm install

#How does it work
* It creates an endpoint in your `localhost/:${desiredPort}` using `/contact` route.
* An example on how to do the fetch request in your client, using fetch API:
```
const onSubmitContactForm = () => {
    const {
      firstName,
      lastName,
      emailAddress,
      subject,
      message: text
     } = form;

    const messageInfo = {
      recipientCodeName,
      firstName,
      lastName,
      emailAddress,
      subject,
      text
    };

    const config = {
       method: 'POST', 
       mode: 'cors', 
       headers: { "Content-Type": 'application/json' },
       body: JSON.stringify({ messageInfo })
      }

    fetch(formEmailSenderUrl, config)
      .then(res => res.json())
      .then(data => {
        if(data.message === "success") {
          onFormEmailSuccess();
        } else {
          onFormEmailFailure();
        }
      }).catch(err => onFormEmailFailure(err))
  }```

#Configuration
* You will need to create a configuration.js file in you src folder and export from there a `port` for indicating your desired port numer for the server, the `email` and respective `password` for sending the mail from the server. You can use enviromental variables to hide confidential data. This file by default in excluded from git as you can see in the `.gitignore` file. 
* In `autorizedReciepents` array you can highlight all autorized recipients, including the `codeName` to be used from the client post request.
* An example of this code
```export const port = process.env.PORT || 5000;

export const email = 'yourEmailUsedToSend';

export const password = 'yourPassword';

/**
 * Generates an object with the different recipient information allowed in the server
 * @param {string} codeName - Code Name use to identify the recipient in the client side
 * @param {string} email - Recipient email address
 * @returns {object}
 */
const generateReciepent = (codeName, email) => ({ 
        codeName, 
        email
    })

export const autorizedReciepents = [
    generateReciepent('emailA','emailA@test.com'),
    generateReciepent('emailB','emailA@test.com''),
]```

#Running / Development
`npm run:start:develop`
This command uses nodemon and babel for compatibility with modern javascript and for live reloading any changes that you make to the code

#Running Test
You can check that the web server is working propery by testing the endpoint using `npm run test`
Make sure to modify the `recipientCode` inside `src/sendEmail/test.js` according to what you have in your configuration file.

#Deploying
Use `npm run build` and then `npm run start` and your app will be `served`