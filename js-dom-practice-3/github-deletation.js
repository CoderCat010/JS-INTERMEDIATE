document.getElementById('input-delete').addEventListener('keyup', function(event){
    // getting input filed value
    const inputText = event.target.value;

    // getting button
    const btn = document.getElementById('btn-delete')

    // check if user typing delete
    if(inputText === 'delete'){
        // console.log('delete typed');
        btn.removeAttribute('disabled')
    }else{
        // console.log('typed something else'); 
        btn.setAttribute('disabled', true)
    }
})