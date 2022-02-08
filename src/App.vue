<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    min-height: 100vh;
  }
  .wrapper{
    padding: 1rem;
  }
  .upper-case{
        text-transform: uppercase;
    }

</style>
