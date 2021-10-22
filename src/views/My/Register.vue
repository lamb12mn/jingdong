<template>
    <div class="register">
         <img class="register__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="register__input">
      <input class="register__input__content" placeholder="请输入手机号" v-model="username"/>
    </div>
    <div class="register__input">
      <input
        class="register__input__content"
        placeholder="请输入密码"
        type="password"
         v-model="password"
      />
    </div>
    <div class="register__input">
      <input
        class="register__input__content"
        placeholder="确认密码"
        type="password"
         v-model="ensurement"
      />
    </div>
    <div class="register__register-button" @click="handleRegister">注册</div>
    <div class="register__register-link" @click="handleLoginClick">已有账号去登陆</div>
    <Toast v-if="show" :message="toastMessage"/>
    </div>
</template>

<style lang="scss" scoped>
.register {
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
    // padding: 0 16px;
    background: #F9F9F9;
    border: 10px solid rgba(0,0,0,0.10);
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
        color: #666;
      }
    }
  }
  &__register-button {
    margin: 32px 40px 16px 40px;
    line-height: 75px;
    background: #0091FF;
    box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
    border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 20px;
    color: #666;
  }
}
</style>
<script>
import { useRouter } from 'vue-router'
import { post } from '../../config/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'
// 处理注册相关的逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/user/register', {
        username: data.username,
        password: data.password
      })
      if (result.code === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { username, password, ensurement, handleRegister }
}
// 处理注册跳转
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'none'

    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, ensurement, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return {
      show,
      toastMessage,
      username,
      password,
      ensurement,
      handleRegister,
      handleLoginClick
    }
  }
}
</script>
