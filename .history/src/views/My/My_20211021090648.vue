<template>
    <div class="my">
        My
    </div>
</template>

<script>
export default {
  name: 'My',
  setup () {
    const docker = document.getElementsByClassName('docker')
    docker[0].style.display = 'flex'
  }
}
</script>
