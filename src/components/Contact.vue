<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    import { Notyf } from 'notyf';
    import 'notyf/notyf.min.css';

    const notyf = new Notyf();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const name = ref('');
    const email = ref('');
    const message = ref('');
 
    const isLoading = ref(false);

    const submitForm = async () => {

        if(!recaptchaToken.value){
            notyf.error("Please verify that you are not a robot.");
            return;
        }

        isLoading.value = true;
        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: "Contact Form Submission from Portfolio Website",
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
            })

            const result = await response.json();

            if(result.success){
                console.log(result);
                isLoading.value = false;
                notyf.success("Message sent!");
            }
        } catch(error){
            console.log(error);
            isLoading.value = false;
            notyf.error("Failed to send message.");
        } finally {
            // Reset captcha after submit or error
            resetRecaptcha();
        }
    }

    const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;  // Replace with your site key

    const recaptchaContainer = ref(null);
    const recaptchaWidgetId = ref(null);
    const recaptchaToken = ref('');

    // Callback called by reCAPTCHA when successful
    function onRecaptchaSuccess(token) {
    recaptchaToken.value = token;
    }

    // Callback when expired
    function onRecaptchaExpired() {
    recaptchaToken.value = '';
    }

    // Function to render the reCAPTCHA widget
    function renderRecaptcha() {
    if (!window.grecaptcha) {
        console.error('reCAPTCHA not loaded');
        return;
    }

    recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: SITE_KEY,
        size: 'normal', // or 'compact'
        callback: onRecaptchaSuccess,
        'expired-callback': onRecaptchaExpired,
    });
    }

    // Function to reset reCAPTCHA 
    function resetRecaptcha() {
    if (recaptchaWidgetId.value !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.value);
        recaptchaToken.value = '';
    }
    }

onMounted(() => {
  // This code waits for the Google reCAPTCHA library to load, then renders the reCAPTCHA widget using onMounted hook. 
  // The widget is rendered with grecaptcha.render(), which requires a sitekey. 
  // Callback functions handle success and expiration events. 
  // reCAPTCHA is reset upon form submission to clear the token.
  const interval = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      clearInterval(interval);
    }
  }, 100);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});


</script>

<template>
  <!-- contact -->
  <h1 class="text-center my-4 pt-5" id="contact">Contact</h1>
  <div class="contact-section">
      <div class="row align-items-center mt-4">
          <div class="col-md-6 map-container">
             <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d976.4773964922247!2d125.0226510929719!3d11.771416711998649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQ2JzE2LjgiTiAxMjXCsDAxJzIxLjUiRQ!5e0!3m2!1sen!2sph!4v1760096770850!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-md-6">
              <form @submit.prevent="submitForm">
                  <div class="mb-3">
                      <input type="text" class="form-control contact-form-control" placeholder="First Name M.I. Last Name" v-model="name">
                  </div>
                  <div class="mb-3">
                      <input type="email" class="form-control contact-form-control" placeholder="Email" v-model="email">
                  </div>
                  <div class="mb-3">
                      <textarea class="form-control contact-form-control" rows="6" placeholder="Message" v-model="message"></textarea>
                  </div>
                  <div class="form-footer">
                      <div class="social-icons">
  <!--                                <a href="https://www.facebook.com/profile.php?id=100085701498879" id="facebook"><i class="fab fa-facebook"></i></a> -->
                          <a href="https://www.linkedin.com/in/fil-sammy-abawag/" id="linkedin"><i class="fab fa-linkedin"></i></a>
                          <a href="https://github.com/filsammy" id="github"><i class="fab fa-github"></i></a>
                      </div>
                      <button type="submit" class="submit-btn pl-5 pr-5">{{ isLoading ? "Sending..." : "Submit" }}</button>
                  </div>

                  <div class="d-flex justify-content-end mt-2">
                    <div ref="recaptchaContainer"></div>
                  </div>
              </form>
              
          </div>
      </div>
  </div>
</template>

<style scoped>
.contact-section {
    max-width: 1200px;
    margin: auto;
    padding: 50px 20px;
    border-radius: 20px;
}

.contact-form-control {
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid #203A43;
    color: #0F2027;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form-control:focus {
    border-color: #2C4B5E;
    box-shadow: 0 0 0 3px rgba(32, 58, 67, 0.1);
    outline: none;
}

.contact-form-control::placeholder {
    color: rgba(15, 32, 39, 0.5);
}

/* Map */
.map-container iframe {
    width: 100%;
    height: 430px;
    border-radius: 10px;
    border: 3px solid rgba(32, 58, 67, 0.2);
}

.form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-footer .submit-btn {
    margin-left: auto;
}

.fab {
    font-size: 2rem;
}
</style>
