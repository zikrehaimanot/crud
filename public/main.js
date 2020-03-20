let update = document.getElementById('update')
let deleter = document.getElementById('delete')
update.addEventListener('click', function () {
  fetch('quotes', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'voldermort:',
    'quote': 'There is no good and evil, there is only power and those too weak to seek it.'
  })
})
.then(res => {
  if (res.ok) return res.json()
}).
then(data => {
  console.log(data)
  window.location.reload()
})
})


deleter.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'voldermort:'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})
