async function getUsers() {
  let url = "./MOCK_DATA.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `
          <div class='user'>
            <img src='${user.avatar}' alt='${user.first_name}' />
            <div class='email'><a href='email:${user.email}'>${user.email}</div>
          </div>
`;
    html+=htmlSegment;
  });

  let data=document.querySelector(".data");
  data.innerHTML=html;
}

renderUsers()
