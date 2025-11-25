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

/* White burger icon for mobile */
.navbar-toggler {
    border-color: rgba(255, 255, 255, 0.5);
    padding: 0.5rem 0.75rem;
}

.navbar-toggler:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    outline: none;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    width: 1.5em;
    height: 1.5em;
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

/* Mobile responsive nav links */
@media (max-width: 991px) {

    #hm,
    #prjcts,
    #tls,
    #cntct {
        margin-left: 0;
        padding: 0.75rem 1rem;
    }
}

#hm:hover,
#prjcts:hover,
#tls:hover,
#cntct:hover {
    color: #039682;
}

.navbar-brand {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 24px;
}

.navbar-brand:hover {
    color: #FFFFFF;
}
</style>