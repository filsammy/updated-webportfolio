<script setup>
import CV from '../assets/files/FSA_CV.pdf'
</script>

<template>
  <div class="row justify-content-center align-items-center py-4 py-lg-5" id="landing">
    <!-- Profile Image -->
    <div class="col-10 col-sm-8 col-md-3 p-3 py-lg-5 text-center">
      <img src="../assets/images/me1.png" class="profile-pic img-fluid" />
    </div>

    <!-- Text Content -->
    <div class="col-11 col-md-7 col-lg-5 text-white px-3 px-md-5 py-lg-5">
      <h2 class="text-center text-md-left" id="myGreeting">Hey there! I'm</h2>
      <h1 class="mt-2 text-center text-md-left" id="myName">Fil Sammy</h1>
      <h2 class="mt-2 text-center text-md-left" id="myTitle">// Junior Web Developer</h2>

      <p class="text-justify text-center text-md-left landing-text">
        With a passion for building scalable, user-focused applications. Guided by curiosity and a vast option of AI and
        different tools,
        I continuously refine my skills to create smarter and more efficient digital solutions.
      </p>

      <!-- Buttons + Socials -->
      <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-3 flex-wrap">
        <a :href="CV" target="_blank" rel="noopener noreferrer"><button class="submit-btn">
            View CV &gt;
          </button>
        </a>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/fil-sammy-abawag/" target="_blank" rel="noopener noreferrer"
            class="mx-2 mx-md-3" id="linkedin">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>

          <a href="https://github.com/filsammy" target="_blank" rel="noopener noreferrer" id="github">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>

      <!-- Certificates -->
      <div class="d-flex justify-content-center justify-content-md-start gap-3 mt-4 flex-wrap">
        <div class="certificate-container">
          <a href="https://learn.microsoft.com/api/credentials/share/en-us/FilSammyAbawag-8121/781F107B9AD91E38?sharingId=3712709114F1705D"
            target="_blank" rel="noopener noreferrer">
            <img
              src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
              alt="microsoftCert" class="certificate-img img-fluid" />
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
#landing {
  position: relative;
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(to right,
      rgba(250, 250, 250, 0.9) 0%,
      rgba(48, 94, 90, 0.9) 100%);
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
  #landing {
    min-height: auto;
    padding: 60px 0 40px;
  }
}

#landing::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('../assets/images/catcat.png') right top/cover no-repeat;
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
}

/* Mobile: reduce opacity for better text readability */
@media (max-width: 767px) {
  #landing::before {
    opacity: 0.15;
  }
}

#landing::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(3, 150, 130, 0.15);
  z-index: 0;
  pointer-events: none;
}

#landing>* {
  position: relative;
  z-index: 1;
}

.profile-pic {
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #056569;
  box-shadow: 0 0 20px rgba(7, 66, 37, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 250px;
}

/* Smaller profile pic on mobile */
@media (max-width: 767px) {
  .profile-pic {
    max-width: 180px;
    border-width: 4px;
  }
}

.profile-pic:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(11, 255, 255, 0.3);
}

#myGreeting {
  color: #f0f0f0;
  font-size: clamp(1rem, 2.1vw, 1.4rem);
  font-weight: 400;
  letter-spacing: 1px;
}

#myName {
  color: #056569;
  text-shadow: 1px 1px 3px #f0f0f0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
}

#myTitle {
  color: #f0f0f0;
  text-shadow: 2px 2px 2px #039682;
  font-size: clamp(1rem, 2.1vw, 1.6rem);
  font-weight: 600;
}

.landing-text {
  color: #f0f0f0;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  font-size: clamp(0.85rem, 1.3vw, 1.1rem);
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

/* Better spacing on mobile */
@media (max-width: 767px) {
  .landing-text {
    line-height: 1.6;
    padding: 0 10px;
  }
}

.submit-btn {
  padding: 10px 24px;
  font-size: 0.95rem;
  white-space: nowrap;
}

/* Adjust button size on small screens */
@media (max-width: 400px) {
  .submit-btn {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
}

.social-icons a {
  color: #f0f0f0;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.social-icons a:hover {
  color: #056569;
  transform: scale(1.1);
}

.certificate-img {
  width: 120px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Smaller certificates on mobile */
@media (max-width: 576px) {
  .certificate-img {
    width: 100px;
  }
}

.certificate-img:hover {
  transform: scale(1.05);
}

.certificate-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.certificate-details {
  visibility: hidden;
  width: 180px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}

/* Mobile tooltip adjustment */
@media (max-width: 576px) {
  .certificate-details {
    width: 150px;
    font-size: 0.75rem;
    padding: 6px;
  }
}

.certificate-container:hover .certificate-details {
  visibility: visible;
  opacity: 1;
}

/* Touch devices: show tooltip on tap */
@media (hover: none) and (pointer: coarse) {
  .certificate-container:active .certificate-details {
    visibility: visible;
    opacity: 1;
  }
}
</style>