var update = document.getElementById('update');

update.addEventListener('click', function () {
  fetch('thoughts', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'thought': 'Vaaganam',
      'content': 'Wipers at the back - '+Date.now()
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
  })
});