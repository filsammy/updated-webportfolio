<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    project: Object
})

// Generate unique carousel ID for each project card
const carouselId = `carousel-${props.project.id}`;

// Current active image index
const currentIndex = ref(0);

// Get images array (support both old and new format)
const images = computed(() => {
    if (props.project.images && props.project.images.length > 0) {
        return props.project.images;
    }
    return props.project.image ? [props.project.image] : [];
});

// Check if multiple images exist
const hasMultipleImages = computed(() => images.value.length > 1);

// Navigate to specific image
const goToSlide = (index) => {
    currentIndex.value = index;
};

// Navigate to next image
const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Navigate to previous image
const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Handle card click
const handleCardClick = () => {
    if (props.project.url) {
        window.open(props.project.url, '_blank');
    }
};
</script>

<template>
    <div class="card col-md-3" @click="handleCardClick" :class="{ 'clickable': project.url }">
        <!-- Custom Carousel -->
        <div class="image-carousel">
            <div class="carousel-container">
                <!-- Images -->
                <div 
                    v-for="(image, index) in images" 
                    :key="index"
                    class="carousel-slide"
                    :class="{ active: index === currentIndex }"
                >
                    <img :src="image" class="card-img" :alt="`${project.title} - Image ${index + 1}`">
                </div>

                <!-- Navigation Arrows - only show if multiple images -->
                <template v-if="hasMultipleImages">
                    <button 
                        class="carousel-btn prev-btn" 
                        @click.stop="prevSlide" 
                        type="button"
                    >
                        <span>‹</span>
                    </button>
                    <button 
                        class="carousel-btn next-btn" 
                        @click.stop="nextSlide" 
                        type="button"
                    >
                        <span>›</span>
                    </button>
                </template>
            </div>

            <!-- Indicators - only show if multiple images -->
            <div v-if="hasMultipleImages" class="carousel-indicators">
                <button 
                    v-for="(image, index) in images" 
                    :key="index"
                    @click.stop="goToSlide(index)"
                    :class="{ active: index === currentIndex }"
                    type="button"
                ></button>
            </div>
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                {{ project.description }}
            </p>
            
            <!-- Technology Badges -->
            <div v-if="project.technologies && project.technologies.length > 0" class="tech-badges">
                <span 
                    v-for="(tech, index) in project.technologies" 
                    :key="index"
                    class="tech-badge"
                >
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: linear-gradient(145deg, #ffffff 0%, #ffffff86 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0 5px 15px rgba(15, 32, 39, 0.15);
    border-radius: 15px;
    opacity: 1;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(32, 58, 67, 0.1);
}

.card.clickable {
    cursor: pointer;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(15, 32, 39, 0.25);
}

.card-title {
    text-align: left;
    font: normal normal 600 20px Montserrat;
    letter-spacing: 0px;
    color: #203A43;
    opacity: 1;
}

.card-text {
    text-align: left;
    font: normal normal medium 14px Montserrat;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    line-height: 1.6;
}

.card-img {
    padding-top: 25px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 0px;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.card:hover .card-img {
    opacity: 0.9;
}

.image-carousel {
    position: relative;
    width: 100%;
}

.carousel-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
}

.carousel-slide.active {
    opacity: 1;
    pointer-events: auto;
}

.carousel-slide .card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 25px 5px 0px 5px;
}

/* Navigation Buttons */
.carousel-btn {
    position: absolute;
    top: 50%;
    color: rgb(194, 194, 194);
    border: none;
    width: 30px;
    height: 30px;
    background: transparent;
    color: rgb(128, 128, 128);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44px;
    transition: color 0.3s ease, transform 0.3s ease;
    z-index: 10;
}

.carousel-btn:hover {
    background: rgba(3, 150, 130, 0.9);
    transform: scale(1.1);
}

.prev-btn {
    left: 10px;
}

.next-btn {
    right: 10px;
}

.carousel-btn span {
    line-height: 1;
    margin-top: -2px;
}

/* Indicators */
.carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 10px 0;
    position: absolute;
    left: 35%;
    transform: translateX(-50%);
    z-index: 10;
}

.carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    padding: 0;
}

.carousel-indicators button:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
}

.carousel-indicators button.active {
    background: rgba(3, 150, 130, 0.9);
    transform: scale(1.3);
}

/* Technology Badges */
.tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid rgba(32, 58, 67, 0.1);
}

.tech-badge {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, #039682 0%, #027a6a 100%);
    color: #ffffff;
    font-size: 11px;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    border-radius: 15px;
    letter-spacing: 0.3px;
    box-shadow: 0 2px 5px rgba(3, 150, 130, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
}

.tech-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(3, 150, 130, 0.3);
}
</style>
