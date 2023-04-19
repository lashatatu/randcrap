const getData = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await req.json();
  data.map(({id,title})=>{
    return console.log(`id: ${id} title: ${title}`)
  })
};

await getData()