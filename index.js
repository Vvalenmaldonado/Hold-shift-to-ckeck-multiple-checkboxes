const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleChek(e){
    //Check if they had the shift key down
    // And check that they are checking it

    let inBetween =false;
    if(e.shiftKey && this.checked){
      //Go ahead and do what we please

      //Loop over every single checkbox.
      checkbox.forEach(e=>{
          console.log(e)
          if(e === this || e === lastChecked){
              inBetween = !inBetween;
              console.log('starting to ckeck')
          }
          if(inBetween){
              e.checked = true;
          }
      })
    }
    lastChecked = this;
}
checkbox.forEach(e=>e.addEventListener('click', handleChek))

