const scriptURL = 'https://script.google.com/macros/s/AKfycbynoLRObjNR9itrh9U_X5s9a2VUyzDiCJRqOIyb9LiT4CpqaTzMDbbiELaXGyf7xFtvqg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg =document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML= "Message sent successfully👍"
            setTimeout(function(){
                msg.innerHTML = ""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


    var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        document.addEventListener("DOMContentLoaded", () => {
            const slideSection = document.querySelector(".slide-section");
            const offset = 100; 
          
            function checkSlide() {
              const sectionTop = slideSection.getBoundingClientRect().top;
              if (sectionTop < window.innerHeight - offset) {
                slideSection.classList.add("slide-animate");
              }
            }
          
            window.addEventListener("scroll", checkSlide);
          
        
            checkSlide();
          });;
          

        
        

          



