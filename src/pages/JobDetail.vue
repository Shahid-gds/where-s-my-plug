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
                Go Back Careers Page
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
                                <div class="">
                                    <div
                                        class="hover-btn w-full bg-[#61C1B4] text-center rounded-full p-2 text-white uppercase">
                                        {{ card.applyButton }}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
        <div class="flex">
            <div>
                <div class="px-4 pb-6">
                    <div class="border-2 rounded-2xl p-6">
                        <h1 class="font-[Bold] text-2xl">
                            Job Description
                        </h1>
                        <div v-for="discription in discriptions" :key="discription.index">
                            <p class="py-2 text-[#A5A5A5]">
                                {{ discription.paragraph }}
                            </p>
                        </div>

                    </div>
                </div>
                <div class="px-4 pb-6">
                    <div class="border-2 rounded-2xl p-6">
                        <h1 class="font-[Bold] text-2xl pb-4">
                            Key Responsibilities
                        </h1>
                        <ul v-for="responsibility in responsibilities" :key="responsibility.index"
                            class="px-4 list-disc">
                            <li class="text-[#A5A5A5] pb-6">{{ responsibility.paragraph }}</li>
                        </ul>
                    </div>
                </div>
                <div class="px-4 pb-6">
                    <div class="border-2 rounded-2xl p-6">
                        <h1 class="font-[Bold] text-2xl pb-4">
                            Skill & Experience
                        </h1>
                        <ul v-for="skill in skills" :key="skill.index" class="px-4 list-disc">
                            <li class="text-[#A5A5A5] pb-6">{{ skill.paragraph }}</li>
                        </ul>
                    </div>
                </div>
                <div class="px-4">
                    <div class="border-2 bg-[#F5FCFB] rounded-2xl p-6">
                        <h1 class="font-[Bold] text-2xl pb-4">
                            Share This Job
                        </h1>
                        <div class="flex items-center space-x-4">
                            <a href="#"
                                class="flex items-center space-x-2 bg-[#3B5998] hover:bg-[#5471b0] transition-all duration-300 p-2 px-10 rounded-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                        viewBox="0 0 50 50" fill="white">
                                        <path
                                            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="text-white uppercase mt-1">Facebook</div>
                            </a>
                            <a href="#"
                                class="flex items-center space-x-2 bg-[#55ACEE] hover:bg-[#91bddf] transition-all duration-300 p-2 px-10 rounded-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                        viewBox="0 0 48 48">
                                        <path fill="white"
                                            d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
                                        </path>
                                    </svg>
                                </div>
                                <div class="text-white uppercase mt-1">Twitter</div>
                            </a>
                            <a href="#"
                                class="flex items-center space-x-2 bg-[#007BB5] hover:bg-[#479dc5] transition-all duration-300 p-2 px-10 rounded-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                        viewBox="0 0 48 48">
                                        <path fill="white"
                                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z">
                                        </path>
                                        <path fill="#007BB5"
                                            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="text-white uppercase mt-1">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-6 px-4 pt-6">
                    <div class="w-full">
                        <p class="text-[#A5A5A5]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's</p>
                    </div>
                    <div v-for="card in cards" class="w-[40%]">
                        <div class="hover-btn w-full cursor-pointer bg-[#61C1B4] text-center rounded-full p-2 text-white uppercase">
                            {{ card.applyButton }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[50%] px-4">
                <div class="border-2 rounded-2xl bg-[#F5FCFB] p-6">
                    <h1 class="font-[Bold] text-xl">Job Overview</h1>
                    <div class="pt-10">
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Date
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                April 06, 2021
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Posted:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                1 hours ago
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Expiration date:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                March 15, 2024
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Location:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                London, UK
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Job Title:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                Designer
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Hours:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                50h / week
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Rate:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                $15 - $25 / hour
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <div class="w-[60%]">
                                Salary:
                            </div>
                            <div class="w-[40%] text-[#A5A5A5]">
                                $35k - $45k
                            </div>
                        </div>
                    </div>
                    <div class="pt-10">
                        <h1 class="font-[Bold] text-xl">Job Location</h1>
                        <div class="border-2">
                            <JobLocationMap />
                        </div>
                    </div>
                    <div class="pt-10">
                        <h1 class="font-[Bold] text-xl">Job Type</h1>
                        <div v-for="button in buttons" :key="button.index" class="">
                            <div class="flex flex-wrap">
                                <div class="pr-2">
                                    <div v-if="button.fullTimeButton"
                                        class="bg-[#DDE8F8] text-center p-1.5 px-4 rounded-full text-[#4C6DDC]">
                                        {{ button.fullTimeButton }}
                                    </div>
                                </div>
                                <div class="pr-2">
                                    <div v-if="button.partTimeButton"
                                        class="bg-[#DDE8F8] text-center p-1.5 px-4 rounded-full text-[#4C6DDC]">
                                        {{ button.partTimeButton }}
                                    </div>
                                </div>
                                <div class="pr-2 pb-2">
                                    <div v-if="button.privateButton"
                                        class="bg-[#E1F2E5] text-center p-1.5 px-4 rounded-full text-[#8EB06A]">
                                        {{ button.privateButton }}
                                    </div>
                                </div>
                                <div v-if="button.urgentButton"
                                    class="bg-[#FEF2D9] text-center p-1.5 px-4 rounded-full text-[#FAAB5B]">
                                    {{ button.urgentButton }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-4">
                    <div class="border-2 rounded-2xl bg-[#FFFFFF] p-6">
                        <div class="flex items-center space-x-5">
                            <div>
                                <img src="../assets/images/BrandBoardCardImages/Img2.svg" alt="">
                            </div>
                            <div class="">
                                <h1 class="font-[Bold] pb-2">Castel Solutions</h1>
                                <a class="text-[#61C1B4] underline" href="#">View company profile</a>
                            </div>
                        </div>
                        <div class="pt-10">
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Primary industry:
                                </div>
                                <div class="w-[40%] text-[#A5A5A5]">
                                    Software
                                </div>
                            </div>
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Company size:
                                </div>
                                <div class="w-[40%] text-[#A5A5A5]">
                                    501-1,000
                                </div>
                            </div>
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Founded in:
                                </div>
                                <div class="w-[40%] text-[#A5A5A5]">
                                    2011
                                </div>
                            </div>
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Phone:
                                </div>
                                <div class="w-[40%] text-[#A5A5A5]">
                                    123 456 7890
                                </div>
                            </div>
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Email:
                                </div>
                                <div class="w-[40%] text-[#A5A5A5]">
                                    info@joio.com
                                </div>
                            </div>
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Location:
                                </div>
                                <div class="w-[40%] text-[#A5A5A5]">
                                    London, UK
                                </div>
                            </div>
                            <div class="flex justify-between pb-4">
                                <div class="w-[60%]">
                                    Social media:
                                </div>
                                <div class="flex space-x-3 w-[40%] text-[#A5A5A5]">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                                            viewBox="0 0 50 50" fill="#A5A5A5">
                                            <path
                                                d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                                            viewBox="0 0 48 48">
                                            <path fill="#A5A5A5"
                                                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                                            viewBox="0 0 48 48">
                                            <path fill="#A5A5A5"
                                                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z">
                                            </path>
                                            <path fill="white"
                                                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="border-2 bg-[#F5FCFB] p-6 rounded-2xl text-center">
                                    <a class="text-[#7C9592]" href="#">https://castel.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pb-[10rem]">
        <RelatedJobs />
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import JobLocationMap from '@/components/layout/UI/JobLocationMap.vue';
import RelatedJobs from '../views/RelatedJobs.vue';
const cards = ref([
    {
        id: '1',
        image: import('../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        fullTimeButton: 'Full Time',
        partTimeButton: '',
        privateButton: '',
        urgentButton: '',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
    },

]);
const discriptions = ref([
    {
        id: '1',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '2',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '3',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '4',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
])
const responsibilities = ref([
    {
        id: '1',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '2',
        paragraph: 'Aliquam tempor dui non enim iaculis, ut efficitur velit viverra. Sed a quam finibus metus laoreet commodo eget ac neque.',
    },
    {
        id: '3',
        paragraph: 'Ut eu ante sit amet felis feugiat sollicitudin nec id nunc. Sed porttitor purus.',
    },
    {
        id: '4',
        paragraph: 'Cras egestas sem et dui euismod, eget consequat metus molestie.Pellentesque sit amet nisl nec erat vulputate consequat.',
    },
    {
        id: '5',
        paragraph: 'In rhoncus sapien eget enim lacinia, vel tempor sapien tempus.',
    },
    {
        id: '5',
        paragraph: 'Donec non justo quis dolor varius efficitur ac pharetra lectus.',
    },
])
const skills = ref([
    {
        id: '1',
        paragraph: 'You have at least 3 years’ experience working as a Product Designer.',
    },
    {
        id: '2',
        paragraph: 'You have experience using Sketch and InVision or Framer X',
    },
    {
        id: '3',
        paragraph: 'You have some previous experience working in an agile environment – Think two-week sprints.',
    },
    {
        id: '4',
        paragraph: 'You are familiar using Jira and Confluence in your workflow',
    },
    {
        id: '5',
        paragraph: 'You are familiar using Jira and Confluence in your workflow',
    },
])
const buttons = ref([
    {
        fullTimeButton: 'Full Time',
        partTimeButton: 'Part Time',
        privateButton: 'Private',
        urgentButton: 'Urgent',
    }
])
onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});

</script>