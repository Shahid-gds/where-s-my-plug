<template>
    <transition-group name="nested" tag="div">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="backdrop"></div>
            <div class="popup w-[500px] bg-white p-6 rounded shadow-lg">
                <h2 class="text-lg font-bold mb-4">Write a Review</h2>
                <textarea v-model="review" class="w-full p-2 border rounded mb-4" rows="4"
                    placeholder="Write your review..."></textarea>
                <div class="flex items-center mb-4">
                    <span class="text-gray-600 mr-2">Rating:</span>
                    <template v-for="star in 5">
                        <svg @click="rate(star)" v-bind:class="{ 'text-yellow-500': star <= rating }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                          
                      
                    </template>
                </div>
                <div class="flex justify-end space-x-2">
                    <button @click="close" class="bg-gray-200 p-2 rounded">Cancel</button>
                    <button @click="submitReview" class="bg-blue-500 text-white p-2 rounded">Submit</button>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    show: Boolean,
    onClose: Function,
    onSubmit: Function,
});

const review = ref('');
const rating = ref(0);

watch(() => props.show, (newVal) => {
    if (!newVal) {
        review.value = '';
        rating.value = ''
    }
});

const close = () => {
    props.onClose();
};

const submitReview = () => {
    if (review.value.trim() && rating.value > 0) {
        props.onSubmit(review.value, rating.value);
        close();
    }
};

const rate = (star) => {
    rating.value = star;
};
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(-30px);
    opacity: 0;
}
</style>
