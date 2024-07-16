<template>
    <section class="mt-[5rem]">
        <div class="overflow-hidden">
            <div class="flex justify-center">
                <div class="py-6 relative">
                    <div class="bg-[#61c1b4] w-[182px] h-0.5">
                        <div class="w-full absolute top-0 ">
                            <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center px-6">
                <div class="text-center">
                    <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Browse by
                        categories</h1>
                </div>
            </div>
            <div class="flex space-x-10 items-center container mx-auto px-[7.5rem]">
                <div class="w-full py-6 text-xl">
                    12 items found
                </div>
                <div class="w-full flex justify-end items-center space-x-8">
                    <div>
                        <label class="text-xl" for="">Sort By:</label>
                    </div>
                    <div class="select" ref="dropdown">
                        <div class="selectBtn border-2 p-3 bg rounded-xl"
                            :class="{ toggle: dropdownVisible }" @click="toggleDropdown">{{ selectedOption }}</div>
                        <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible }">
                            <div class="option w-full" v-for="option in options" :key="option"
                                @click="selectOption(option)" :data-type="option">{{ option }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ProdutsCategoriesCards  />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProdutsCategoriesCards from '../components/layout/UI/ProductsCategoriesCards.vue'


let selectedOption = 'Best Match';
const dropdownVisible = ref(false);
const options = ['Top Sales', 'Newest Arrivals', 'Price Low to High', 'Price High to Low'];
const dropdown = ref(null);

const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
        dropdownVisible.value = false;
    }
};

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const selectOption = (option) => {
    selectedOption = option;
    dropdownVisible.value = false;
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.select {
    position: relative;
    width: 50%;
}

.select .selectBtn:after {
    content: "";
    position: absolute;
    top: 45%;
    right: 15px;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    border-right: 2px solid #61C1B4;
    border-bottom: 2px solid #61C1B4;
    cursor: pointer;
    transition: 0.2s ease;
}

.select .selectBtn.toggle {
    border-radius: 15px 15px 0 0;
}

.select .selectBtn.toggle:after {
    -webkit-transform: translateY(-50%) rotate(-135deg);
    transform: translateY(-50%) rotate(-135deg);
}

.select .selectDropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    overflow-y: hidden;
    background: #61C1B4;
    border-top: 1px solid #61C1B4;
    z-index: 1;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    visibility: hidden;
    transition: 0.2s ease;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.select .selectDropdown .option {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
}

.select .selectDropdown .option:hover {
    color: white;
}

.select .selectDropdown.toggle {
    visibility: visible;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}

@keyframes rotateAnimation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
