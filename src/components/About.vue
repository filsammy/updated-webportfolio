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
        With a passion for building scalable, user-focused applications. Guided by curiosity and a vast option of AI and different tools,
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
            <i class="fab fa-linkedin fa-lg"></i>
          </a>

          <a
            href="https://github.com/filsammy"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
          >
            <i class="fab fa-github fa-lg"></i>
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
#landing {
    position: relative;
    height: 100vh;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    overflow: hidden;
    background: linear-gradient(to right,
            rgba(250, 250, 250, 0.9) 0%,
            /* solid teal base */
            rgba(48, 94, 90, 0.9) 100%);
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

/* optional soft tint for harmony */
#landing::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(3, 150, 130, 0.15);
    /* gentle teal wash */
    z-index: 0;
    pointer-events: none;
}

/* ensures your content stays visible */
#landing>* {
    position: relative;
    z-index: 1;
}

.profile-pic {
    object-fit: cover;
    /* ensures the image fills the circle nicely */
    border-radius: 50%;
    /* makes it perfectly round */
    border: 5px solid #056569;
    /* clean white frame */
    box-shadow: 0 0 20px rgba(7, 66, 37, 0.3);
    /* subtle shadow for depth */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-pic:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(11, 255, 255, 0.3);
}

#myGreeting {
    color: #f0f0f0;
    font-size: clamp(1.1rem, 2.1vw, 1.4rem);
    /* subtle intro size */
    font-weight: 400;
    letter-spacing: 1px;
}

#myName {
    color: #056569;
    text-shadow: 1px 1px 3px #f0f0f0;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    /* main highlight */
    font-weight: 700;
}

#myTitle {
    color: #f0f0f0;
    text-shadow: 2px 2px 2px #039682;
    font-size: clamp(1.2rem, 2.1vw, 1.6rem);
    /* subtitle feel */
    font-weight: 600;
}

.landing-text {
    color: #f0f0f0;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    font-size: clamp(0.8rem, 1.3vw, 1.1rem);
    line-height: 1.3;
}

.certificate-img {
    width: 120px;
    /* adjust as needed */
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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

    /* Position the tooltip */
    position: absolute;
    bottom: 110%;
    /* above the image */
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    /* Smooth fade-in effect */
    opacity: 0;
    transition: opacity 0.3s;
}

.certificate-container:hover .certificate-details {
    visibility: visible;
    opacity: 1;
}
</style>
