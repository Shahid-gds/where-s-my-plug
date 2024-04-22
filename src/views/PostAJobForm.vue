<template>
    <section class="pb-[5rem] relative container mx-auto px-6">
        <div class="px-4 pt-[3rem]">
            <form class="pt-[2rem]" @submit.prevent="submitForm">
                <div class="flex flex-wrap">
                    <div v-for="(inputGroup, index) in personalInfoInputGroup" :key="index"
                        class="flex space-x-4 w-full">
                        <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full">
                            <div class="text-[#343434]">
                                <label :for="input.id">
                                    {{ input.label }}
                                    <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                </label>
                            </div>
                            <div v-if="input.type === 'select'" class="select w-full">
                                <div class="selectBtn border-2 border-[#61C1B4] text-[#818181] p-3 w-full rounded-xl px-6"
                                    :class="{ toggle: dropdownVisible[input.id] }" @click="toggleDropdown(input.id)">
                                    {{ selectedOption[input.id] }}
                                </div>
                                <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible[input.id] }">
                                    <div class="option w-full" v-for="option in input.options" :key="option"
                                        @click="selectOption(option, input.id)" :data-type="option">
                                        {{ option }}
                                    </div>
                                </div>
                            </div>

                            <div class="text-[#818181] pb-6" v-else>
                                <input :type="input.type" :id="input.id"
                                    class="border-2 border-[#61C1B4] w-full p-3 rounded-xl px-6"
                                    :placeholder="input.placeholder">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-10">
                    <h1 class="text-[#161616] font-[Bold] text-2xl">Tell us about the role</h1>
                    <label for="">Description <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span></label>
                    <textarea class="border-2 border-[#61C1B4] w-full rounded-xl p-6" name="" id="" cols="30" rows="5"
                        placeholder="A little description of about yourself"></textarea>
                </div>
                <div class="pt-10">
                    <h1 class="text-[#161616] font-[Bold] text-2xl">Skills</h1>
                    <p>Add skill keywords (max 10) to make your job more visible to the right candidates.</p>
                    <div class="flex flex-wrap items-center  mt-[2rem] container mx-auto">
                        <div class="flex flex-wrap items-center mt-4">
                            <div v-for="(skill, index) in skills" :key="index"
                                class="flex items-center px-6 bg-[#F5F5F5] text-gray-800 p-3  rounded-full text-xl mr-2 mb-2">
                                <div class="text-center w-full">
                                    {{ skill }}
                                </div>
                                <div>
                                    <span @click="removeSkill(index)" class="ml-1 cursor-pointer text-[40px]">
                                        &times;
                                    </span>
                                </div>
                            </div>
                            <button class="flex items-center space-x-3 border-2 p-4 rounded-full px-10"
                                @click="toggleSkills">
                                <div>Add Skills</div>
                                <div class="font-extrabold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#61C1B4" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div class="pt-16">
                        <h1 class="text-[#161616] font-[Bold] text-2xl pb-6">Receive Qualified Applicants</h1>
                        <div class="flex flex-wrap">
                            <div v-for="(qualify, index) in qualified" :key="index" class="flex space-x-4 w-full">
                                <div v-for="(input, inputIndex) in qualify" :key="inputIndex" class="w-full">
                                    <div class="text-[#343434]">
                                        <label :for="input.id">
                                            {{ input.label }}
                                            <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                        </label>
                                    </div>
                                    <div v-if="input.type === 'select'" class="select w-full">
                                        <div class="selectBtn border-2 border-[#61C1B4] text-[#818181] p-3 w-full rounded-xl px-6"
                                            :class="{ toggle: dropdownVisible[input.id] }"
                                            @click="toggleDropdown(input.id)">
                                            {{ selectedOption[input.id] }}
                                        </div>
                                        <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible[input.id] }">
                                            <div class="option w-full" v-for="option in input.options" :key="option"
                                                @click="selectOption(option, input.id)" :data-type="option">
                                                {{ option }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-[#818181] pb-6" v-else>
                                        <input :type="input.type" :id="input.id"
                                            class="border-2 border-[#61C1B4] w-full p-3 rounded-xl px-6"
                                            :placeholder="input.placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="hover-btn bg-[#61C1B4] p-3 px-16 text-white rounded-full">Post A Job</button>
                </div>
            </form>
        </div>
    </section>
    <section class="pb-[10rem]">
        <RelatedJobs />
    </section>
    <TransitionGroup name="list" tag="ul">
        <div v-if="addSkills" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
            @click.self="toggleSkills">
            <div class="w-1/2 bg-[#F5F5F5] p-8 rounded-xl relative">
                <input v-model="newSkill" @keydown.enter.prevent="addSkillAndHidePopup"
                    class="w-full border-2 border-[#61C1B4] p-3 rounded-xl px-6"
                    placeholder="Type and press Enter to add a skill" />
                <button @click="toggleSkills"
                    class="absolute top-0 -mt-[1rem] w-10 h-10 bg-[#61C1B4] text-white rounded-full text-4xl">
                    <span class="">&times;</span>
                </button>
                <!-- Message to show when skill is added or already exists -->
                <p v-if="duplicateSkill" class="text-[#EC1818] mt-2">Skill '{{ duplicateSkill }}' already exists.</p>
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const personalInfoInputGroup = ref([
    [
        {
            id: 'jobTitle',
            type: 'text',
            label: 'Job Title',
            placeholder: 'Enter Your Job title'
        },
        {
            id: 'company',
            type: 'text',
            label: 'Company',
            placeholder: 'Enter Your Company Name'
        },
        {
            id: 'workplaceType',
            type: 'text',
            label: 'Workplace Type',
            placeholder: 'Workplace Type'
        }
    ],
    [
        {
            id: 'jobLocation',
            type: 'text',
            label: 'Job Location',
            placeholder: 'Enter Your Job Location'
        },

        {
            id: 'JobType',
            type: 'select',
            label: 'Job Type',
            options: ['Job Type 1', 'Job Type 2', 'Job Type 3']
        }
    ],
]);

const qualified = ref([
    [
        {
            id: 'by',
            type: 'select',
            label: 'Receive Applicants',
            options: ['By Phone', 'One', 'Two']
        },
        {
            id: 'EmailAddress',
            type: 'text',
            label: 'Email Address',
            placeholder: 'Enter Your Email Address'
        },
    ],
])

let selectedOption = {
    JobType: 'Select JobType',
    by: 'By Email'
};

const dropdownVisible = ref({
    JobType: false,
    by: false,

});

const toggleDropdown = (id) => {

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
const addSkills = ref(false)

const toggleSkills = () => {
    addSkills.value = !addSkills.value
}
const newSkill = ref('');
const skills = ref([]);

// Method to add a new skill
const addSkill = () => {
    if (newSkill.value.trim() !== '' && skills.value.length < 10) {
        skills.value.push(newSkill.value.trim());
        newSkill.value = '';
    }
};

// Method to remove a skill
const removeSkill = (index) => {
    skills.value.splice(index, 1);
};

const newSkillAdded = ref('');
const duplicateSkill = ref('');

// Method to add a new skill and hide the popup
const addSkillAndHidePopup = () => {
    if (newSkill.value.trim() !== '' && skills.value.length < 10) {
        const trimmedSkill = newSkill.value.trim();
        if (!skills.value.includes(trimmedSkill)) {
            skills.value.push(trimmedSkill);
            newSkillAdded.value = trimmedSkill; // Set the value for the message
            newSkill.value = '';
            setTimeout(() => {
                newSkillAdded.value = ''; // Clear the message after a short delay
            }, 3000); // Adjust the delay as needed
            toggleSkills(); // Hide the popup
        } else {
            duplicateSkill.value = trimmedSkill; // Set the value for duplicate skill message
            setTimeout(() => {
                duplicateSkill.value = ''; // Clear the message after a short delay
            }, 3000); // Adjust the delay as needed
        }
    }
};

</script>

<style scoped>
textarea {
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

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(0);
}
</style>