'use strict';
console.log('the script starts');

const url = 'https://reqres.in/api/users/1';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error in request: ${response.status}`);
    }
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData(url);
