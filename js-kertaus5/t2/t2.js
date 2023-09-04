'use strict';
console.log('the script starts');

const url = 'https://reqres.in/api/users';

const user = {
  name: 'Marko',
  job: 'Frontend Developer',
};

async function postData() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();
