var update = document.getElementById('update')

update.addEventListener('click', function () {
  fetch('thoughts', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'thought': '4000DP',
      'content': 'Thirumaalai EOD 0122-1945'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
  })
})