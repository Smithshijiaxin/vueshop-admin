<template>
  <div class="login-wrap">
    <div class="login-container">
      <el-form label-position="top" :rules="loginrules" ref="loginRuleForm" label-width="80px" :model="LoginFrom">
        <el-form-item label="用户名"  prop='username'>
          <el-input v-model="LoginFrom.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop='password'>
          <el-input v-model="LoginFrom.password" type='password'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="handelLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
export default {
  name: 'Longin',
  data () {
    return {
      LoginFrom: {
        username: '',
        password: ''
      },
      loginrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    async handelLogin () {
      this.$refs.loginRuleForm.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('登录失败 !!!')
          return false
        }
      })
    },
    async login () {
      const loginfrom = this.LoginFrom
      const { data, meta } = (await request.post('/login', loginfrom)).data
      if (meta.status === 200) {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        window.localStorage.setItem('token', data.token)
        // this.$router.replace('/')
        const redirectUrl = this.$route.query.redirect || '/'
        this.$router.replace(redirectUrl)
      } else {
        this.$message.error(`登录失败: ${meta.msg}`)
      }
    }
  }
}

</script>

<style scoped>
.login-wrap {
  height: 100%;
  background-color: skyblue;
  position: relative;
}
.login-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 50px;
}
.login-btn {
  width: 100%;
}
</style>
