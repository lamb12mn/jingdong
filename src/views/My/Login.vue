<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>
<script>

import { useRouter } from 'vue-router'
import { post } from '../../config/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'

// 处理登录的逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const result = await post('/user/login', {
        username: data.username,
        password: data.password
      })
      if (result.code === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
// 处理登录跳转
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}
// 处理注册的验证
export default {
  name: 'wrapper',
  components: { Toast },
  // 职责就是告诉你，代码执行的一个流程
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'none'
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    const { isLogin } = localStorage
    const router = useRouter()
    if (isLogin) {
      router.push({
        name: 'My'
      })
    }
    return {
      username,
      password,
      isLogin,
      show,
      toastMessage,
      handleLogin,
      handleRegisterClick
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 40px auto;
    width: 150px;
    height: 150px;
  }
  &__input {
    height: 75px;
    margin: 0 40px 16px 40px;
    background: #f9f9f9;
    border: 10px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: 75px;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 30px;
      color: #666;
      margin-left: 20px;
      &::placeholder {
        color: #333;
      }
    }
  }
  &__login-button {
    margin: 32px 40px 16px 40px;
    line-height: 75px;
    background: #0091ff;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 20px;
    color: #666;
  }
}
</style>
