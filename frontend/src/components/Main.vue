<script setup>
import { NButton, NInput, NSpace } from 'naive-ui';
</script>

<template>
  <n-space vertical style="margin-bottom: 1rem;">
    <n-input
      @click="encode"
      v-model:value="src"
      placeholder="输入要编码的文本"
      type="textarea"
      size="small"
      :autosize="{
        minRows: 3,
        maxRows: 10
      }"
    />
  </n-space>
  <div style="margin-bottom: 1rem;">
    <n-button type="primary" @click="encode">编码↓</n-button>&nbsp;&nbsp;
    <n-button type="info" @click="decode">解码↑</n-button>
  </div>
  <n-space vertical style="margin-bottom: 1rem;">
    <n-input
      v-model:value="dst"
      placeholder="输入要解码的文本"
      type="textarea"
      size="small"
      :autosize="{
        minRows: 3,
        maxRows: 10
      }"
    />
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { yygq } from '../yygq.import.js';

export default defineComponent({
  data() {
    return {
      src: ref(null),
      dst: ref(null)
    };
  },
  methods: {
    encode() {
      if(this.src) {
        this.dst = yygq.encode(this.src);
      }
    },
    decode() {
      if(this.dst) {
        this.src = yygq.decode(this.dst);
      }
    }
  }
});


</script>