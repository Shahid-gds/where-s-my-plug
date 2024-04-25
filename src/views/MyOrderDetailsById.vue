<template>
    <section class="pb-[20rem] -mt-[5rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full">
            <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6 p-6">
              
                 <div class="flex  items-center py-4" :class="{ 'border-b-2': index !== cards.length - 1 }">
                    <div class="w-full flex items-center space-x-6">
                        <div class="w-[140px] h-[140px] border-2 p-4 rounded-xl">
                            <img class="w-[80px] mr-auto ml-auto" :src="selectedCard.src" alt="">
                        </div>
                        <div>
                            <div class="text-[#61C1B4] font-[Bold] text-[18px]">
                                {{ selectedCard.weight }}
                            </div>
                            <div class="font-[Semi-Bold] text-[20px] pb-4">
                                {{ selectedCard.heading }}
                            </div>
                            <div>
                                {{ selectedCard.paragraph }}
                            </div>
                            <div class=" text-[#AEAEAE]">
                                {{ selectedCard.statusDate }}
                            </div>
                        </div>
                       </div>
                       <div class="w-1/2 flex items-center justify-center space-x-24">
                        <div class="text-[#7D7D7D] font-[Semi-Bold]">
                            {{ selectedCard.price }}
                        </div>
                        <div class="text-[#7D7D7D] font-[Semi-Bold]">
                            {{ selectedCard.qty }}
                        </div>
                       </div>
                       <div class="w-1/2 flex justify-end items-center relative">
                        <div class="flex items-center space-x-2 bg-[#DEF8F4] p-2 px-8 rounded-full">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.985" height="13.984" viewBox="0 0 13.985 13.984">
                                    <path id="Path_7351" data-name="Path 7351" d="M11.531-6.226,5.154.148,4.227-.779l.1-.1H3.063a.439.439,0,0,1-.437-.437V-2.573l-.1.1a1.11,1.11,0,0,0-.276.465L1.625.126,3.762-.5a1.3,1.3,0,0,0,.465-.276l.927.927A2.4,2.4,0,0,1,4.132.755l-3.29.968a.617.617,0,0,1-.649-.189A.6.6,0,0,1,.027.908L.994-2.382A2.411,2.411,0,0,1,1.6-3.4L7.976-9.78Zm1.941-4.417a1.751,1.751,0,0,1,0,2.476L12.149-6.844,8.594-10.4l1.323-1.323a1.753,1.753,0,0,1,2.477,0Z" transform="translate(0 12.234)" fill="#358177"/>
                                </svg>                                                               
                            </div>
                            <div class="text-[#358177] uppercase mt-1">
                                {{ selectedCard.manage }}
                            </div>
                        </div>
                        
                       </div>
                 </div>
             <div class="flex space-x-6 pt-4">
                <div class="w-full">
                    <div class="">
                        <div class="border-2 rounded-2xl p-6">
                            <div class="font-[Bold] pb-4">
                                {{ selectedCard.shippingAddress }}
                            </div>
                            <div class="flex items-center space-x-6">
                                <div>
                                    {{ selectedCard.userName }}
                                </div>
                                <div class="bg-[#DDE8F8] p-1 px-4 rounded-full text-[#4C6DDC]">
                                    {{ selectedCard.button }}
                                </div>
                            </div>
                            <div class="text-[#A5A5A5] py-2">
                                {{ selectedCard.detailPara }}
                            </div>
                            <div>
                                {{ selectedCard.phone }}
                            </div>
                         </div>
                    </div>
                    <div class="pt-4">
                        <div class="border-2 rounded-2xl p-6">
                            <div class="font-[Bold] pb-4">
                                {{ selectedCard.shippingAddress }}
                            </div>
                            <div class="flex items-center space-x-6">
                                <div>
                                    {{ selectedCard.userName }}
                                </div>
                                <div class="bg-[#DDE8F8] p-1 px-4 rounded-full text-[#4C6DDC]">
                                    {{ selectedCard.button }}
                                </div>
                            </div>
                            <div class="text-[#A5A5A5] py-2">
                                {{ selectedCard.detailPara }}
                            </div>
                            <div>
                                {{ selectedCard.phone }}
                            </div>
                         </div>
                    </div>
                   </div>
                   <div class="w-full h-[300px] border-2 rounded-2xl p-6">
                    <div class="font-[Bold] pb-6">
                        {{ selectedCard.totalSummary }}
                    </div>
                    <div class="border-b-2">
                        <div class="flex justify-between items-center pb-4">
                            <div class=" text-[#393939]">Sub Total</div>
                            <div>
                                {{ selectedCard.subTotal }}
                            </div>
                        </div>
                        <div class="flex justify-between items-center pb-4">
                            <div class=" text-[#393939]">Delivery Fee</div>
                            <div>
                                {{ selectedCard.deliveryFee }}
                            </div>
                        </div>
                        <div class="flex justify-between items-center pb-4">
                            <div class=" text-[#393939]">Cash Payment Fee</div>
                            <div>
                                {{ selectedCard.paymentFee }}
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-6">
                        <div class=" text-[#393939] font-[Bold]">Total</div>
                        <div class="font-[Bold]">
                            {{ selectedCard.total }}
                        </div>
                    </div>
                    <div class="text-[#A5A5A5]">
                        Paid by Cash on Delivery
                    </div>
                   </div>
             </div>
              
            </transition-group>
        </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import img1 from "../assets/images/CannabisStrainCarousel/ImgTwo.svg"
  const route = useRoute();
  const cards = ref([
    {
        id: '1',
        src: img1,
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: 'Price: $99.00',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Write A Review',
        statusDate: 'Delivered on 18 March, 2024',
        shippingAddress: 'Shipping Address',
        userName: 'John Fernadies',
        button: 'Home',
        detailPara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text',
        phone: '+1 234 5678 9101',
        totalSummary:'Total Summary',
        subTotal: '$99.00',
        deliveryFee: '$5.00',
        paymentFee: '$2.50',
        total:'$106.50'
    },
    {
        id: '2',
        src: img1,
        weight: '1.0 g',
        heading: 'Lorem Ipsum is simply dummy text',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024',
        shippingAddress: 'Shipping Address',
        userName: 'John Fernadies',
        button: 'Home',
        detailPara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text',
        phone: '+1 234 5678 9101',
        totalSummary:'Total Summary',
        subTotal: '$99.00',
        deliveryFee: '$5.00',
        paymentFee: '$2.50',
        total:'$106.50'
    },
    {
        id: '3',
        src: img1,
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024',
        shippingAddress: 'Shipping Address',
        userName: 'John Fernadies',
        button: 'Home',
        detailPara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text',
        phone: '+1 234 5678 9101',
        totalSummary:'Total Summary',
        subTotal: '$99.00',
        deliveryFee: '$5.00',
        paymentFee: '$2.50',
        total:'$106.50'
    },
    {
        id: '4',
        src: img1,
        weight: '1.0 g',
        heading: 'Lorem Ipsum is simply dummy text',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024',
        shippingAddress: 'Shipping Address',
        userName: 'John Fernadies',
        button: 'Home',
        detailPara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text',
        phone: '+1 234 5678 9101',
        totalSummary:'Total Summary',
        subTotal: '$99.00',
        deliveryFee: '$5.00',
        paymentFee: '$2.50',
        total:'$106.50'
    },
    {
        id: '5',
        src: img1,
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024',
        shippingAddress: 'Shipping Address',
        userName: 'John Fernadies',
        button: 'Home',
        detailPara: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text',
        phone: '+1 234 5678 9101',
        totalSummary:'Total Summary',
        subTotal: '$99.00',
        deliveryFee: '$5.00',
        paymentFee: '$2.50',
        total:'$106.50'
    },
  
]);

  const selectedCard = cards.value.find(card => card.id === route.params.id);
  </script>

  <style scoped>
  .bg {
    background: url("../assets/images/bgs/TermsHeroBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
  }
</style>