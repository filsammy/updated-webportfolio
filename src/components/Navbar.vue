<script setup>
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg" id="menu">
      <a href="#landing" class="navbar-brand d-lg-none">FilSammy</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#portfolio-nav">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="portfolio-nav">
          <ul class="navbar-nav ml-auto text-center text-md-left">
              <li class="nav-item">
                  <a href="#landing" class="nav-link" id="hm">Home</a>
              </li>
              <li class="nav-item">
                  <a href="#projects" class="nav-link" id="prjcts">My Projects</a>
              </li>
          </ul>
          
          <ul class="navbar-nav pl-0 mr-auto text-center text-md-left">
              <li class="nav-item">
                  <a href="#tools" class="nav-link" id="tls">Tools</a>
              </li>
              <li class="nav-item">
                  <a href="#contact" class="nav-link" id="cntct">Contact</a>
              </li>
          </ul>
      </div>
    </nav>
    <!-- End of Navbar -->
</template>

<style scoped>
#menu {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    position: fixed;
    background: linear-gradient(180deg, #0f2227 0%, #0b5255 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#hm,
#prjcts,
#tls,
#cntct {
    margin-left: 50px;
    text-align: center;
    font: normal normal 500 20px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    transition: color 0.3s ease;
}

#hm:hover,
#prjcts:hover,
#tls:hover,
#cntct:hover {
    color: #039682;
}
</style>
