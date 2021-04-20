// Add your code here
function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail
    };
    
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body : JSON.stringify(formData)
    };

    return fetch ('http://localhost:3000/users', configObject)
        .then(response => response.json())
        .then(object => document.body.append(object.id))
        .catch(error => {
            document.body.append(error.message);
        });
}