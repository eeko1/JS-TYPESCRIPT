'use strict';

console.log('The script starts');

const url = 'https://reqres.in/api/unknown/23';

async function getRequest() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GET error: ${response.status}`);
    }

    const data = await response.json();
    console.log('GET Request Successful:', data);
  } catch (error) {
    console.error('GET Request Error:', error.message);
  }
}

async function postResponse() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({key: 'value'}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`POST request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('POST Request Successful:', data);
  } catch (error) {
    console.error('POST Request Error:', error.message);
  }
}

async function putResponse() {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({key: 'updatedValue'}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`PUT request failed with status ${response.status}`);
    }

    console.log('PUT Request Successful');
  } catch (error) {
    console.error('PUT Request Error:', error.message);
  }
}

async function deleteResponse() {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`DELETE request failed with status ${response.status}`);
    }

    console.log('DELETE Request Successful');
  } catch (error) {
    console.error('DELETE Request Error:', error.message);
  }
}

getRequest();
postResponse();
putResponse();
deleteResponse();
