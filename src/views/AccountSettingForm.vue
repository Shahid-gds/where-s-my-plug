<template>
    <section class="container mx-auto lg:pb-[20rem] pb-[15rem] -mt-[8rem] lg:px-20 px-6">
        <div class="xl:hidden w-full pb-6">
            <div class="w-full h-[193px] bg-white flex items-center space-x-5 border-2 p-4 rounded-2xl">
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
           </div>
        <div class="xl:flex items-end xl:space-x-4">
          
            <div class="w-full pb-6">
                <div class="w-full bg-white flex items-center border-2 p-6 rounded-2xl relative">
                    <div class="w-full">
                      <label for="" class="text-[#161616] font-[Bold]">First Name</label>
                      <input v-if="!isEdit" type="text" class="w-full text-[#818181] outline-none"
                        readonly :value="fname" />
                      <input v-if="isEdit" type="text"
                        class="w-full text-[#818181] outline-none border-2 p-2 mt-3 rounded-xl px-4"
                        v-model="editedName" />
                      <div v-if="isEdit" class="flex justify-end space-x-4 pt-2">
                        <div class="flex items-center space-x-1 cursor-pointer" @click="cancelEdit">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.735" height="18.735" viewBox="0 0 18.735 18.735">
                              <path fill="#ff3b3b" d="M18.1,3.692,12.425,9.369,18.1,15.046A2.162,2.162,0,1,1,15.045,18.1L9.367,12.426,3.69,18.1A2.162,2.162,0,0,1,.633,15.046L6.31,9.369.633,3.692A2.162,2.162,0,0,1,3.69.635L9.367,6.312,15.045.635A2.162,2.162,0,0,1,18.1,3.692Z"
                                transform="translate(0 -0.002)" />
                            </svg>
                          </div>
                          <div class="text-[#FF3B3B] font-[Bold]">Cancel</div>
                        </div>
                        <div class="flex items-center space-x-1 cursor-pointer" @click="saveEdit">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.965" height="21.992" viewBox="0 0 24.965 21.992">
                              <path
                                fill="#61c1b4"
                                d="M43.387,81.15a.547.547,0,0,1-.4-.176L32.146,69.249a.547.547,0,0,1,.4-.919h5.218a.548.548,0,0,1,.413.188L41.8,72.685a20.755,20.755,0,0,1,2.479-3.928,36.881,36.881,0,0,1,11.88-9.535.547.547,0,0,1,.594.915,35.808,35.808,0,0,0-5.213,5.4,40.256,40.256,0,0,0-7.623,15.2.547.547,0,0,1-.531.416Z"
                                transform="translate(-32 -59.158)"
                              />
                            </svg>
                          </div>
                          <div class="text-[#61C1B4] font-[Bold]">Save</div>
                        </div>
                      </div>
                    </div>
                    <div v-if="!isEdit" class="cursor-pointer absolute right-3" @click="editMode">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#61C1B4"
                        class="w-6 h-6">
                        <path
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </div>
                  </div>
            </div>
           <div class="xl:block hidden w-full pb-6">
            <div class="w-full h-[193px] bg-white flex items-center space-x-5 border-2 p-4 rounded-2xl">
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
           </div>
           <div class="w-full pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Last Name</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="lname">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
           </div>
        </div>
        <div class="xl:flex items-end xl:space-x-4">
          <div class="w-full pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Email Address</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="email">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
          </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Birthday</label>
                        <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="bday">
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Photo ID</label>
                        <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="pId">
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:flex items-end xl:space-x-4">
           <div class="w-full pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Website (url)</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="websiteUrl">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
           </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">User Name</label>
                        <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="uName">
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Password</label>
                        <input type="text" class="w-full text-[#818181] outline-none text-2xl" readonly v-model="pass">
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">About</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="about">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="xl:flex items-end xl:space-x-4">
           <div class="w-full pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Phone</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="phone">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
           </div>
         <div class="w-full pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Mobile</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="mobile">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
         </div>
         <div class="w-full pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Country</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="country">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
         </div>
        </div>
        <div class="pb-20">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Addresses</label>
                    <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="address">
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="pb-16">
            <h1 class="pb-8 font-[Bold]">Preferences</h1>
            <div class="xl:flex xl:space-x-6">
              <div class="w-full pb-6">
                <div class="w-full border-2 p-6 shadow-lg rounded-2xl">
                    <h1 class="font-[Semi-bold]">Interests</h1>
                    <p>Select your interests like delivery or pickup</p>
                    <div class="w-full">
                        <div v-for="(interest, index) in interests" :key="index" class="flex items-center space-x-4">
                            <div class="w-cl-toggle-switch py-4">
                                <label class="cl-switch">
                                    <input type="checkbox" v-model="interest.checked">
                                    <span></span>
                                </label>
                            </div>
                            <div :class="{ 'text-[#818181]': !interest.checked, 'text-[#61C1B4]': interest.checked }">
                                {{ interest.label }}
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                <div class="w-full pb-6">
                    <div class="w-full border-2 p-6 shadow-lg rounded-2xl">
                        <h1 class="font-[Semi-bold]">Product preferences</h1>
                        <p>Select your category preferences like flower, edibles, etc.</p>
                        <div class="sm:flex">
                            <div class="w-full">
                                <div v-for="(product, index) in products" :key="index" class="flex items-center space-x-4">
                                    <div class="w-cl-toggle-switch py-4">
                                        <label class="cl-switch">
                                            <input type="checkbox" v-model="product.checked">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div :class="{ 'text-[#818181]': !product.checked, 'text-[#61C1B4]': product.checked }">
                                        {{ product.label }}
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div v-for="(pro, index) in pros" :key="index" class="flex items-center space-x-4">
                                    <div class="w-cl-toggle-switch py-4">
                                        <label class="cl-switch">
                                            <input type="checkbox" v-model="pro.checked">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div :class="{ 'text-[#818181]': !pro.checked, 'text-[#61C1B4]': pro.checked }">
                                        {{ pro.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <h1 class="pb-8 font-[Bold]">Notifications</h1>
            <div class="flex space-x-6">
                <div class="w-full border-2 p-6 shadow-lg rounded-2xl">
                    <h1 class="font-[Semi-bold]">Interests</h1>
                    <p class="pb-6">Select your interests like delivery or pickup</p>
                    <div class="lg:flex lg:space-x-24">
                        <div class="w-full">
                            <div v-for="(note, index) in notes" :key="index" class="flex items-start space-x-4 pb-10">
                                <div class="w-cl-toggle-switch">
                                    <label class="cl-switch">
                                        <input type="checkbox" v-model="note.checked">
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                   <div  :class="{ 'text-[black]': !note.checked, 'text-[#61C1B4]': note.checked }">
                                    {{ note.label }}
                                   </div>
                                    <div class="text-[#818181]">
                                        {{ note. para }}
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                        <div class="w-full">
                            <div v-for="(note, index) in notes2" :key="index" class="flex items-start space-x-4 pb-10">
                                <div class="w-cl-toggle-switch">
                                    <label class="cl-switch">
                                        <input type="checkbox" v-model="note.checked">
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                   <div  :class="{ 'text-[black]': !note.checked, 'text-[#61C1B4]': note.checked }">
                                    {{ note.label }}
                                   </div>
                                    <div class="text-[#818181]">
                                        {{ note. para }}
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isEdit = ref(false);
const fname = ref('John Smith');
const editedName = ref('');

const editMode = () => {
  isEdit.value = !isEdit.value;
  if (isEdit.value) {
    editedName.value = fname.value;
  }
};

const cancelEdit = () => {
  isEdit.value = false;
  editedName.value = fname.value;
};

const saveEdit = () => {
  isEdit.value = false;
  fname.value = editedName.value;
};

const lname = ref('Farnadies');
const email = ref('johnsmith@gmail.com');
const bday = ref('Enter your date of birth');
const pId = ref('Add a photo ID');
const websiteUrl = ref('https://www.websitename.com');
const uName = ref('John 007');
const pass = ref('**************');
const about = ref('A little description of about yourself');
const phone = ref('Add a phone number');
const mobile = ref('Add a mobile number');
const country = ref('Add Country Name');
const address = ref('Add or remove delivery addresses');
const interests = ref([
    { label: 'Products', checked: false },
    { label: 'Dispensaries near me', checked: false },
    { label: 'Delivery services', checked: false },
    { label: 'Deals', checked: false },
    { label: 'Brands', checked: false },
]);
const products = ref([
    { label: 'Flower', checked: false },
    { label: 'Vape Pens', checked: false },
    { label: 'Edibles', checked: false },
    { label: 'Concentrates', checked: false },
    { label: 'Pre-rolls', checked: false },
]);
const pros = ref([
    { label: 'Concentrates', checked: false },
    { label: 'Pre-rolls', checked: false },
    { label: 'Topicals', checked: false },
    { label: 'Gear', checked: false },
    { label: 'Tinctures', checked: false },
]);
const notes = ref([
    {
        label: 'Order Updates',
        para: 'Receive timely updates to track your order.',
        checked: false
    },
    {
        label: 'Recommendations',
        para: 'Receive personalized recommendations for stores and products we think you’ll love.',
        checked: false
    },
    {
        label: 'Weekly Newsletter',
        para: 'Weekly newsletter on the hottest topics and trends in the cannabis community.',
        checked: false
    },
    {
        label: 'Weedmaps Tips & Tricks',
        para: 'Information and tips on how you can get the most out of Where My Plug.',
        checked: false
    },
    {
        label: 'Surveys',
        para: 'Short surveys that help us improve your experience.',
        checked: false
    },
 
]);
const notes2 = ref([
    {
        label: 'Deals',
        para: 'Receive timely updates to track your order.',
        checked: false
    },
    {
        label: 'Reminders',
        para: 'Reminders about actions you’ve taken on Where My Plug including items you have in your cart and reviews on recent orders.',
        checked: false
    },
    {
        label: 'New Features',
        para: 'New feature announcements from Where My Plug.',
        checked: false
    },
    {
        label: 'Policy & Advocacy',
        para: 'Cannabis policy updates and information on how to get involved in advocacy campaigns.',
        checked: false
    },
]);

</script>

<style scoped>
.cl-toggle-switch {
    position: relative;
}

.cl-switch {
    position: relative;
    display: inline-block;
}

/* Input */
.cl-switch>input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    right: 6px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
}

/* Track */
.cl-switch>span::before {
    content: "";
    float: right;
    display: inline-block;
    margin: 5px 0 5px 10px;
    border-radius: 20px;
    width: 44px;
    height: 21px;
    background-color: transparent;
    border: 2px solid #61C1B4;
    vertical-align: top;
    transition: background-color 0.2s, opacity 0.2s;
}

/* Thumb */
.cl-switch>span::after {
    content: "";
    position: absolute;
    top: 2.5px;
    right: 20px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: 2px solid #61C1B4;
    background: white;
    transition: background-color 0.2s, transform 0.2s;
}

/* Checked */
.cl-switch>input:checked {
    right: -10px;
    background-color: #85b8b7;
}

.cl-switch>input:checked+span::before {
    background-color: #61C1B4;
}

.cl-switch>input:checked+span::after {

    transform: translateX(20px);
}

/* Hover, Focus */
.cl-switch:hover>input {
    opacity: 0.04;
}
</style>