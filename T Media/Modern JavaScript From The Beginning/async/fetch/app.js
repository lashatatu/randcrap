document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText () {
  fetch('text.txt')
    .then(function (response) {
      return response.text();
    }).then(function (data) {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  }).catch(function (error) {
    console.log(error);
  });
}

// get JSON
function getJSON () {
  fetch('posts.json')
    .then(function (response) {
      return response.json();
    }).then(function (data) {
    console.log(data);
    let output = '';
    data.forEach(function (post) {
      output += `
        <li>${post.title}</li>
        <li>${post.body}</li>
`;
    });
    document.getElementById('output').innerHTML = output;
  }).catch(function (error) {
    console.log(error);
  });
}

// get External
function getExternal () {
  fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json();
    }).then(function (data) {
    console.log(data);
    let output = '';
    data.forEach(function (user) {
      output += `
        <li>${user.login}</li>
        <img src='${user.avatar_url}' alt='${user.id}'></img>
`;
    });
    document.getElementById('output').innerHTML = output;
  }).catch(function (error) {
    console.log(error);
  });
}