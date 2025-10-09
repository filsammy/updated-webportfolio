<script setup>
import CV from '../assets/files/FSA_CV.pdf'
</script>

<template>
  <div class="row justify-content-center align-items-center py-4 py-lg-5" id="landing">
    <!-- Profile Image -->
    <div class="col-10 col-md-3 p-3 py-lg-5 text-center">
      <img src="../assets/images/me1.png" class="profile-pic img-fluid" />
    </div>

    <!-- Text Content -->
    <div class="col-md-7 col-lg-5 text-white pl-md-5 py-lg-5">
      <h2 class="text-center text-md-left" id="myGreeting">Hey there! I'm</h2>
      <h1 class="mt-2 text-center text-md-left" id="myName">Fil Sammy</h1>
      <h2 class="mt-2 text-center text-md-left" id="myTitle">// Jr. Full Stack Web Developer</h2>

      <p class="text-justify landing-text">
        With a passion for building scalable, user-focused applications. Guided by curiosity and modern tools like AI,
        I continuously refine my skills to create smarter and more efficient digital solutions.
      </p>

      <!-- Buttons + Socials -->
      <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
        <a :href="CV" target="_blank" rel="noopener noreferrer"><button class="submit-btn">
          View CV &gt;
          </button>
        </a>
        <div class="social-icons">
          <a
            href="https://www.linkedin.com/in/fil-sammy-abawag/"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-3"
            id="linkedin"
          >
            <i class="fab fa-linkedin fa-lg text-white"></i>
          </a>

          <a
            href="https://github.com/filsammy"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
          >
            <i class="fab fa-github fa-lg text-white"></i>
          </a>
        </div>
      </div>

      <!-- Certificates -->
       <div class="d-flex justify-content-start gap-3 mt-4 flex-wrap">
        <div class="certificate-container">
            <a href="https://learn.microsoft.com/api/credentials/share/en-us/FilSammyAbawag-8121/781F107B9AD91E38?sharingId=3712709114F1705D" target="_blank" rel="noopener noreferrer">
            <img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="microsoftCert" class="certificate-img img-fluid" />
            </a>
            <div class="certificate-details">Microsoft Certified: Azure AI Fundamentals - Click me for more Details</div>
        </div>
        <div class="certificate-container">
            <img src="https://formsphilippines.com/agencylogo/26.png" alt="cscCert" class="certificate-img img-fluid" />
            <div class="certificate-details">Career Service Professional Eligibility | October 15, 2024
</div>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
