async function getUsers () {
  const url = './MOCK_DATA.json';
  try {
    const res = await fetch(url);
    return await res.json();
  } catch ( error ) {
    console.log(error);
  }
}

async function renderUsers () {
  const users = await getUsers();
  let html = '';
  users.forEach((user) => {
    const htmlSegment = `
          <div class="user">
            <img src="${user.avatar}" alt="${user.first_name}" />
            <div class="email"><a href="email:${user.email}">${user.email}</div>
          </div>
`;
    html += htmlSegment;
  });

  const data = document.querySelector('.data');
  data.innerHTML = html;
}

renderUsers();
