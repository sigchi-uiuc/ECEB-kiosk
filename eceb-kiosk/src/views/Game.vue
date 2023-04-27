<template>
    <unity src="static/Build/2019Game.json" width="1000" height="600" unityLoader="static/Build/UnityLoader.js"></unity>  
  </template>

<script>
import Unity from 'vue-unity-webgl'

export default {
    name: 'Game',
    components: { Unity }
}
</script>

<style scoped>

</style>
  