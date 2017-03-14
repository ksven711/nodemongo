var update = document.getElementById('update');

update.addEventListener('click', function () {

    fetch('thoughts', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'thought': document.getElementById('thought').value,
            'content': document.getElementById('content').value
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(data => {
            console.log(data);
            window.location.reload()
        })
});


var del = document.getElementById('delete');

del.addEventListener('click', function () {
    fetch('thoughts', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'thought': 'test'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        }).then(data => {
        console.log(data);
        window.location.reload()
    })
});