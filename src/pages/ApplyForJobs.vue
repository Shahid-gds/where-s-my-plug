<template>
    <section class="sm:pt-[10rem] pt-[5rem] pb-[5rem] relative container mx-auto px-6">
        <router-link :to="{ name: 'Careers' }" class="flex items-center px-4">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#61C1B4" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </div>

            <div class="mt-1 uppercase font-[Bold]">
                Go Back
            </div>
        </router-link>
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.image"
                class="w-full rounded-2xl 2xl:p-6 p-4 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="flex items-center space-x-4">
                    <div class="w-[10%]">
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex space-x-10 items-center">
                            <div class="w-full">
                                <div class="">
                                    <span class="font-[Extra-Bold] text-[#A5A5A5]">Posted by:</span> <span class="">{{
            card.postedBy }}</span>
                                </div>
                                <div class="py-2 font-[Extra-Bold]">
                                    {{ card.heading }}
                                </div>
                                <div class="text-[#A5A5A5]">
                                    {{ card.paragraph }}
                                </div>
                                <div class="flex space-x-3">
                                    <div v-if="card.fullTimeButton"
                                        class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[10%]">
                                        {{ card.fullTimeButton }}
                                    </div>
                                    <div v-if="card.partTimeButton"
                                        class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[10%]">
                                        {{ card.partTimeButton }}
                                    </div>
                                    <div v-if="card.privateButton"
                                        class="bg-[#E1F2E5] text-center p-1.5 rounded-full text-[#8EB06A] w-[10%]">
                                        {{ card.privateButton }}
                                    </div>
                                    <div v-if="card.urgentButton"
                                        class="bg-[#FEF2D9] text-center p-1.5 rounded-full text-[#FAAB5B] w-[10%]">
                                        {{ card.urgentButton }}
                                    </div>
                                </div>
                            </div>
                            <div class="w-[20%]">
                                <div class="text-right">
                                   <div class="p-2">
                                    <a class="text-[#61C1B4] underline" href="#">View company profile</a>
                                   </div>
                                    <div class="border-2 bg-[#F5FCFB] p-4 rounded-2xl text-center">
                                        <a class="text-[#7C9592]" href="#">https://castel.com</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
        <div class="px-4 pt-[3rem]">
            <h1 class="font-[Bold] text-2xl">Personal Information</h1>
            <form class="pt-[2rem]">
                <div class="flex flex-wrap">
                    <div v-for="(inputGroup, index) in personalInfoInputGroup" :key="index" class="flex space-x-4 w-full">
                        <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full">
                            <div class="text-[#343434]">
                                <label :for="input.id">
                                    {{ input.label }}
                                    <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                </label>
                            </div>
                            <div v-if="input.type === 'select'" class="select w-full">
                                <div
                                  class="selectBtn border-2 border-[#61C1B4] text-[#818181] p-3 w-full rounded-xl px-6"
                                  :class="{ toggle: dropdownVisible[input.id] }"
                                  @click="toggleDropdown(input.id)"
                                >
                                  {{ selectedOption[input.id] }}
                                </div>
                                <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible[input.id] }">
                                  <div
                                    class="option w-full"
                                    v-for="option in input.options"
                                    :key="option"
                                    @click="selectOption(option, input.id)"
                                    :data-type="option"
                                  >
                                    {{ option }}
                                  </div>
                                </div>
                              </div>
                                                 
                            <div class="text-[#818181] pb-6" v-else>
                                <input :type="input.type" :id="input.id" class="border-2 border-[#61C1B4] w-full p-3 rounded-xl px-6" :placeholder="input.placeholder">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pb-10">
                    <label for="">About <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span></label>
                    <textarea class="border-2 border-[#61C1B4] w-full rounded-xl p-6" name="" id="" cols="30" rows="5" placeholder="A little description of about yourself"></textarea>
                </div>
                <div class="pb-10">
                    <h1 class="text-[#161616] font-[Bold] text-2xl">Attachments</h1>
                    <label for="">Cover Letter, Upload Resume, Ecadmic & Experience Documents etc.... <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span></label>
                    <div class="relative">
                        <input class="border-2 border-[#61C1B4] p-2 rounded-xl w-full px-6" type="text" placeholder="No File Chosen">
                        <button class="bg-[#3B3B3B] p-2 border-2 border-[#3B3B3B] text-white px-6 rounded-xl absolute right-0">Upload Files</button>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button class="hover-btn bg-[#61C1B4] p-3 rounded-xl text-white px-10">Apply Now</button>
                </div>
            </form>
        </div>
    </section>
    <section class="pb-[10rem]">
        <RelatedJobs />
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import RelatedJobs from '../views/RelatedJobs.vue';
const cards = ref([
    {
        id: '1',
        image: import('../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        fullTimeButton: 'Full Time',
        partTimeButton: '',
        privateButton: 'Private',
        urgentButton: 'Urgent',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
    },

]);
const personalInfoInputGroup = ref([
    [
        {
            id: 'firstName',
            type: 'text',
            label: 'First Name',
            placeholder: 'Enter Your First Name'
        },
        {
            id: 'lastName',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Enter Your Last Name'
        },
        {
            id: 'email',
            type: 'email',
            label: 'Email Address',
            placeholder: 'Enter Your Email Address'
        }
    ],
    [
        {
            id: 'phoneNumber',
            type: 'tel',
            label: 'Phone Number',
            placeholder: 'Enter Your Phone Number'
        },
        {
            id: 'dob',
            type: 'date',
            label: 'Date Of Birth',
            placeholder: 'Enter Your Address'
        },
        {
            id: 'country',
            type: 'select',
            label: 'Country',
            options: ['Country 1', 'Country 2', 'Country 3']
        }
    ],
    [
        {
            id: 'city',
            type: 'text',
            label: 'City',
            placeholder: 'Enter Your City'
        },
       
        {
            id: 'state',
            type: 'select',
            label: 'State',
            options: ['State 1', 'State 2', 'State 3']
        },
        {
            id: 'zip',
            type: 'text',
            label: 'Zip Code',
            placeholder: 'Enter Your ZipCode'
        },
    ],
]);
let selectedOption = {
    country: 'Select Country',
    state: 'Select State'
};

const dropdownVisible = ref({
    country: false,
    state: false,
    // Add more properties for each select dropdown if needed
  });
  
  const toggleDropdown = (id) => {
    // Toggle the visibility state for the given dropdown id
    dropdownVisible.value[id] = !dropdownVisible.value[id];
    // Close other dropdowns when opening one
    for (const key in dropdownVisible.value) {
      if (key !== id) {
        dropdownVisible.value[key] = false;
      }
    }
  };
  
  const selectOption = (option, id) => {
    selectedOption[id] = option;
    dropdownVisible.value[id] = false;
  };

onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});

</script>

<style scoped>
textarea{
    resize: none;
}
.select {
    position: relative;
    width: 100%;
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
    z-index: 1;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    visibility: hidden;
    transition: 0.2s ease;
    background: white;
    border-right: 2px solid #61C1B4;
    border-bottom: 2px solid #61C1B4;
    border-left: 2px solid #61C1B4;
}

.select .selectDropdown .option {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
}

.select .selectDropdown .option:hover {

    color: #61C1B4;
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