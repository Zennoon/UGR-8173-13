function render(data) {
    var html = `<li>${data.comment}</li>`;
        document.getElementById('container').innerHTML += html;
}



    var comments = [{"comment": "An amazing recipe"}];

    for (var i = 0; i < comments.length; i++){
        render(comments[i]);
    }

document.getElementById('comment_submit').addEventListener('click', (e)=>{
        var addOb = {
            "comment": document.getElementById('comments').value
        };
        console.log(addOb);
        comments.push(addOb);
        render(addOb);
    });
