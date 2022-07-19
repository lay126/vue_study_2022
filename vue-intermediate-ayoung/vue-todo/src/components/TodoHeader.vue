<template>
  <header>
      <h1>TODO IT!</h1>
      <!-- <h1> {{ this.$store.store.headerText }} </h1> --> 
  </header>
</template>

<!-- scoped : 이 안에서만 유효한 속성임을 명시 -->
<!-- rem : 폰트와 비교하여 마진이 정해지는 단위 -->
<style scoped> 
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>