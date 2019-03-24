<template>
  <p>角色组件</p>
</template>

<script>
import request from '../../utils/request.js'
export default {
  created () {
    request ({
      method: 'GET',
      url: '/roles'
    }).then(res => {
      console.log(res)
    })
  },
  name: 'RoleList',
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>

</style>
