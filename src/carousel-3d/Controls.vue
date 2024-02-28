<template>
  <div class="carousel-3d-controls">
    <a href="#" class="prev absolute z-50 w-[60px] text-[30px] h-[30px] text-[#8230e7] top-0 2xl:ml-[25%] xl:ml-[15%] lg:ml-[10%] mr-[25%] bg-[#180b26] pl-[6px] rounded-full" @click.prevent="parent.goPrev()"
       :class="{ disabled: !parent.isPrevPossible }"
       :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`"
       aria-label="Previous slide">
      <span v-html="prevHtml"></span>
    </a>
    <a href="#" class="next absolute z-50 w-[60px] text-[30px] h-[30px] text-[#8230e7] top-0 ml-[25%] 2xl:mr-[25%] xl:mr-[15%] lg:mr-[10%] bg-[#180b26] pl-[6px] rounded-full" @click.prevent="parent.goNext()"
       :class="{ disabled: !parent.isNextPossible }"
       :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`"
       aria-label="Next slide">
      <span v-html="nextHtml"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    /**
     * Width in pixels of the navigation buttons
     */
    width: {
      type: [String, Number],
      default: 30
    },
    /**
     * Height in pixels of the navigation buttons
     */
    height: {
      type: [String, Number],
      default: 30
    },
    /**
     * Text content of the navigation prev button
     */
    prevHtml: {
      type: String,
      default: '&lsaquo;'
    },
    /**
     * Text content of the navigation next button
     */
    nextHtml: {
      type: String,
      default: '&rsaquo;'
    }
  },
  data () {
    return {
      parent: this.$parent
    }
  }
}
</script>

<style scoped>
.carousel-3d-controls {
  position: absolute;
  top: 50%;
  height: 0;
  margin-top: -30px;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.next:hover, .prev:hover {
  cursor: pointer;
  background-color: #8230e7;
  color: white;
}

.prev {
  left: 10px;
  padding-right: 8px;
}

.next {
  right: 10px;
  text-align: center;
}

.disabled {
  opacity: 0.2;
  cursor: default;
}

.disabled:hover {
  cursor: default;
  opacity: 0.2;
}
</style>
