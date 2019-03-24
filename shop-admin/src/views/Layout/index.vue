<template>
  <el-container>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="4">
        <img src="./logo.png" alt="">
      </el-col>
      <el-col :span="16">
        <h2>黑马程序员66期后台管理系统</h2>
      </el-col>
      <el-col :span="4">
        <a @click.prevent="handelOut" href="#">退出登录</a>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#21262a"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item index="1-1">
            <template slot="title">
              <span>用户列表</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item index="2-1">
            <template slot="title">
              <span>角色列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2-2">
            <template slot="title">
              <span>权限列表</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item index="3-1">
            <template slot="title">
              <span>商品列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3-2">
            <template slot="title">
              <span>分类参数</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3-3">
            <template slot="title">
              <span>商品分类</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item index="4-1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>订单列表</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item index="5-1">
            <template slot="title">
              <span>数据报表</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handelOut () {
      window.localStorage.removeItem('token')
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
  .el-row {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .el-header{
    background-color: #ffffff;
    border-bottom: 2px solid #21262A;
  }
  .el-aside{
    background-color: #21262A;
  }
  .el-container{
    height: 100%;
  }
  a{
     text-decoration: none;
  }
  a:hover{
    color: black;
  }
</style>
