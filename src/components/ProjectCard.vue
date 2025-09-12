<script setup>
import { defineProps } from 'vue';

// define the props for this component named "project".
defineProps({
    project: Object
})
</script>

  <template>
    <div class="card col-md-3">
        <!-- use ":" directive to bind the project.image to the src attribute -->
        <img :src="project.image" class="card-img-top card-img" alt="...">
        <div class="card-body">
            <!-- use interpolation to bind the project.title to the card title -->
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                {{ project.description }}
            </p>
        
        </div>
    </div>
</template>

<style></style>