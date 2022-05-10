// search input
const github=new Github
const ui=new UI

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value.toLowerCase();
  if(userText!==''){
    github.getUser(userText).then(data => {
      if(data.profile.message==='Not Found'){

      }else{
        ui.showProfile(data.profile);

      }
    })
  }else {
    document.getElementById('profile').innerHTML='';
  }
})