async function sendMail(value) {
  const body = {
    Messages: [
      {
        From: {
          Email: 'it@helpetapp.com',
          Name: 'Helpet App',
        },
        To: [
          {
            Email: 'it@helpetapp.com',
          },
          {
            Email: 'guimineiro@helpetapp.com',
          },
          {
            Email: 'matheus@helpetapp.com',
          },
        ],
        Subject: 'A new signup!',
        HTMLPart: `<h3>We have a new signup!</h3><br /><br /><strong>Email:</strong> ${value}`,
      },
    ],
  };

  await fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization:
        'Basic 96aa016f6ac734df639514b697bb4a53:f380a500a215f86f50b3358fb1a7fddb',
    },
    body: JSON.stringify(body),
  });
}

sendMail('Olar');
