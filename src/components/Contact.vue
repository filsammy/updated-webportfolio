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
              <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=centro%20escolar%20university%20manila&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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

<style></style>
