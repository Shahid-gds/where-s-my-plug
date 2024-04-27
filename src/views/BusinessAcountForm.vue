<template>
    <section class="container mx-auto pb-[15rem] -mt-[8rem] xl:px-20 px-6">
        <div class="sm:w-[400px] h-[193px] bg-white flex items-center mr-auto ml-auto space-x-5 border-2 p-4 rounded-2xl">
            <div class="bg-[#F6F9F9] p-6 rounded-xl border-2 border-[#61C1B4] relative">
                <svg id="Group_2" data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="71.017"
                    height="71.017" viewBox="0 0 71.017 71.017">
                    <path id="Path_23" data-name="Path 23"
                        d="M60.617,45.908a35.372,35.372,0,0,0-13.493-8.463,20.528,20.528,0,1,0-23.23,0A35.565,35.565,0,0,0,0,71.017H5.548a29.96,29.96,0,0,1,59.92,0h5.548A35.277,35.277,0,0,0,60.617,45.908Zm-25.108-10.4a14.98,14.98,0,1,1,14.98-14.98A15,15,0,0,1,35.508,35.508Z"
                        transform="translate(0)" fill="#61c1b4" />
                </svg>
                <div class="bg-[#61C1B4] absolute right-0 bottom-0 rounded-br-lg rounded-tl-xl p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                </div>
            </div>
            <div class="text-[#818181]">
                <div>Profile Photo</div>
                <div>Add a profile photo</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="px-4">
            <form class="pt-[2rem]">
                <div class="flex flex-wrap">
                    <div v-for="(inputGroup, index) in personalInfoInputGroup" :key="index" class="lg:flex lg:space-x-4 w-full">
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
                    <label for="">Write About Comany <span class="text-[30px] font-[Bold] text-[#EC1818]">*</span></label>
                    <textarea class="border-2 border-[#61C1B4] w-full rounded-xl p-6" name="" id="" cols="30" rows="5" placeholder="A little description of about your Company"></textarea>
                </div>
              
                <div class="flex justify-center">
                    <button class="hover-btn bg-[#61C1B4] p-3 rounded-xl text-white px-10">Submit Now</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

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
            id: 'designation',
            type: 'text ',
            label: 'Your Designation',
            placeholder: 'Enter Your Designation'
        }
    ],
    [
        {
            id: 'companyName',
            type: 'text',
            label: 'Company Name',
            placeholder: 'Enter Your Company  Name'
        },
        {
            id: 'industry',
            type: 'select',
            label: 'Primary Industry',
            options: ['Industry 1', 'Industry 2', 'Industry 3']
        },
        {
            id: 'companySize',
            type: 'text',
            label: 'Company Size',
            placeholder: 'Enter Your Company Size'
        },
       
    ],
    [
        {
            id: 'email',
            type: 'email',
            label: 'Email Address ',
            placeholder: 'Enter Company Email Address'
        },   
        {
            id: 'phone',
            type: 'tel',
            label: 'Phone',
            placeholder: 'Enter Company Phone Number'
        },   
        {
            id: 'fax',
            type: 'text',
            label: 'Fax',
            placeholder: 'Enter Company Fax'
        },   
    ],
    [
        {
            id: 'webUrl',
            type: 'text',
            label: 'Company Website (url)',
            placeholder: 'Enter Company Website (url)'
        },   
        {
            id: 'phone',
            type: 'tel',
            label: 'Phone',
            placeholder: 'Enter Company Phone Number'
        },   
        {
            id: 'fax',
            type: 'text',
            label: 'Fax',
            placeholder: 'Enter Company Fax'
        },   
    ],
    [
        {
            id: 'addressLine1',
            type: 'text',
            label: 'Address Line 1',
            placeholder: 'Enter Your Company Address 1'
        },   
        {
            id: 'addressLine2',
            type: 'text',
            label: 'Address Line 2',
            placeholder: 'Enter Your Company Address 2'
        },   
      
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
            type: 'text',
            label: 'State',
            placeholder: 'Enter Your State'
        },   
        {
            id: 'zipCode',
            type: 'text',
            label: 'ZipCode',
            placeholder: 'Enter Your ZipCode'
        },   
    
    ],
 
]);
let selectedOption = {
    industry: 'Select Primary Industry',
};

const dropdownVisible = ref({
    industry: false,  
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