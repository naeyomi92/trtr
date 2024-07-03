<script setup>
const schedules = await get('schedule')
console.log(schedules)
schedules.forEach((element) => {
  console.log(element)
  console.log(element.id)
  console.log(element.data())
})
</script>

<template>
  <div>안녕하세요 > 모임</div>
  <q-list>
    <q-slide-item v-for="schedule in schedules">
      <q-item>{{ schedule.id }}</q-item>
    </q-slide-item>
  </q-list>
</template>
