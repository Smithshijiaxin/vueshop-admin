<template>
  <p>user组件</p>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'user',
  async created () {
    request({
      method: 'GET',
      url: '/users',
      params: {
        pagenum: 1,
        pagesize: 5
      }
    }).then(userData => {
      console.log(userData)
    })
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>

</style>
